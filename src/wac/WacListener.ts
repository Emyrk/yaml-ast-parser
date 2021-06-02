// Generated from src/wac/Wac.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { LiteralExpContext } from "./WacParser";
import { IntCastContext } from "./WacParser";
import { FloatCastContext } from "./WacParser";
import { ParenContext } from "./WacParser";
import { MulDivContext } from "./WacParser";
import { AddSubContext } from "./WacParser";
import { ComparatorContext } from "./WacParser";
import { LogicalContext } from "./WacParser";
import { InvertLogicalContext } from "./WacParser";
import { KeyPathContext } from "./WacParser";
import { ExpStmtContext } from "./WacParser";
import { IfStmtContext } from "./WacParser";
import { IntegerLitContext } from "./WacParser";
import { BoolLitContext } from "./WacParser";
import { FloatLitContext } from "./WacParser";
import { StringLitContext } from "./WacParser";
import { StartContext } from "./WacParser";
import { KeyContext } from "./WacParser";
import { LiteralContext } from "./WacParser";
import { StatementContext } from "./WacParser";
import { ExpressionContext } from "./WacParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `WacParser`.
 */
export interface WacListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `LiteralExp`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExp?: (ctx: LiteralExpContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExp`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExp?: (ctx: LiteralExpContext) => void;

	/**
	 * Enter a parse tree produced by the `IntCast`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIntCast?: (ctx: IntCastContext) => void;
	/**
	 * Exit a parse tree produced by the `IntCast`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIntCast?: (ctx: IntCastContext) => void;

	/**
	 * Enter a parse tree produced by the `FloatCast`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFloatCast?: (ctx: FloatCastContext) => void;
	/**
	 * Exit a parse tree produced by the `FloatCast`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFloatCast?: (ctx: FloatCastContext) => void;

	/**
	 * Enter a parse tree produced by the `Paren`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParen?: (ctx: ParenContext) => void;
	/**
	 * Exit a parse tree produced by the `Paren`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParen?: (ctx: ParenContext) => void;

	/**
	 * Enter a parse tree produced by the `MulDiv`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMulDiv?: (ctx: MulDivContext) => void;
	/**
	 * Exit a parse tree produced by the `MulDiv`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMulDiv?: (ctx: MulDivContext) => void;

	/**
	 * Enter a parse tree produced by the `AddSub`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddSub?: (ctx: AddSubContext) => void;
	/**
	 * Exit a parse tree produced by the `AddSub`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddSub?: (ctx: AddSubContext) => void;

	/**
	 * Enter a parse tree produced by the `Comparator`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	enterComparator?: (ctx: ComparatorContext) => void;
	/**
	 * Exit a parse tree produced by the `Comparator`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	exitComparator?: (ctx: ComparatorContext) => void;

	/**
	 * Enter a parse tree produced by the `Logical`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogical?: (ctx: LogicalContext) => void;
	/**
	 * Exit a parse tree produced by the `Logical`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogical?: (ctx: LogicalContext) => void;

	/**
	 * Enter a parse tree produced by the `InvertLogical`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInvertLogical?: (ctx: InvertLogicalContext) => void;
	/**
	 * Exit a parse tree produced by the `InvertLogical`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInvertLogical?: (ctx: InvertLogicalContext) => void;

	/**
	 * Enter a parse tree produced by the `KeyPath`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	enterKeyPath?: (ctx: KeyPathContext) => void;
	/**
	 * Exit a parse tree produced by the `KeyPath`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	exitKeyPath?: (ctx: KeyPathContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpStmt`
	 * labeled alternative in `WacParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExpStmt?: (ctx: ExpStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpStmt`
	 * labeled alternative in `WacParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExpStmt?: (ctx: ExpStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `IfStmt`
	 * labeled alternative in `WacParser.statement`.
	 * @param ctx the parse tree
	 */
	enterIfStmt?: (ctx: IfStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `IfStmt`
	 * labeled alternative in `WacParser.statement`.
	 * @param ctx the parse tree
	 */
	exitIfStmt?: (ctx: IfStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `IntegerLit`
	 * labeled alternative in `WacParser.literal`.
	 * @param ctx the parse tree
	 */
	enterIntegerLit?: (ctx: IntegerLitContext) => void;
	/**
	 * Exit a parse tree produced by the `IntegerLit`
	 * labeled alternative in `WacParser.literal`.
	 * @param ctx the parse tree
	 */
	exitIntegerLit?: (ctx: IntegerLitContext) => void;

	/**
	 * Enter a parse tree produced by the `BoolLit`
	 * labeled alternative in `WacParser.literal`.
	 * @param ctx the parse tree
	 */
	enterBoolLit?: (ctx: BoolLitContext) => void;
	/**
	 * Exit a parse tree produced by the `BoolLit`
	 * labeled alternative in `WacParser.literal`.
	 * @param ctx the parse tree
	 */
	exitBoolLit?: (ctx: BoolLitContext) => void;

	/**
	 * Enter a parse tree produced by the `FloatLit`
	 * labeled alternative in `WacParser.literal`.
	 * @param ctx the parse tree
	 */
	enterFloatLit?: (ctx: FloatLitContext) => void;
	/**
	 * Exit a parse tree produced by the `FloatLit`
	 * labeled alternative in `WacParser.literal`.
	 * @param ctx the parse tree
	 */
	exitFloatLit?: (ctx: FloatLitContext) => void;

	/**
	 * Enter a parse tree produced by the `StringLit`
	 * labeled alternative in `WacParser.literal`.
	 * @param ctx the parse tree
	 */
	enterStringLit?: (ctx: StringLitContext) => void;
	/**
	 * Exit a parse tree produced by the `StringLit`
	 * labeled alternative in `WacParser.literal`.
	 * @param ctx the parse tree
	 */
	exitStringLit?: (ctx: StringLitContext) => void;

	/**
	 * Enter a parse tree produced by `WacParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `WacParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `WacParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `WacParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;

	/**
	 * Enter a parse tree produced by `WacParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `WacParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `WacParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `WacParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `WacParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
}

