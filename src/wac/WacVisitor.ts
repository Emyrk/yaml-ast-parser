// Generated from src/wac/Wac.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `WacParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface WacVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `LiteralExp`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExp?: (ctx: LiteralExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `IntCast`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntCast?: (ctx: IntCastContext) => Result;

	/**
	 * Visit a parse tree produced by the `FloatCast`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatCast?: (ctx: FloatCastContext) => Result;

	/**
	 * Visit a parse tree produced by the `Paren`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParen?: (ctx: ParenContext) => Result;

	/**
	 * Visit a parse tree produced by the `MulDiv`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulDiv?: (ctx: MulDivContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddSub`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSub?: (ctx: AddSubContext) => Result;

	/**
	 * Visit a parse tree produced by the `Comparator`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparator?: (ctx: ComparatorContext) => Result;

	/**
	 * Visit a parse tree produced by the `Logical`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical?: (ctx: LogicalContext) => Result;

	/**
	 * Visit a parse tree produced by the `InvertLogical`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvertLogical?: (ctx: InvertLogicalContext) => Result;

	/**
	 * Visit a parse tree produced by the `KeyPath`
	 * labeled alternative in `WacParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyPath?: (ctx: KeyPathContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpStmt`
	 * labeled alternative in `WacParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpStmt?: (ctx: ExpStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `IfStmt`
	 * labeled alternative in `WacParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `IntegerLit`
	 * labeled alternative in `WacParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLit?: (ctx: IntegerLitContext) => Result;

	/**
	 * Visit a parse tree produced by the `BoolLit`
	 * labeled alternative in `WacParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolLit?: (ctx: BoolLitContext) => Result;

	/**
	 * Visit a parse tree produced by the `FloatLit`
	 * labeled alternative in `WacParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatLit?: (ctx: FloatLitContext) => Result;

	/**
	 * Visit a parse tree produced by the `StringLit`
	 * labeled alternative in `WacParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLit?: (ctx: StringLitContext) => Result;

	/**
	 * Visit a parse tree produced by `WacParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `WacParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `WacParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `WacParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `WacParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

