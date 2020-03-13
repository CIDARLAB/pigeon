// Generated from /Users/benlaskaris/Documents/GitHub/pidgeon/Pigeon.g4 by ANTLR 4.8
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link PigeonParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface PigeonVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link PigeonParser#script}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitScript(PigeonParser.ScriptContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#pigeoncommands}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPigeoncommands(PigeonParser.PigeoncommandsContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#promoter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPromoter(PigeonParser.PromoterContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#repressor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRepressor(PigeonParser.RepressorContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#codingseq}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCodingseq(PigeonParser.CodingseqContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#transcription}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTranscription(PigeonParser.TranscriptionContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#stop}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStop(PigeonParser.StopContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#operator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperator(PigeonParser.OperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#degredationtag}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDegredationtag(PigeonParser.DegredationtagContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#righttriangle}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRighttriangle(PigeonParser.RighttriangleContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#lefttriangle}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLefttriangle(PigeonParser.LefttriangleContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#invert}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInvert(PigeonParser.InvertContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#dash}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDash(PigeonParser.DashContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#period}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPeriod(PigeonParser.PeriodContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#bar}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBar(PigeonParser.BarContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#label}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLabel(PigeonParser.LabelContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#color}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitColor(PigeonParser.ColorContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#ignorecolor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIgnorecolor(PigeonParser.IgnorecolorContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#arccommands}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArccommands(PigeonParser.ArccommandsContext ctx);
	/**
	 * Visit a parse tree produced by {@link PigeonParser#arc}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArc(PigeonParser.ArcContext ctx);
}