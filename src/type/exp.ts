

'use strict';

import { Type } from '../type';
import ast = require('../yamlAST');


function resolveYamlExp(nodeOrString: ast.YAMLNode | string) {
    const expression = ast.isYAMLNode(nodeOrString) ? nodeOrString.value : nodeOrString;
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


