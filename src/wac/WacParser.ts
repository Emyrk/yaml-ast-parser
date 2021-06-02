// Generated from src/wac/Wac.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { WacListener } from "./WacListener";
import { WacVisitor } from "./WacVisitor";


export class WacParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly MUL = 12;
	public static readonly DIV = 13;
	public static readonly ADD = 14;
	public static readonly SUB = 15;
	public static readonly INTEGER = 16;
	public static readonly FLOAT_LIT = 17;
	public static readonly INTERPRETED_STRING_LIT = 18;
	public static readonly BOOLEAN = 19;
	public static readonly WHITESPACE = 20;
	public static readonly IF = 21;
	public static readonly ELSE = 22;
	public static readonly THEN = 23;
	public static readonly INT_CAST = 24;
	public static readonly FLOAT_CAST = 25;
	public static readonly DELIMITER = 26;
	public static readonly KEY_PATH = 27;
	public static readonly RULE_start = 0;
	public static readonly RULE_key = 1;
	public static readonly RULE_literal = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_expression = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "key", "literal", "statement", "expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", 
		"'and'", "'or'", "'!'", "'*'", "'/'", "'+'", "'-'", undefined, undefined, 
		undefined, undefined, undefined, "'if'", "'else'", "'then'", "'int'", 
		"'float'", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "MUL", "DIV", "ADD", 
		"SUB", "INTEGER", "FLOAT_LIT", "INTERPRETED_STRING_LIT", "BOOLEAN", "WHITESPACE", 
		"IF", "ELSE", "THEN", "INT_CAST", "FLOAT_CAST", "DELIMITER", "KEY_PATH",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WacParser._LITERAL_NAMES, WacParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return WacParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Wac.g4"; }

	// @Override
	public get ruleNames(): string[] { return WacParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return WacParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(WacParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, WacParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 10;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, WacParser.RULE_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 12;
			this.match(WacParser.KEY_PATH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, WacParser.RULE_literal);
		try {
			this.state = 18;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WacParser.INTEGER:
				_localctx = new IntegerLitContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 14;
				this.match(WacParser.INTEGER);
				}
				break;
			case WacParser.BOOLEAN:
				_localctx = new BoolLitContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 15;
				this.match(WacParser.BOOLEAN);
				}
				break;
			case WacParser.FLOAT_LIT:
				_localctx = new FloatLitContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 16;
				this.match(WacParser.FLOAT_LIT);
				}
				break;
			case WacParser.INTERPRETED_STRING_LIT:
				_localctx = new StringLitContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 17;
				this.match(WacParser.INTERPRETED_STRING_LIT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, WacParser.RULE_statement);
		try {
			this.state = 28;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WacParser.T__0:
			case WacParser.T__10:
			case WacParser.INTEGER:
			case WacParser.FLOAT_LIT:
			case WacParser.INTERPRETED_STRING_LIT:
			case WacParser.BOOLEAN:
			case WacParser.INT_CAST:
			case WacParser.FLOAT_CAST:
			case WacParser.KEY_PATH:
				_localctx = new ExpStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 20;
				this.expression(0);
				}
				break;
			case WacParser.IF:
				_localctx = new IfStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 21;
				this.match(WacParser.IF);
				this.state = 22;
				this.expression(0);
				this.state = 23;
				this.match(WacParser.THEN);
				this.state = 24;
				this.expression(0);
				this.state = 25;
				this.match(WacParser.ELSE);
				this.state = 26;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, WacParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WacParser.INTEGER:
			case WacParser.FLOAT_LIT:
			case WacParser.INTERPRETED_STRING_LIT:
			case WacParser.BOOLEAN:
				{
				_localctx = new LiteralExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 31;
				this.literal();
				}
				break;
			case WacParser.INT_CAST:
				{
				_localctx = new IntCastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 32;
				this.match(WacParser.INT_CAST);
				this.state = 33;
				this.match(WacParser.T__0);
				this.state = 34;
				this.expression(0);
				this.state = 35;
				this.match(WacParser.T__1);
				}
				break;
			case WacParser.FLOAT_CAST:
				{
				_localctx = new FloatCastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 37;
				this.match(WacParser.FLOAT_CAST);
				this.state = 38;
				this.match(WacParser.T__0);
				this.state = 39;
				this.expression(0);
				this.state = 40;
				this.match(WacParser.T__1);
				}
				break;
			case WacParser.T__0:
				{
				_localctx = new ParenContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 42;
				this.match(WacParser.T__0);
				this.state = 43;
				this.expression(0);
				this.state = 44;
				this.match(WacParser.T__1);
				}
				break;
			case WacParser.T__10:
				{
				_localctx = new InvertLogicalContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 46;
				this.match(WacParser.T__10);
				this.state = 47;
				this.expression(2);
				}
				break;
			case WacParser.KEY_PATH:
				{
				_localctx = new KeyPathContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 48;
				this.key();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 65;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 63;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new MulDivContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, WacParser.RULE_expression);
						this.state = 51;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 52;
						(_localctx as MulDivContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === WacParser.MUL || _la === WacParser.DIV)) {
							(_localctx as MulDivContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 53;
						this.expression(7);
						}
						break;

					case 2:
						{
						_localctx = new AddSubContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, WacParser.RULE_expression);
						this.state = 54;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 55;
						(_localctx as AddSubContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === WacParser.ADD || _la === WacParser.SUB)) {
							(_localctx as AddSubContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 56;
						this.expression(6);
						}
						break;

					case 3:
						{
						_localctx = new ComparatorContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, WacParser.RULE_expression);
						this.state = 57;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 58;
						(_localctx as ComparatorContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WacParser.T__2) | (1 << WacParser.T__3) | (1 << WacParser.T__4) | (1 << WacParser.T__5) | (1 << WacParser.T__6) | (1 << WacParser.T__7))) !== 0))) {
							(_localctx as ComparatorContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 59;
						this.expression(5);
						}
						break;

					case 4:
						{
						_localctx = new LogicalContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, WacParser.RULE_expression);
						this.state = 60;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 61;
						(_localctx as LogicalContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === WacParser.T__8 || _la === WacParser.T__9)) {
							(_localctx as LogicalContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 62;
						this.expression(4);
						}
						break;
					}
					}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 4:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);

		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1DG\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x15\n" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05\x1F\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x064\n\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
		"B\n\x06\f\x06\x0E\x06E\v\x06\x03\x06\x02\x02\x03\n\x07\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\x02\x06\x03\x02\x0E\x0F\x03\x02\x10\x11\x03\x02\x05" +
		"\n\x03\x02\v\f\x02N\x02\f\x03\x02\x02\x02\x04\x0E\x03\x02\x02\x02\x06" +
		"\x14\x03\x02\x02\x02\b\x1E\x03\x02\x02\x02\n3\x03\x02\x02\x02\f\r\x05" +
		"\b\x05\x02\r\x03\x03\x02\x02\x02\x0E\x0F\x07\x1D\x02\x02\x0F\x05\x03\x02" +
		"\x02\x02\x10\x15\x07\x12\x02\x02\x11\x15\x07\x15\x02\x02\x12\x15\x07\x13" +
		"\x02\x02\x13\x15\x07\x14\x02\x02\x14\x10\x03\x02\x02\x02\x14\x11\x03\x02" +
		"\x02\x02\x14\x12\x03\x02\x02\x02\x14\x13\x03\x02\x02\x02\x15\x07\x03\x02" +
		"\x02\x02\x16\x1F\x05\n\x06\x02\x17\x18\x07\x17\x02\x02\x18\x19\x05\n\x06" +
		"\x02\x19\x1A\x07\x19\x02\x02\x1A\x1B\x05\n\x06\x02\x1B\x1C\x07\x18\x02" +
		"\x02\x1C\x1D\x05\n\x06\x02\x1D\x1F\x03\x02\x02\x02\x1E\x16\x03\x02\x02" +
		"\x02\x1E\x17\x03\x02\x02\x02\x1F\t\x03\x02\x02\x02 !\b\x06\x01\x02!4\x05" +
		"\x06\x04\x02\"#\x07\x1A\x02\x02#$\x07\x03\x02\x02$%\x05\n\x06\x02%&\x07" +
		"\x04\x02\x02&4\x03\x02\x02\x02\'(\x07\x1B\x02\x02()\x07\x03\x02\x02)*" +
		"\x05\n\x06\x02*+\x07\x04\x02\x02+4\x03\x02\x02\x02,-\x07\x03\x02\x02-" +
		".\x05\n\x06\x02./\x07\x04\x02\x02/4\x03\x02\x02\x0201\x07\r\x02\x0214" +
		"\x05\n\x06\x0424\x05\x04\x03\x023 \x03\x02\x02\x023\"\x03\x02\x02\x02" +
		"3\'\x03\x02\x02\x023,\x03\x02\x02\x0230\x03\x02\x02\x0232\x03\x02\x02" +
		"\x024C\x03\x02\x02\x0256\f\b\x02\x0267\t\x02\x02\x027B\x05\n\x06\t89\f" +
		"\x07\x02\x029:\t\x03\x02\x02:B\x05\n\x06\b;<\f\x06\x02\x02<=\t\x04\x02" +
		"\x02=B\x05\n\x06\x07>?\f\x05\x02\x02?@\t\x05\x02\x02@B\x05\n\x06\x06A" +
		"5\x03\x02\x02\x02A8\x03\x02\x02\x02A;\x03\x02\x02\x02A>\x03\x02\x02\x02" +
		"BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02D\v\x03\x02\x02" +
		"\x02EC\x03\x02\x02\x02\x07\x14\x1E3AC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WacParser.__ATN) {
			WacParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WacParser._serializedATN));
		}

		return WacParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WacParser.RULE_start; }
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public KEY_PATH(): TerminalNode { return this.getToken(WacParser.KEY_PATH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WacParser.RULE_key; }
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitKey) {
			return visitor.visitKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WacParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class IntegerLitContext extends LiteralContext {
	public INTEGER(): TerminalNode { return this.getToken(WacParser.INTEGER, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterIntegerLit) {
			listener.enterIntegerLit(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitIntegerLit) {
			listener.exitIntegerLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitIntegerLit) {
			return visitor.visitIntegerLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolLitContext extends LiteralContext {
	public BOOLEAN(): TerminalNode { return this.getToken(WacParser.BOOLEAN, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterBoolLit) {
			listener.enterBoolLit(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitBoolLit) {
			listener.exitBoolLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitBoolLit) {
			return visitor.visitBoolLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatLitContext extends LiteralContext {
	public FLOAT_LIT(): TerminalNode { return this.getToken(WacParser.FLOAT_LIT, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterFloatLit) {
			listener.enterFloatLit(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitFloatLit) {
			listener.exitFloatLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitFloatLit) {
			return visitor.visitFloatLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLitContext extends LiteralContext {
	public INTERPRETED_STRING_LIT(): TerminalNode { return this.getToken(WacParser.INTERPRETED_STRING_LIT, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterStringLit) {
			listener.enterStringLit(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitStringLit) {
			listener.exitStringLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitStringLit) {
			return visitor.visitStringLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WacParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpStmtContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterExpStmt) {
			listener.enterExpStmt(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitExpStmt) {
			listener.exitExpStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitExpStmt) {
			return visitor.visitExpStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfStmtContext extends StatementContext {
	public IF(): TerminalNode { return this.getToken(WacParser.IF, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public THEN(): TerminalNode { return this.getToken(WacParser.THEN, 0); }
	public ELSE(): TerminalNode { return this.getToken(WacParser.ELSE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WacParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralExpContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterLiteralExp) {
			listener.enterLiteralExp(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitLiteralExp) {
			listener.exitLiteralExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitLiteralExp) {
			return visitor.visitLiteralExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntCastContext extends ExpressionContext {
	public INT_CAST(): TerminalNode { return this.getToken(WacParser.INT_CAST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterIntCast) {
			listener.enterIntCast(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitIntCast) {
			listener.exitIntCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitIntCast) {
			return visitor.visitIntCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatCastContext extends ExpressionContext {
	public FLOAT_CAST(): TerminalNode { return this.getToken(WacParser.FLOAT_CAST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterFloatCast) {
			listener.enterFloatCast(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitFloatCast) {
			listener.exitFloatCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitFloatCast) {
			return visitor.visitFloatCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterParen) {
			listener.enterParen(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitParen) {
			listener.exitParen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitParen) {
			return visitor.visitParen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulDivContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(WacParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(WacParser.DIV, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterMulDiv) {
			listener.enterMulDiv(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitMulDiv) {
			listener.exitMulDiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitMulDiv) {
			return visitor.visitMulDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddSubContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(WacParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(WacParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterAddSub) {
			listener.enterAddSub(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitAddSub) {
			listener.exitAddSub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitAddSub) {
			return visitor.visitAddSub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparatorContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterComparator) {
			listener.enterComparator(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitComparator) {
			listener.exitComparator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitComparator) {
			return visitor.visitComparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterLogical) {
			listener.enterLogical(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitLogical) {
			listener.exitLogical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitLogical) {
			return visitor.visitLogical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InvertLogicalContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterInvertLogical) {
			listener.enterInvertLogical(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitInvertLogical) {
			listener.exitInvertLogical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitInvertLogical) {
			return visitor.visitInvertLogical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class KeyPathContext extends ExpressionContext {
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WacListener): void {
		if (listener.enterKeyPath) {
			listener.enterKeyPath(this);
		}
	}
	// @Override
	public exitRule(listener: WacListener): void {
		if (listener.exitKeyPath) {
			listener.exitKeyPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WacVisitor<Result>): Result {
		if (visitor.visitKeyPath) {
			return visitor.visitKeyPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


