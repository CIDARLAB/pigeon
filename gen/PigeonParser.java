// Generated from /Users/benlaskaris/Documents/GitHub/pidgeon/Pigeon.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class PigeonParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, ID=16, INT=17, 
		SK=18, WS=19, NL=20;
	public static final int
		RULE_script = 0, RULE_pigeoncommands = 1, RULE_promoter = 2, RULE_repressor = 3, 
		RULE_codingseq = 4, RULE_transcription = 5, RULE_stop = 6, RULE_operator = 7, 
		RULE_degredationtag = 8, RULE_righttriangle = 9, RULE_lefttriangle = 10, 
		RULE_invert = 11, RULE_dash = 12, RULE_period = 13, RULE_bar = 14, RULE_label = 15, 
		RULE_color = 16, RULE_ignorecolor = 17, RULE_arccommands = 18, RULE_arc = 19;
	private static String[] makeRuleNames() {
		return new String[] {
			"script", "pigeoncommands", "promoter", "repressor", "codingseq", "transcription", 
			"stop", "operator", "degredationtag", "righttriangle", "lefttriangle", 
			"invert", "dash", "period", "bar", "label", "color", "ignorecolor", "arccommands", 
			"arc"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'p'", "'r'", "'c'", "'t'", "'s'", "'o'", "'d'", "'>'", "'<'", 
			"'-'", "'.'", "'|'", "'nl'", "'ind'", "'rep'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, "ID", "INT", "SK", "WS", "NL"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Pigeon.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public PigeonParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ScriptContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(PigeonParser.EOF, 0); }
		public List<PigeoncommandsContext> pigeoncommands() {
			return getRuleContexts(PigeoncommandsContext.class);
		}
		public PigeoncommandsContext pigeoncommands(int i) {
			return getRuleContext(PigeoncommandsContext.class,i);
		}
		public List<ArccommandsContext> arccommands() {
			return getRuleContexts(ArccommandsContext.class);
		}
		public ArccommandsContext arccommands(int i) {
			return getRuleContext(ArccommandsContext.class,i);
		}
		public ScriptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_script; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterScript(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitScript(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitScript(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ScriptContext script() throws RecognitionException {
		ScriptContext _localctx = new ScriptContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_script);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(41); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(40);
					pigeoncommands();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(43); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(50);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << ID))) != 0)) {
				{
				setState(46); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(45);
					arccommands();
					}
					}
					setState(48); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << ID))) != 0) );
				}
			}

			setState(52);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PigeoncommandsContext extends ParserRuleContext {
		public PromoterContext promoter() {
			return getRuleContext(PromoterContext.class,0);
		}
		public RepressorContext repressor() {
			return getRuleContext(RepressorContext.class,0);
		}
		public CodingseqContext codingseq() {
			return getRuleContext(CodingseqContext.class,0);
		}
		public TranscriptionContext transcription() {
			return getRuleContext(TranscriptionContext.class,0);
		}
		public StopContext stop() {
			return getRuleContext(StopContext.class,0);
		}
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public DegredationtagContext degredationtag() {
			return getRuleContext(DegredationtagContext.class,0);
		}
		public RighttriangleContext righttriangle() {
			return getRuleContext(RighttriangleContext.class,0);
		}
		public LefttriangleContext lefttriangle() {
			return getRuleContext(LefttriangleContext.class,0);
		}
		public DashContext dash() {
			return getRuleContext(DashContext.class,0);
		}
		public PeriodContext period() {
			return getRuleContext(PeriodContext.class,0);
		}
		public BarContext bar() {
			return getRuleContext(BarContext.class,0);
		}
		public PigeoncommandsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pigeoncommands; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterPigeoncommands(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitPigeoncommands(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitPigeoncommands(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PigeoncommandsContext pigeoncommands() throws RecognitionException {
		PigeoncommandsContext _localctx = new PigeoncommandsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_pigeoncommands);
		try {
			setState(66);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(54);
				promoter();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(55);
				repressor();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(56);
				codingseq();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(57);
				transcription();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(58);
				stop();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(59);
				operator();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(60);
				degredationtag();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(61);
				righttriangle();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(62);
				lefttriangle();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(63);
				dash();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(64);
				period();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(65);
				bar();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PromoterContext extends ParserRuleContext {
		public InvertContext invert() {
			return getRuleContext(InvertContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(PigeonParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PigeonParser.WS, i);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public ColorContext color() {
			return getRuleContext(ColorContext.class,0);
		}
		public IgnorecolorContext ignorecolor() {
			return getRuleContext(IgnorecolorContext.class,0);
		}
		public List<TerminalNode> NL() { return getTokens(PigeonParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(PigeonParser.NL, i);
		}
		public PromoterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_promoter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterPromoter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitPromoter(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitPromoter(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PromoterContext promoter() throws RecognitionException {
		PromoterContext _localctx = new PromoterContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_promoter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(72);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__8:
				{
				setState(68);
				invert();
				setState(69);
				match(T__0);
				}
				break;
			case T__0:
				{
				setState(71);
				match(T__0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(75);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(74);
				match(WS);
				}
				break;
			}
			setState(78);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << ID))) != 0)) {
				{
				setState(77);
				label();
				}
			}

			setState(81);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(80);
				match(WS);
				}
				break;
			}
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INT) {
				{
				setState(83);
				color();
				}
			}

			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(86);
				match(WS);
				}
			}

			setState(90);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__12) {
				{
				setState(89);
				ignorecolor();
				}
			}

			setState(93); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(92);
				match(NL);
				}
				}
				setState(95); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==NL );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RepressorContext extends ParserRuleContext {
		public InvertContext invert() {
			return getRuleContext(InvertContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(PigeonParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PigeonParser.WS, i);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public ColorContext color() {
			return getRuleContext(ColorContext.class,0);
		}
		public IgnorecolorContext ignorecolor() {
			return getRuleContext(IgnorecolorContext.class,0);
		}
		public List<TerminalNode> NL() { return getTokens(PigeonParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(PigeonParser.NL, i);
		}
		public RepressorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_repressor; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterRepressor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitRepressor(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitRepressor(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RepressorContext repressor() throws RecognitionException {
		RepressorContext _localctx = new RepressorContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_repressor);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__8:
				{
				setState(97);
				invert();
				setState(98);
				match(T__1);
				}
				break;
			case T__1:
				{
				setState(100);
				match(T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(104);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(103);
				match(WS);
				}
				break;
			}
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << ID))) != 0)) {
				{
				setState(106);
				label();
				}
			}

			setState(110);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				{
				setState(109);
				match(WS);
				}
				break;
			}
			setState(113);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INT) {
				{
				setState(112);
				color();
				}
			}

			setState(116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(115);
				match(WS);
				}
			}

			setState(119);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__12) {
				{
				setState(118);
				ignorecolor();
				}
			}

			setState(122); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(121);
				match(NL);
				}
				}
				setState(124); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==NL );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CodingseqContext extends ParserRuleContext {
		public InvertContext invert() {
			return getRuleContext(InvertContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(PigeonParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PigeonParser.WS, i);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public ColorContext color() {
			return getRuleContext(ColorContext.class,0);
		}
		public IgnorecolorContext ignorecolor() {
			return getRuleContext(IgnorecolorContext.class,0);
		}
		public List<TerminalNode> NL() { return getTokens(PigeonParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(PigeonParser.NL, i);
		}
		public CodingseqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_codingseq; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterCodingseq(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitCodingseq(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitCodingseq(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CodingseqContext codingseq() throws RecognitionException {
		CodingseqContext _localctx = new CodingseqContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_codingseq);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__8:
				{
				setState(126);
				invert();
				setState(127);
				match(T__2);
				}
				break;
			case T__2:
				{
				setState(129);
				match(T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(133);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				{
				setState(132);
				match(WS);
				}
				break;
			}
			setState(136);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << ID))) != 0)) {
				{
				setState(135);
				label();
				}
			}

			setState(139);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				{
				setState(138);
				match(WS);
				}
				break;
			}
			setState(142);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INT) {
				{
				setState(141);
				color();
				}
			}

			setState(145);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(144);
				match(WS);
				}
			}

			setState(148);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__12) {
				{
				setState(147);
				ignorecolor();
				}
			}

			setState(151); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(150);
				match(NL);
				}
				}
				setState(153); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==NL );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TranscriptionContext extends ParserRuleContext {
		public InvertContext invert() {
			return getRuleContext(InvertContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(PigeonParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PigeonParser.WS, i);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public ColorContext color() {
			return getRuleContext(ColorContext.class,0);
		}
		public IgnorecolorContext ignorecolor() {
			return getRuleContext(IgnorecolorContext.class,0);
		}
		public List<TerminalNode> NL() { return getTokens(PigeonParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(PigeonParser.NL, i);
		}
		public TranscriptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transcription; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterTranscription(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitTranscription(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitTranscription(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TranscriptionContext transcription() throws RecognitionException {
		TranscriptionContext _localctx = new TranscriptionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_transcription);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__8:
				{
				setState(155);
				invert();
				setState(156);
				match(T__3);
				}
				break;
			case T__3:
				{
				setState(158);
				match(T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(162);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				{
				setState(161);
				match(WS);
				}
				break;
			}
			setState(165);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << ID))) != 0)) {
				{
				setState(164);
				label();
				}
			}

			setState(168);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				{
				setState(167);
				match(WS);
				}
				break;
			}
			setState(171);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INT) {
				{
				setState(170);
				color();
				}
			}

			setState(174);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(173);
				match(WS);
				}
			}

			setState(177);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__12) {
				{
				setState(176);
				ignorecolor();
				}
			}

			setState(180); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(179);
				match(NL);
				}
				}
				setState(182); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==NL );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StopContext extends ParserRuleContext {
		public List<TerminalNode> WS() { return getTokens(PigeonParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PigeonParser.WS, i);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public ColorContext color() {
			return getRuleContext(ColorContext.class,0);
		}
		public IgnorecolorContext ignorecolor() {
			return getRuleContext(IgnorecolorContext.class,0);
		}
		public List<TerminalNode> NL() { return getTokens(PigeonParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(PigeonParser.NL, i);
		}
		public StopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stop; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterStop(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitStop(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitStop(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StopContext stop() throws RecognitionException {
		StopContext _localctx = new StopContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_stop);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			match(T__4);
			setState(186);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				{
				setState(185);
				match(WS);
				}
				break;
			}
			setState(189);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << ID))) != 0)) {
				{
				setState(188);
				label();
				}
			}

			setState(192);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
			case 1:
				{
				setState(191);
				match(WS);
				}
				break;
			}
			setState(195);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INT) {
				{
				setState(194);
				color();
				}
			}

			setState(198);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(197);
				match(WS);
				}
			}

			setState(201);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__12) {
				{
				setState(200);
				ignorecolor();
				}
			}

			setState(204); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(203);
				match(NL);
				}
				}
				setState(206); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==NL );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorContext extends ParserRuleContext {
		public List<TerminalNode> WS() { return getTokens(PigeonParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PigeonParser.WS, i);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public ColorContext color() {
			return getRuleContext(ColorContext.class,0);
		}
		public IgnorecolorContext ignorecolor() {
			return getRuleContext(IgnorecolorContext.class,0);
		}
		public List<TerminalNode> NL() { return getTokens(PigeonParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(PigeonParser.NL, i);
		}
		public OperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterOperator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitOperator(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitOperator(this);
			else return visitor.visitChildren(this);
		}
	}

	public final OperatorContext operator() throws RecognitionException {
		OperatorContext _localctx = new OperatorContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			match(T__5);
			setState(210);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
			case 1:
				{
				setState(209);
				match(WS);
				}
				break;
			}
			setState(213);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << ID))) != 0)) {
				{
				setState(212);
				label();
				}
			}

			setState(216);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				{
				setState(215);
				match(WS);
				}
				break;
			}
			setState(219);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INT) {
				{
				setState(218);
				color();
				}
			}

			setState(222);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(221);
				match(WS);
				}
			}

			setState(225);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__12) {
				{
				setState(224);
				ignorecolor();
				}
			}

			setState(228); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(227);
				match(NL);
				}
				}
				setState(230); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==NL );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DegredationtagContext extends ParserRuleContext {
		public List<TerminalNode> WS() { return getTokens(PigeonParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PigeonParser.WS, i);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public ColorContext color() {
			return getRuleContext(ColorContext.class,0);
		}
		public IgnorecolorContext ignorecolor() {
			return getRuleContext(IgnorecolorContext.class,0);
		}
		public List<TerminalNode> NL() { return getTokens(PigeonParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(PigeonParser.NL, i);
		}
		public DegredationtagContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_degredationtag; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterDegredationtag(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitDegredationtag(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitDegredationtag(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DegredationtagContext degredationtag() throws RecognitionException {
		DegredationtagContext _localctx = new DegredationtagContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_degredationtag);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(232);
			match(T__6);
			setState(234);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
			case 1:
				{
				setState(233);
				match(WS);
				}
				break;
			}
			setState(237);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << ID))) != 0)) {
				{
				setState(236);
				label();
				}
			}

			setState(240);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,52,_ctx) ) {
			case 1:
				{
				setState(239);
				match(WS);
				}
				break;
			}
			setState(243);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INT) {
				{
				setState(242);
				color();
				}
			}

			setState(246);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(245);
				match(WS);
				}
			}

			setState(249);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__12) {
				{
				setState(248);
				ignorecolor();
				}
			}

			setState(252); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(251);
				match(NL);
				}
				}
				setState(254); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==NL );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RighttriangleContext extends ParserRuleContext {
		public List<TerminalNode> WS() { return getTokens(PigeonParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PigeonParser.WS, i);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public ColorContext color() {
			return getRuleContext(ColorContext.class,0);
		}
		public IgnorecolorContext ignorecolor() {
			return getRuleContext(IgnorecolorContext.class,0);
		}
		public List<TerminalNode> NL() { return getTokens(PigeonParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(PigeonParser.NL, i);
		}
		public RighttriangleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_righttriangle; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterRighttriangle(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitRighttriangle(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitRighttriangle(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RighttriangleContext righttriangle() throws RecognitionException {
		RighttriangleContext _localctx = new RighttriangleContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_righttriangle);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(256);
			match(T__7);
			setState(258);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
			case 1:
				{
				setState(257);
				match(WS);
				}
				break;
			}
			setState(261);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << ID))) != 0)) {
				{
				setState(260);
				label();
				}
			}

			setState(264);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,59,_ctx) ) {
			case 1:
				{
				setState(263);
				match(WS);
				}
				break;
			}
			setState(267);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INT) {
				{
				setState(266);
				color();
				}
			}

			setState(270);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(269);
				match(WS);
				}
			}

			setState(273);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__12) {
				{
				setState(272);
				ignorecolor();
				}
			}

			setState(276); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(275);
				match(NL);
				}
				}
				setState(278); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==NL );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LefttriangleContext extends ParserRuleContext {
		public List<TerminalNode> WS() { return getTokens(PigeonParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PigeonParser.WS, i);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public ColorContext color() {
			return getRuleContext(ColorContext.class,0);
		}
		public IgnorecolorContext ignorecolor() {
			return getRuleContext(IgnorecolorContext.class,0);
		}
		public List<TerminalNode> NL() { return getTokens(PigeonParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(PigeonParser.NL, i);
		}
		public LefttriangleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lefttriangle; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterLefttriangle(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitLefttriangle(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitLefttriangle(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LefttriangleContext lefttriangle() throws RecognitionException {
		LefttriangleContext _localctx = new LefttriangleContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_lefttriangle);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(280);
			match(T__8);
			setState(282);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,64,_ctx) ) {
			case 1:
				{
				setState(281);
				match(WS);
				}
				break;
			}
			setState(285);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << ID))) != 0)) {
				{
				setState(284);
				label();
				}
			}

			setState(288);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
			case 1:
				{
				setState(287);
				match(WS);
				}
				break;
			}
			setState(291);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INT) {
				{
				setState(290);
				color();
				}
			}

			setState(294);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(293);
				match(WS);
				}
			}

			setState(297);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__12) {
				{
				setState(296);
				ignorecolor();
				}
			}

			setState(300); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(299);
				match(NL);
				}
				}
				setState(302); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==NL );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InvertContext extends ParserRuleContext {
		public InvertContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_invert; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterInvert(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitInvert(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitInvert(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InvertContext invert() throws RecognitionException {
		InvertContext _localctx = new InvertContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_invert);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(304);
			match(T__8);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DashContext extends ParserRuleContext {
		public TerminalNode NL() { return getToken(PigeonParser.NL, 0); }
		public List<TerminalNode> WS() { return getTokens(PigeonParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PigeonParser.WS, i);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public ColorContext color() {
			return getRuleContext(ColorContext.class,0);
		}
		public IgnorecolorContext ignorecolor() {
			return getRuleContext(IgnorecolorContext.class,0);
		}
		public DashContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dash; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterDash(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitDash(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitDash(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DashContext dash() throws RecognitionException {
		DashContext _localctx = new DashContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_dash);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(306);
			match(T__9);
			setState(308);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,71,_ctx) ) {
			case 1:
				{
				setState(307);
				match(WS);
				}
				break;
			}
			setState(311);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << ID))) != 0)) {
				{
				setState(310);
				label();
				}
			}

			setState(314);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,73,_ctx) ) {
			case 1:
				{
				setState(313);
				match(WS);
				}
				break;
			}
			setState(317);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INT) {
				{
				setState(316);
				color();
				}
			}

			setState(320);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(319);
				match(WS);
				}
			}

			setState(323);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__12) {
				{
				setState(322);
				ignorecolor();
				}
			}

			setState(325);
			match(NL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PeriodContext extends ParserRuleContext {
		public TerminalNode NL() { return getToken(PigeonParser.NL, 0); }
		public List<TerminalNode> WS() { return getTokens(PigeonParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PigeonParser.WS, i);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public ColorContext color() {
			return getRuleContext(ColorContext.class,0);
		}
		public IgnorecolorContext ignorecolor() {
			return getRuleContext(IgnorecolorContext.class,0);
		}
		public PeriodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_period; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterPeriod(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitPeriod(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitPeriod(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PeriodContext period() throws RecognitionException {
		PeriodContext _localctx = new PeriodContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_period);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(327);
			match(T__10);
			setState(329);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,77,_ctx) ) {
			case 1:
				{
				setState(328);
				match(WS);
				}
				break;
			}
			setState(332);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << ID))) != 0)) {
				{
				setState(331);
				label();
				}
			}

			setState(335);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,79,_ctx) ) {
			case 1:
				{
				setState(334);
				match(WS);
				}
				break;
			}
			setState(338);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INT) {
				{
				setState(337);
				color();
				}
			}

			setState(341);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(340);
				match(WS);
				}
			}

			setState(344);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__12) {
				{
				setState(343);
				ignorecolor();
				}
			}

			setState(346);
			match(NL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BarContext extends ParserRuleContext {
		public TerminalNode NL() { return getToken(PigeonParser.NL, 0); }
		public List<TerminalNode> WS() { return getTokens(PigeonParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PigeonParser.WS, i);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public ColorContext color() {
			return getRuleContext(ColorContext.class,0);
		}
		public IgnorecolorContext ignorecolor() {
			return getRuleContext(IgnorecolorContext.class,0);
		}
		public BarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bar; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterBar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitBar(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitBar(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BarContext bar() throws RecognitionException {
		BarContext _localctx = new BarContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_bar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(348);
			match(T__11);
			setState(350);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,83,_ctx) ) {
			case 1:
				{
				setState(349);
				match(WS);
				}
				break;
			}
			setState(353);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << ID))) != 0)) {
				{
				setState(352);
				label();
				}
			}

			setState(356);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,85,_ctx) ) {
			case 1:
				{
				setState(355);
				match(WS);
				}
				break;
			}
			setState(359);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INT) {
				{
				setState(358);
				color();
				}
			}

			setState(362);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(361);
				match(WS);
				}
			}

			setState(365);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__12) {
				{
				setState(364);
				ignorecolor();
				}
			}

			setState(367);
			match(NL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LabelContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(PigeonParser.ID, 0); }
		public TerminalNode INT() { return getToken(PigeonParser.INT, 0); }
		public LabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_label; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterLabel(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitLabel(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitLabel(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LabelContext label() throws RecognitionException {
		LabelContext _localctx = new LabelContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_label);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(408);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,98,_ctx) ) {
			case 1:
				{
				setState(369);
				match(ID);
				}
				break;
			case 2:
				{
				setState(370);
				match(ID);
				setState(371);
				match(INT);
				}
				break;
			case 3:
				{
				setState(372);
				match(T__0);
				setState(374);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,89,_ctx) ) {
				case 1:
					{
					setState(373);
					match(INT);
					}
					break;
				}
				}
				break;
			case 4:
				{
				setState(376);
				match(T__1);
				setState(378);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,90,_ctx) ) {
				case 1:
					{
					setState(377);
					match(INT);
					}
					break;
				}
				}
				break;
			case 5:
				{
				setState(380);
				match(T__2);
				setState(382);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,91,_ctx) ) {
				case 1:
					{
					setState(381);
					match(INT);
					}
					break;
				}
				}
				break;
			case 6:
				{
				setState(384);
				match(T__3);
				setState(386);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,92,_ctx) ) {
				case 1:
					{
					setState(385);
					match(INT);
					}
					break;
				}
				}
				break;
			case 7:
				{
				setState(388);
				match(T__4);
				setState(390);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,93,_ctx) ) {
				case 1:
					{
					setState(389);
					match(INT);
					}
					break;
				}
				}
				break;
			case 8:
				{
				setState(392);
				match(T__5);
				setState(394);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,94,_ctx) ) {
				case 1:
					{
					setState(393);
					match(INT);
					}
					break;
				}
				}
				break;
			case 9:
				{
				setState(396);
				match(T__6);
				setState(398);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,95,_ctx) ) {
				case 1:
					{
					setState(397);
					match(INT);
					}
					break;
				}
				}
				break;
			case 10:
				{
				setState(400);
				match(T__7);
				setState(402);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,96,_ctx) ) {
				case 1:
					{
					setState(401);
					match(INT);
					}
					break;
				}
				}
				break;
			case 11:
				{
				setState(404);
				match(T__8);
				setState(406);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,97,_ctx) ) {
				case 1:
					{
					setState(405);
					match(INT);
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColorContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(PigeonParser.INT, 0); }
		public ColorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_color; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterColor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitColor(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitColor(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ColorContext color() throws RecognitionException {
		ColorContext _localctx = new ColorContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_color);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(410);
			match(INT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IgnorecolorContext extends ParserRuleContext {
		public IgnorecolorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ignorecolor; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterIgnorecolor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitIgnorecolor(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitIgnorecolor(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IgnorecolorContext ignorecolor() throws RecognitionException {
		IgnorecolorContext _localctx = new IgnorecolorContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_ignorecolor);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(412);
			match(T__12);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArccommandsContext extends ParserRuleContext {
		public List<LabelContext> label() {
			return getRuleContexts(LabelContext.class);
		}
		public LabelContext label(int i) {
			return getRuleContext(LabelContext.class,i);
		}
		public ArcContext arc() {
			return getRuleContext(ArcContext.class,0);
		}
		public TerminalNode NL() { return getToken(PigeonParser.NL, 0); }
		public List<TerminalNode> WS() { return getTokens(PigeonParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(PigeonParser.WS, i);
		}
		public ArccommandsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arccommands; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterArccommands(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitArccommands(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitArccommands(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArccommandsContext arccommands() throws RecognitionException {
		ArccommandsContext _localctx = new ArccommandsContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_arccommands);
		int _la;
		try {
			setState(438);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,103,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(414);
				label();
				setState(416);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(415);
					match(WS);
					}
				}

				setState(418);
				arc();
				setState(420);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(419);
					match(WS);
					}
				}

				setState(422);
				label();
				setState(423);
				match(NL);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(425);
				label();
				setState(427);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(426);
					match(WS);
					}
				}

				setState(429);
				arc();
				setState(431);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(430);
					match(WS);
					}
				}

				setState(433);
				label();
				setState(434);
				match(T__9);
				setState(435);
				label();
				setState(436);
				match(NL);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArcContext extends ParserRuleContext {
		public ArcContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arc; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).enterArc(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PigeonListener ) ((PigeonListener)listener).exitArc(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PigeonVisitor ) return ((PigeonVisitor<? extends T>)visitor).visitArc(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArcContext arc() throws RecognitionException {
		ArcContext _localctx = new ArcContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_arc);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(440);
			_la = _input.LA(1);
			if ( !(_la==T__13 || _la==T__14) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\26\u01bd\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\3\2\6\2,\n\2\r\2\16\2-\3\2\6\2\61\n\2\r"+
		"\2\16\2\62\5\2\65\n\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\5\3E\n\3\3\4\3\4\3\4\3\4\5\4K\n\4\3\4\5\4N\n\4\3\4\5\4Q\n\4\3"+
		"\4\5\4T\n\4\3\4\5\4W\n\4\3\4\5\4Z\n\4\3\4\5\4]\n\4\3\4\6\4`\n\4\r\4\16"+
		"\4a\3\5\3\5\3\5\3\5\5\5h\n\5\3\5\5\5k\n\5\3\5\5\5n\n\5\3\5\5\5q\n\5\3"+
		"\5\5\5t\n\5\3\5\5\5w\n\5\3\5\5\5z\n\5\3\5\6\5}\n\5\r\5\16\5~\3\6\3\6\3"+
		"\6\3\6\5\6\u0085\n\6\3\6\5\6\u0088\n\6\3\6\5\6\u008b\n\6\3\6\5\6\u008e"+
		"\n\6\3\6\5\6\u0091\n\6\3\6\5\6\u0094\n\6\3\6\5\6\u0097\n\6\3\6\6\6\u009a"+
		"\n\6\r\6\16\6\u009b\3\7\3\7\3\7\3\7\5\7\u00a2\n\7\3\7\5\7\u00a5\n\7\3"+
		"\7\5\7\u00a8\n\7\3\7\5\7\u00ab\n\7\3\7\5\7\u00ae\n\7\3\7\5\7\u00b1\n\7"+
		"\3\7\5\7\u00b4\n\7\3\7\6\7\u00b7\n\7\r\7\16\7\u00b8\3\b\3\b\5\b\u00bd"+
		"\n\b\3\b\5\b\u00c0\n\b\3\b\5\b\u00c3\n\b\3\b\5\b\u00c6\n\b\3\b\5\b\u00c9"+
		"\n\b\3\b\5\b\u00cc\n\b\3\b\6\b\u00cf\n\b\r\b\16\b\u00d0\3\t\3\t\5\t\u00d5"+
		"\n\t\3\t\5\t\u00d8\n\t\3\t\5\t\u00db\n\t\3\t\5\t\u00de\n\t\3\t\5\t\u00e1"+
		"\n\t\3\t\5\t\u00e4\n\t\3\t\6\t\u00e7\n\t\r\t\16\t\u00e8\3\n\3\n\5\n\u00ed"+
		"\n\n\3\n\5\n\u00f0\n\n\3\n\5\n\u00f3\n\n\3\n\5\n\u00f6\n\n\3\n\5\n\u00f9"+
		"\n\n\3\n\5\n\u00fc\n\n\3\n\6\n\u00ff\n\n\r\n\16\n\u0100\3\13\3\13\5\13"+
		"\u0105\n\13\3\13\5\13\u0108\n\13\3\13\5\13\u010b\n\13\3\13\5\13\u010e"+
		"\n\13\3\13\5\13\u0111\n\13\3\13\5\13\u0114\n\13\3\13\6\13\u0117\n\13\r"+
		"\13\16\13\u0118\3\f\3\f\5\f\u011d\n\f\3\f\5\f\u0120\n\f\3\f\5\f\u0123"+
		"\n\f\3\f\5\f\u0126\n\f\3\f\5\f\u0129\n\f\3\f\5\f\u012c\n\f\3\f\6\f\u012f"+
		"\n\f\r\f\16\f\u0130\3\r\3\r\3\16\3\16\5\16\u0137\n\16\3\16\5\16\u013a"+
		"\n\16\3\16\5\16\u013d\n\16\3\16\5\16\u0140\n\16\3\16\5\16\u0143\n\16\3"+
		"\16\5\16\u0146\n\16\3\16\3\16\3\17\3\17\5\17\u014c\n\17\3\17\5\17\u014f"+
		"\n\17\3\17\5\17\u0152\n\17\3\17\5\17\u0155\n\17\3\17\5\17\u0158\n\17\3"+
		"\17\5\17\u015b\n\17\3\17\3\17\3\20\3\20\5\20\u0161\n\20\3\20\5\20\u0164"+
		"\n\20\3\20\5\20\u0167\n\20\3\20\5\20\u016a\n\20\3\20\5\20\u016d\n\20\3"+
		"\20\5\20\u0170\n\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\5\21\u0179\n\21"+
		"\3\21\3\21\5\21\u017d\n\21\3\21\3\21\5\21\u0181\n\21\3\21\3\21\5\21\u0185"+
		"\n\21\3\21\3\21\5\21\u0189\n\21\3\21\3\21\5\21\u018d\n\21\3\21\3\21\5"+
		"\21\u0191\n\21\3\21\3\21\5\21\u0195\n\21\3\21\3\21\5\21\u0199\n\21\5\21"+
		"\u019b\n\21\3\22\3\22\3\23\3\23\3\24\3\24\5\24\u01a3\n\24\3\24\3\24\5"+
		"\24\u01a7\n\24\3\24\3\24\3\24\3\24\3\24\5\24\u01ae\n\24\3\24\3\24\5\24"+
		"\u01b2\n\24\3\24\3\24\3\24\3\24\3\24\5\24\u01b9\n\24\3\25\3\25\3\25\2"+
		"\2\26\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(\2\3\3\2\20\21\2\u0223"+
		"\2+\3\2\2\2\4D\3\2\2\2\6J\3\2\2\2\bg\3\2\2\2\n\u0084\3\2\2\2\f\u00a1\3"+
		"\2\2\2\16\u00ba\3\2\2\2\20\u00d2\3\2\2\2\22\u00ea\3\2\2\2\24\u0102\3\2"+
		"\2\2\26\u011a\3\2\2\2\30\u0132\3\2\2\2\32\u0134\3\2\2\2\34\u0149\3\2\2"+
		"\2\36\u015e\3\2\2\2 \u019a\3\2\2\2\"\u019c\3\2\2\2$\u019e\3\2\2\2&\u01b8"+
		"\3\2\2\2(\u01ba\3\2\2\2*,\5\4\3\2+*\3\2\2\2,-\3\2\2\2-+\3\2\2\2-.\3\2"+
		"\2\2.\64\3\2\2\2/\61\5&\24\2\60/\3\2\2\2\61\62\3\2\2\2\62\60\3\2\2\2\62"+
		"\63\3\2\2\2\63\65\3\2\2\2\64\60\3\2\2\2\64\65\3\2\2\2\65\66\3\2\2\2\66"+
		"\67\7\2\2\3\67\3\3\2\2\28E\5\6\4\29E\5\b\5\2:E\5\n\6\2;E\5\f\7\2<E\5\16"+
		"\b\2=E\5\20\t\2>E\5\22\n\2?E\5\24\13\2@E\5\26\f\2AE\5\32\16\2BE\5\34\17"+
		"\2CE\5\36\20\2D8\3\2\2\2D9\3\2\2\2D:\3\2\2\2D;\3\2\2\2D<\3\2\2\2D=\3\2"+
		"\2\2D>\3\2\2\2D?\3\2\2\2D@\3\2\2\2DA\3\2\2\2DB\3\2\2\2DC\3\2\2\2E\5\3"+
		"\2\2\2FG\5\30\r\2GH\7\3\2\2HK\3\2\2\2IK\7\3\2\2JF\3\2\2\2JI\3\2\2\2KM"+
		"\3\2\2\2LN\7\25\2\2ML\3\2\2\2MN\3\2\2\2NP\3\2\2\2OQ\5 \21\2PO\3\2\2\2"+
		"PQ\3\2\2\2QS\3\2\2\2RT\7\25\2\2SR\3\2\2\2ST\3\2\2\2TV\3\2\2\2UW\5\"\22"+
		"\2VU\3\2\2\2VW\3\2\2\2WY\3\2\2\2XZ\7\25\2\2YX\3\2\2\2YZ\3\2\2\2Z\\\3\2"+
		"\2\2[]\5$\23\2\\[\3\2\2\2\\]\3\2\2\2]_\3\2\2\2^`\7\26\2\2_^\3\2\2\2`a"+
		"\3\2\2\2a_\3\2\2\2ab\3\2\2\2b\7\3\2\2\2cd\5\30\r\2de\7\4\2\2eh\3\2\2\2"+
		"fh\7\4\2\2gc\3\2\2\2gf\3\2\2\2hj\3\2\2\2ik\7\25\2\2ji\3\2\2\2jk\3\2\2"+
		"\2km\3\2\2\2ln\5 \21\2ml\3\2\2\2mn\3\2\2\2np\3\2\2\2oq\7\25\2\2po\3\2"+
		"\2\2pq\3\2\2\2qs\3\2\2\2rt\5\"\22\2sr\3\2\2\2st\3\2\2\2tv\3\2\2\2uw\7"+
		"\25\2\2vu\3\2\2\2vw\3\2\2\2wy\3\2\2\2xz\5$\23\2yx\3\2\2\2yz\3\2\2\2z|"+
		"\3\2\2\2{}\7\26\2\2|{\3\2\2\2}~\3\2\2\2~|\3\2\2\2~\177\3\2\2\2\177\t\3"+
		"\2\2\2\u0080\u0081\5\30\r\2\u0081\u0082\7\5\2\2\u0082\u0085\3\2\2\2\u0083"+
		"\u0085\7\5\2\2\u0084\u0080\3\2\2\2\u0084\u0083\3\2\2\2\u0085\u0087\3\2"+
		"\2\2\u0086\u0088\7\25\2\2\u0087\u0086\3\2\2\2\u0087\u0088\3\2\2\2\u0088"+
		"\u008a\3\2\2\2\u0089\u008b\5 \21\2\u008a\u0089\3\2\2\2\u008a\u008b\3\2"+
		"\2\2\u008b\u008d\3\2\2\2\u008c\u008e\7\25\2\2\u008d\u008c\3\2\2\2\u008d"+
		"\u008e\3\2\2\2\u008e\u0090\3\2\2\2\u008f\u0091\5\"\22\2\u0090\u008f\3"+
		"\2\2\2\u0090\u0091\3\2\2\2\u0091\u0093\3\2\2\2\u0092\u0094\7\25\2\2\u0093"+
		"\u0092\3\2\2\2\u0093\u0094\3\2\2\2\u0094\u0096\3\2\2\2\u0095\u0097\5$"+
		"\23\2\u0096\u0095\3\2\2\2\u0096\u0097\3\2\2\2\u0097\u0099\3\2\2\2\u0098"+
		"\u009a\7\26\2\2\u0099\u0098\3\2\2\2\u009a\u009b\3\2\2\2\u009b\u0099\3"+
		"\2\2\2\u009b\u009c\3\2\2\2\u009c\13\3\2\2\2\u009d\u009e\5\30\r\2\u009e"+
		"\u009f\7\6\2\2\u009f\u00a2\3\2\2\2\u00a0\u00a2\7\6\2\2\u00a1\u009d\3\2"+
		"\2\2\u00a1\u00a0\3\2\2\2\u00a2\u00a4\3\2\2\2\u00a3\u00a5\7\25\2\2\u00a4"+
		"\u00a3\3\2\2\2\u00a4\u00a5\3\2\2\2\u00a5\u00a7\3\2\2\2\u00a6\u00a8\5 "+
		"\21\2\u00a7\u00a6\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\u00aa\3\2\2\2\u00a9"+
		"\u00ab\7\25\2\2\u00aa\u00a9\3\2\2\2\u00aa\u00ab\3\2\2\2\u00ab\u00ad\3"+
		"\2\2\2\u00ac\u00ae\5\"\22\2\u00ad\u00ac\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae"+
		"\u00b0\3\2\2\2\u00af\u00b1\7\25\2\2\u00b0\u00af\3\2\2\2\u00b0\u00b1\3"+
		"\2\2\2\u00b1\u00b3\3\2\2\2\u00b2\u00b4\5$\23\2\u00b3\u00b2\3\2\2\2\u00b3"+
		"\u00b4\3\2\2\2\u00b4\u00b6\3\2\2\2\u00b5\u00b7\7\26\2\2\u00b6\u00b5\3"+
		"\2\2\2\u00b7\u00b8\3\2\2\2\u00b8\u00b6\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9"+
		"\r\3\2\2\2\u00ba\u00bc\7\7\2\2\u00bb\u00bd\7\25\2\2\u00bc\u00bb\3\2\2"+
		"\2\u00bc\u00bd\3\2\2\2\u00bd\u00bf\3\2\2\2\u00be\u00c0\5 \21\2\u00bf\u00be"+
		"\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0\u00c2\3\2\2\2\u00c1\u00c3\7\25\2\2"+
		"\u00c2\u00c1\3\2\2\2\u00c2\u00c3\3\2\2\2\u00c3\u00c5\3\2\2\2\u00c4\u00c6"+
		"\5\"\22\2\u00c5\u00c4\3\2\2\2\u00c5\u00c6\3\2\2\2\u00c6\u00c8\3\2\2\2"+
		"\u00c7\u00c9\7\25\2\2\u00c8\u00c7\3\2\2\2\u00c8\u00c9\3\2\2\2\u00c9\u00cb"+
		"\3\2\2\2\u00ca\u00cc\5$\23\2\u00cb\u00ca\3\2\2\2\u00cb\u00cc\3\2\2\2\u00cc"+
		"\u00ce\3\2\2\2\u00cd\u00cf\7\26\2\2\u00ce\u00cd\3\2\2\2\u00cf\u00d0\3"+
		"\2\2\2\u00d0\u00ce\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1\17\3\2\2\2\u00d2"+
		"\u00d4\7\b\2\2\u00d3\u00d5\7\25\2\2\u00d4\u00d3\3\2\2\2\u00d4\u00d5\3"+
		"\2\2\2\u00d5\u00d7\3\2\2\2\u00d6\u00d8\5 \21\2\u00d7\u00d6\3\2\2\2\u00d7"+
		"\u00d8\3\2\2\2\u00d8\u00da\3\2\2\2\u00d9\u00db\7\25\2\2\u00da\u00d9\3"+
		"\2\2\2\u00da\u00db\3\2\2\2\u00db\u00dd\3\2\2\2\u00dc\u00de\5\"\22\2\u00dd"+
		"\u00dc\3\2\2\2\u00dd\u00de\3\2\2\2\u00de\u00e0\3\2\2\2\u00df\u00e1\7\25"+
		"\2\2\u00e0\u00df\3\2\2\2\u00e0\u00e1\3\2\2\2\u00e1\u00e3\3\2\2\2\u00e2"+
		"\u00e4\5$\23\2\u00e3\u00e2\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e6\3\2"+
		"\2\2\u00e5\u00e7\7\26\2\2\u00e6\u00e5\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8"+
		"\u00e6\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9\21\3\2\2\2\u00ea\u00ec\7\t\2"+
		"\2\u00eb\u00ed\7\25\2\2\u00ec\u00eb\3\2\2\2\u00ec\u00ed\3\2\2\2\u00ed"+
		"\u00ef\3\2\2\2\u00ee\u00f0\5 \21\2\u00ef\u00ee\3\2\2\2\u00ef\u00f0\3\2"+
		"\2\2\u00f0\u00f2\3\2\2\2\u00f1\u00f3\7\25\2\2\u00f2\u00f1\3\2\2\2\u00f2"+
		"\u00f3\3\2\2\2\u00f3\u00f5\3\2\2\2\u00f4\u00f6\5\"\22\2\u00f5\u00f4\3"+
		"\2\2\2\u00f5\u00f6\3\2\2\2\u00f6\u00f8\3\2\2\2\u00f7\u00f9\7\25\2\2\u00f8"+
		"\u00f7\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\u00fb\3\2\2\2\u00fa\u00fc\5$"+
		"\23\2\u00fb\u00fa\3\2\2\2\u00fb\u00fc\3\2\2\2\u00fc\u00fe\3\2\2\2\u00fd"+
		"\u00ff\7\26\2\2\u00fe\u00fd\3\2\2\2\u00ff\u0100\3\2\2\2\u0100\u00fe\3"+
		"\2\2\2\u0100\u0101\3\2\2\2\u0101\23\3\2\2\2\u0102\u0104\7\n\2\2\u0103"+
		"\u0105\7\25\2\2\u0104\u0103\3\2\2\2\u0104\u0105\3\2\2\2\u0105\u0107\3"+
		"\2\2\2\u0106\u0108\5 \21\2\u0107\u0106\3\2\2\2\u0107\u0108\3\2\2\2\u0108"+
		"\u010a\3\2\2\2\u0109\u010b\7\25\2\2\u010a\u0109\3\2\2\2\u010a\u010b\3"+
		"\2\2\2\u010b\u010d\3\2\2\2\u010c\u010e\5\"\22\2\u010d\u010c\3\2\2\2\u010d"+
		"\u010e\3\2\2\2\u010e\u0110\3\2\2\2\u010f\u0111\7\25\2\2\u0110\u010f\3"+
		"\2\2\2\u0110\u0111\3\2\2\2\u0111\u0113\3\2\2\2\u0112\u0114\5$\23\2\u0113"+
		"\u0112\3\2\2\2\u0113\u0114\3\2\2\2\u0114\u0116\3\2\2\2\u0115\u0117\7\26"+
		"\2\2\u0116\u0115\3\2\2\2\u0117\u0118\3\2\2\2\u0118\u0116\3\2\2\2\u0118"+
		"\u0119\3\2\2\2\u0119\25\3\2\2\2\u011a\u011c\7\13\2\2\u011b\u011d\7\25"+
		"\2\2\u011c\u011b\3\2\2\2\u011c\u011d\3\2\2\2\u011d\u011f\3\2\2\2\u011e"+
		"\u0120\5 \21\2\u011f\u011e\3\2\2\2\u011f\u0120\3\2\2\2\u0120\u0122\3\2"+
		"\2\2\u0121\u0123\7\25\2\2\u0122\u0121\3\2\2\2\u0122\u0123\3\2\2\2\u0123"+
		"\u0125\3\2\2\2\u0124\u0126\5\"\22\2\u0125\u0124\3\2\2\2\u0125\u0126\3"+
		"\2\2\2\u0126\u0128\3\2\2\2\u0127\u0129\7\25\2\2\u0128\u0127\3\2\2\2\u0128"+
		"\u0129\3\2\2\2\u0129\u012b\3\2\2\2\u012a\u012c\5$\23\2\u012b\u012a\3\2"+
		"\2\2\u012b\u012c\3\2\2\2\u012c\u012e\3\2\2\2\u012d\u012f\7\26\2\2\u012e"+
		"\u012d\3\2\2\2\u012f\u0130\3\2\2\2\u0130\u012e\3\2\2\2\u0130\u0131\3\2"+
		"\2\2\u0131\27\3\2\2\2\u0132\u0133\7\13\2\2\u0133\31\3\2\2\2\u0134\u0136"+
		"\7\f\2\2\u0135\u0137\7\25\2\2\u0136\u0135\3\2\2\2\u0136\u0137\3\2\2\2"+
		"\u0137\u0139\3\2\2\2\u0138\u013a\5 \21\2\u0139\u0138\3\2\2\2\u0139\u013a"+
		"\3\2\2\2\u013a\u013c\3\2\2\2\u013b\u013d\7\25\2\2\u013c\u013b\3\2\2\2"+
		"\u013c\u013d\3\2\2\2\u013d\u013f\3\2\2\2\u013e\u0140\5\"\22\2\u013f\u013e"+
		"\3\2\2\2\u013f\u0140\3\2\2\2\u0140\u0142\3\2\2\2\u0141\u0143\7\25\2\2"+
		"\u0142\u0141\3\2\2\2\u0142\u0143\3\2\2\2\u0143\u0145\3\2\2\2\u0144\u0146"+
		"\5$\23\2\u0145\u0144\3\2\2\2\u0145\u0146\3\2\2\2\u0146\u0147\3\2\2\2\u0147"+
		"\u0148\7\26\2\2\u0148\33\3\2\2\2\u0149\u014b\7\r\2\2\u014a\u014c\7\25"+
		"\2\2\u014b\u014a\3\2\2\2\u014b\u014c\3\2\2\2\u014c\u014e\3\2\2\2\u014d"+
		"\u014f\5 \21\2\u014e\u014d\3\2\2\2\u014e\u014f\3\2\2\2\u014f\u0151\3\2"+
		"\2\2\u0150\u0152\7\25\2\2\u0151\u0150\3\2\2\2\u0151\u0152\3\2\2\2\u0152"+
		"\u0154\3\2\2\2\u0153\u0155\5\"\22\2\u0154\u0153\3\2\2\2\u0154\u0155\3"+
		"\2\2\2\u0155\u0157\3\2\2\2\u0156\u0158\7\25\2\2\u0157\u0156\3\2\2\2\u0157"+
		"\u0158\3\2\2\2\u0158\u015a\3\2\2\2\u0159\u015b\5$\23\2\u015a\u0159\3\2"+
		"\2\2\u015a\u015b\3\2\2\2\u015b\u015c\3\2\2\2\u015c\u015d\7\26\2\2\u015d"+
		"\35\3\2\2\2\u015e\u0160\7\16\2\2\u015f\u0161\7\25\2\2\u0160\u015f\3\2"+
		"\2\2\u0160\u0161\3\2\2\2\u0161\u0163\3\2\2\2\u0162\u0164\5 \21\2\u0163"+
		"\u0162\3\2\2\2\u0163\u0164\3\2\2\2\u0164\u0166\3\2\2\2\u0165\u0167\7\25"+
		"\2\2\u0166\u0165\3\2\2\2\u0166\u0167\3\2\2\2\u0167\u0169\3\2\2\2\u0168"+
		"\u016a\5\"\22\2\u0169\u0168\3\2\2\2\u0169\u016a\3\2\2\2\u016a\u016c\3"+
		"\2\2\2\u016b\u016d\7\25\2\2\u016c\u016b\3\2\2\2\u016c\u016d\3\2\2\2\u016d"+
		"\u016f\3\2\2\2\u016e\u0170\5$\23\2\u016f\u016e\3\2\2\2\u016f\u0170\3\2"+
		"\2\2\u0170\u0171\3\2\2\2\u0171\u0172\7\26\2\2\u0172\37\3\2\2\2\u0173\u019b"+
		"\7\22\2\2\u0174\u0175\7\22\2\2\u0175\u019b\7\23\2\2\u0176\u0178\7\3\2"+
		"\2\u0177\u0179\7\23\2\2\u0178\u0177\3\2\2\2\u0178\u0179\3\2\2\2\u0179"+
		"\u019b\3\2\2\2\u017a\u017c\7\4\2\2\u017b\u017d\7\23\2\2\u017c\u017b\3"+
		"\2\2\2\u017c\u017d\3\2\2\2\u017d\u019b\3\2\2\2\u017e\u0180\7\5\2\2\u017f"+
		"\u0181\7\23\2\2\u0180\u017f\3\2\2\2\u0180\u0181\3\2\2\2\u0181\u019b\3"+
		"\2\2\2\u0182\u0184\7\6\2\2\u0183\u0185\7\23\2\2\u0184\u0183\3\2\2\2\u0184"+
		"\u0185\3\2\2\2\u0185\u019b\3\2\2\2\u0186\u0188\7\7\2\2\u0187\u0189\7\23"+
		"\2\2\u0188\u0187\3\2\2\2\u0188\u0189\3\2\2\2\u0189\u019b\3\2\2\2\u018a"+
		"\u018c\7\b\2\2\u018b\u018d\7\23\2\2\u018c\u018b\3\2\2\2\u018c\u018d\3"+
		"\2\2\2\u018d\u019b\3\2\2\2\u018e\u0190\7\t\2\2\u018f\u0191\7\23\2\2\u0190"+
		"\u018f\3\2\2\2\u0190\u0191\3\2\2\2\u0191\u019b\3\2\2\2\u0192\u0194\7\n"+
		"\2\2\u0193\u0195\7\23\2\2\u0194\u0193\3\2\2\2\u0194\u0195\3\2\2\2\u0195"+
		"\u019b\3\2\2\2\u0196\u0198\7\13\2\2\u0197\u0199\7\23\2\2\u0198\u0197\3"+
		"\2\2\2\u0198\u0199\3\2\2\2\u0199\u019b\3\2\2\2\u019a\u0173\3\2\2\2\u019a"+
		"\u0174\3\2\2\2\u019a\u0176\3\2\2\2\u019a\u017a\3\2\2\2\u019a\u017e\3\2"+
		"\2\2\u019a\u0182\3\2\2\2\u019a\u0186\3\2\2\2\u019a\u018a\3\2\2\2\u019a"+
		"\u018e\3\2\2\2\u019a\u0192\3\2\2\2\u019a\u0196\3\2\2\2\u019b!\3\2\2\2"+
		"\u019c\u019d\7\23\2\2\u019d#\3\2\2\2\u019e\u019f\7\17\2\2\u019f%\3\2\2"+
		"\2\u01a0\u01a2\5 \21\2\u01a1\u01a3\7\25\2\2\u01a2\u01a1\3\2\2\2\u01a2"+
		"\u01a3\3\2\2\2\u01a3\u01a4\3\2\2\2\u01a4\u01a6\5(\25\2\u01a5\u01a7\7\25"+
		"\2\2\u01a6\u01a5\3\2\2\2\u01a6\u01a7\3\2\2\2\u01a7\u01a8\3\2\2\2\u01a8"+
		"\u01a9\5 \21\2\u01a9\u01aa\7\26\2\2\u01aa\u01b9\3\2\2\2\u01ab\u01ad\5"+
		" \21\2\u01ac\u01ae\7\25\2\2\u01ad\u01ac\3\2\2\2\u01ad\u01ae\3\2\2\2\u01ae"+
		"\u01af\3\2\2\2\u01af\u01b1\5(\25\2\u01b0\u01b2\7\25\2\2\u01b1\u01b0\3"+
		"\2\2\2\u01b1\u01b2\3\2\2\2\u01b2\u01b3\3\2\2\2\u01b3\u01b4\5 \21\2\u01b4"+
		"\u01b5\7\f\2\2\u01b5\u01b6\5 \21\2\u01b6\u01b7\7\26\2\2\u01b7\u01b9\3"+
		"\2\2\2\u01b8\u01a0\3\2\2\2\u01b8\u01ab\3\2\2\2\u01b9\'\3\2\2\2\u01ba\u01bb"+
		"\t\2\2\2\u01bb)\3\2\2\2j-\62\64DJMPSVY\\agjmpsvy~\u0084\u0087\u008a\u008d"+
		"\u0090\u0093\u0096\u009b\u00a1\u00a4\u00a7\u00aa\u00ad\u00b0\u00b3\u00b8"+
		"\u00bc\u00bf\u00c2\u00c5\u00c8\u00cb\u00d0\u00d4\u00d7\u00da\u00dd\u00e0"+
		"\u00e3\u00e8\u00ec\u00ef\u00f2\u00f5\u00f8\u00fb\u0100\u0104\u0107\u010a"+
		"\u010d\u0110\u0113\u0118\u011c\u011f\u0122\u0125\u0128\u012b\u0130\u0136"+
		"\u0139\u013c\u013f\u0142\u0145\u014b\u014e\u0151\u0154\u0157\u015a\u0160"+
		"\u0163\u0166\u0169\u016c\u016f\u0178\u017c\u0180\u0184\u0188\u018c\u0190"+
		"\u0194\u0198\u019a\u01a2\u01a6\u01ad\u01b1\u01b8";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}