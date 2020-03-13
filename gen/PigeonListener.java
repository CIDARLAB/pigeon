// Generated from /Users/benlaskaris/Documents/GitHub/pidgeon/Pigeon.g4 by ANTLR 4.8
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link PigeonParser}.
 */
public interface PigeonListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link PigeonParser#script}.
	 * @param ctx the parse tree
	 */
	void enterScript(PigeonParser.ScriptContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#script}.
	 * @param ctx the parse tree
	 */
	void exitScript(PigeonParser.ScriptContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#pigeoncommands}.
	 * @param ctx the parse tree
	 */
	void enterPigeoncommands(PigeonParser.PigeoncommandsContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#pigeoncommands}.
	 * @param ctx the parse tree
	 */
	void exitPigeoncommands(PigeonParser.PigeoncommandsContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#promoter}.
	 * @param ctx the parse tree
	 */
	void enterPromoter(PigeonParser.PromoterContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#promoter}.
	 * @param ctx the parse tree
	 */
	void exitPromoter(PigeonParser.PromoterContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#repressor}.
	 * @param ctx the parse tree
	 */
	void enterRepressor(PigeonParser.RepressorContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#repressor}.
	 * @param ctx the parse tree
	 */
	void exitRepressor(PigeonParser.RepressorContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#codingseq}.
	 * @param ctx the parse tree
	 */
	void enterCodingseq(PigeonParser.CodingseqContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#codingseq}.
	 * @param ctx the parse tree
	 */
	void exitCodingseq(PigeonParser.CodingseqContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#transcription}.
	 * @param ctx the parse tree
	 */
	void enterTranscription(PigeonParser.TranscriptionContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#transcription}.
	 * @param ctx the parse tree
	 */
	void exitTranscription(PigeonParser.TranscriptionContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#stop}.
	 * @param ctx the parse tree
	 */
	void enterStop(PigeonParser.StopContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#stop}.
	 * @param ctx the parse tree
	 */
	void exitStop(PigeonParser.StopContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#operator}.
	 * @param ctx the parse tree
	 */
	void enterOperator(PigeonParser.OperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#operator}.
	 * @param ctx the parse tree
	 */
	void exitOperator(PigeonParser.OperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#degredationtag}.
	 * @param ctx the parse tree
	 */
	void enterDegredationtag(PigeonParser.DegredationtagContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#degredationtag}.
	 * @param ctx the parse tree
	 */
	void exitDegredationtag(PigeonParser.DegredationtagContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#righttriangle}.
	 * @param ctx the parse tree
	 */
	void enterRighttriangle(PigeonParser.RighttriangleContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#righttriangle}.
	 * @param ctx the parse tree
	 */
	void exitRighttriangle(PigeonParser.RighttriangleContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#lefttriangle}.
	 * @param ctx the parse tree
	 */
	void enterLefttriangle(PigeonParser.LefttriangleContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#lefttriangle}.
	 * @param ctx the parse tree
	 */
	void exitLefttriangle(PigeonParser.LefttriangleContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#invert}.
	 * @param ctx the parse tree
	 */
	void enterInvert(PigeonParser.InvertContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#invert}.
	 * @param ctx the parse tree
	 */
	void exitInvert(PigeonParser.InvertContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#dash}.
	 * @param ctx the parse tree
	 */
	void enterDash(PigeonParser.DashContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#dash}.
	 * @param ctx the parse tree
	 */
	void exitDash(PigeonParser.DashContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#period}.
	 * @param ctx the parse tree
	 */
	void enterPeriod(PigeonParser.PeriodContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#period}.
	 * @param ctx the parse tree
	 */
	void exitPeriod(PigeonParser.PeriodContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#bar}.
	 * @param ctx the parse tree
	 */
	void enterBar(PigeonParser.BarContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#bar}.
	 * @param ctx the parse tree
	 */
	void exitBar(PigeonParser.BarContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#label}.
	 * @param ctx the parse tree
	 */
	void enterLabel(PigeonParser.LabelContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#label}.
	 * @param ctx the parse tree
	 */
	void exitLabel(PigeonParser.LabelContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#color}.
	 * @param ctx the parse tree
	 */
	void enterColor(PigeonParser.ColorContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#color}.
	 * @param ctx the parse tree
	 */
	void exitColor(PigeonParser.ColorContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#ignorecolor}.
	 * @param ctx the parse tree
	 */
	void enterIgnorecolor(PigeonParser.IgnorecolorContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#ignorecolor}.
	 * @param ctx the parse tree
	 */
	void exitIgnorecolor(PigeonParser.IgnorecolorContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#arccommands}.
	 * @param ctx the parse tree
	 */
	void enterArccommands(PigeonParser.ArccommandsContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#arccommands}.
	 * @param ctx the parse tree
	 */
	void exitArccommands(PigeonParser.ArccommandsContext ctx);
	/**
	 * Enter a parse tree produced by {@link PigeonParser#arc}.
	 * @param ctx the parse tree
	 */
	void enterArc(PigeonParser.ArcContext ctx);
	/**
	 * Exit a parse tree produced by {@link PigeonParser#arc}.
	 * @param ctx the parse tree
	 */
	void exitArc(PigeonParser.ArcContext ctx);
}