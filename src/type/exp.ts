

'use strict';

import { Type } from '../type';
import ast = require('../yamlAST');

import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { WacLexer } from '../wac/WacLexer'
import { WacListener } from '../wac/WacListener'
import { WacParser } from '../wac/WacParser'
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { ErrorListener } from '../antlr/error'


function wacParse(expression) {
    let inputStream = new ANTLRInputStream(expression);
    let lexer = new WacLexer(inputStream);
    let el = new ErrorListener
    lexer.addErrorListener(el)
    let tokenStream = new CommonTokenStream(lexer);

    let parser = new WacParser(tokenStream);
    parser.addErrorListener(el)
    

    // Parse the input, where `compilationUnit` is whatever entry point you defined
    let tree = parser.start()
    const listener: WacListener = new EnterFunctionListener();
    
    ParseTreeWalker.DEFAULT.walk(listener, tree)
    if(el.Errors.length > 0) {
        throw new Error(el.Errors.join("\n"))
    }
}

class EnterFunctionListener implements WacListener {
}

function resolveYamlExp(nodeOrString: ast.YAMLNode | string) {
    const expression = ast.isYAMLNode(nodeOrString) ? nodeOrString.value : nodeOrString;

    wacParse(expression)

    if (expression === "no") {
        throw new Error('The value cannot be "no" silly!');
        // return false
    }

    return true;
}

// function constructYamlExp(nodeOrString: ast.YAMLNode | string) {
//     if (ast.isYAMLNode(nodeOrString)) {
//         // YAML Boolean is already constructed
//         return nodeOrString;
//     }
//     return nodeOrString === 'true' ||
//         nodeOrString === 'True' ||
//         nodeOrString === 'TRUE';
// }

// function isBoolean(object) {
//     return '[object Boolean]' === Object.prototype.toString.call(object);
// }


// export = new Type('tag:yaml.org,2002:exp', {
//     kind: 'scalar',
//     predicate: isExpression,
//     construct: function (data) { return null !== data ? data : ''; }
// });

export = new Type('tag:yaml.org,2002:exp', {
    kind: 'scalar',
    resolve: resolveYamlExp,
    construct: function (data) { return null !== data ? data : ''; },
    // predicate: isBoolean,
    // represent: {
    //     lowercase: function (object) { return object ? 'true' : 'false'; },
    //     uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    //     camelcase: function (object) { return object ? 'True' : 'False'; }
    // },
    // defaultStyle: 'lowercase'
});


