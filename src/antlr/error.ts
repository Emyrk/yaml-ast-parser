import { ANTLRErrorListener } from "antlr4ts";
import { RecognitionException } from "antlr4ts";
import { Recognizer } from "antlr4ts";


export class ErrorListener implements ANTLRErrorListener<any> {
	/**
	 * Provides a default instance of {@link ConsoleErrorListener}.
	 */
	public static readonly INSTANCE: ErrorListener = new ErrorListener();
    public Errors = [];

	/**
	 * {@inheritDoc}
	 *
	 * This implementation prints messages to {@link System#err} containing the
	 * values of `line`, `charPositionInLine`, and `msg` using
	 * the following format.
	 *
	 * <pre>
	 * line *line*:*charPositionInLine* *msg*
	 * </pre>
	 */
	public syntaxError<T>(
		recognizer: Recognizer<T, any>,
		offendingSymbol: T,
		line: number,
		charPositionInLine: number,
		msg: string,
		e: RecognitionException | undefined): void {
		console.error(`line ${line}:${charPositionInLine} ${msg}`);
        this.Errors.push(`line ${line}:${charPositionInLine} ${msg}`)
	}
}