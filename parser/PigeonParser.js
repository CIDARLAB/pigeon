// Generated from /Users/benlaskaris/Desktop/pigeon/Pigeon.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PigeonListener = require('./PigeonListener').PigeonListener;
var PigeonVisitor = require('./PigeonVisitor').PigeonVisitor;

var grammarFileName = "Pigeon.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0016\u01af\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0003\u0002\u0006\u0002*\n\u0002\r\u0002\u000e\u0002+\u0003",
    "\u0002\u0006\u0002/\n\u0002\r\u0002\u000e\u00020\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003A\n\u0003\u0003\u0004\u0005\u0004D\n\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004H\n\u0004\u0003\u0004\u0005\u0004K\n\u0004\u0003\u0004",
    "\u0005\u0004N\n\u0004\u0003\u0004\u0005\u0004Q\n\u0004\u0003\u0004\u0005",
    "\u0004T\n\u0004\u0003\u0004\u0005\u0004W\n\u0004\u0003\u0004\u0006\u0004",
    "Z\n\u0004\r\u0004\u000e\u0004[\u0003\u0005\u0005\u0005_\n\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005c\n\u0005\u0003\u0005\u0005\u0005f\n\u0005",
    "\u0003\u0005\u0005\u0005i\n\u0005\u0003\u0005\u0005\u0005l\n\u0005\u0003",
    "\u0005\u0005\u0005o\n\u0005\u0003\u0005\u0005\u0005r\n\u0005\u0003\u0005",
    "\u0006\u0005u\n\u0005\r\u0005\u000e\u0005v\u0003\u0006\u0005\u0006z",
    "\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006~\n\u0006\u0003\u0006\u0005",
    "\u0006\u0081\n\u0006\u0003\u0006\u0005\u0006\u0084\n\u0006\u0003\u0006",
    "\u0005\u0006\u0087\n\u0006\u0003\u0006\u0005\u0006\u008a\n\u0006\u0003",
    "\u0006\u0005\u0006\u008d\n\u0006\u0003\u0006\u0006\u0006\u0090\n\u0006",
    "\r\u0006\u000e\u0006\u0091\u0003\u0007\u0005\u0007\u0095\n\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007\u0099\n\u0007\u0003\u0007\u0005\u0007",
    "\u009c\n\u0007\u0003\u0007\u0005\u0007\u009f\n\u0007\u0003\u0007\u0005",
    "\u0007\u00a2\n\u0007\u0003\u0007\u0005\u0007\u00a5\n\u0007\u0003\u0007",
    "\u0005\u0007\u00a8\n\u0007\u0003\u0007\u0006\u0007\u00ab\n\u0007\r\u0007",
    "\u000e\u0007\u00ac\u0003\b\u0003\b\u0005\b\u00b1\n\b\u0003\b\u0005\b",
    "\u00b4\n\b\u0003\b\u0005\b\u00b7\n\b\u0003\b\u0005\b\u00ba\n\b\u0003",
    "\b\u0005\b\u00bd\n\b\u0003\b\u0005\b\u00c0\n\b\u0003\b\u0006\b\u00c3",
    "\n\b\r\b\u000e\b\u00c4\u0003\t\u0003\t\u0005\t\u00c9\n\t\u0003\t\u0005",
    "\t\u00cc\n\t\u0003\t\u0005\t\u00cf\n\t\u0003\t\u0005\t\u00d2\n\t\u0003",
    "\t\u0005\t\u00d5\n\t\u0003\t\u0005\t\u00d8\n\t\u0003\t\u0006\t\u00db",
    "\n\t\r\t\u000e\t\u00dc\u0003\n\u0003\n\u0005\n\u00e1\n\n\u0003\n\u0005",
    "\n\u00e4\n\n\u0003\n\u0005\n\u00e7\n\n\u0003\n\u0005\n\u00ea\n\n\u0003",
    "\n\u0005\n\u00ed\n\n\u0003\n\u0005\n\u00f0\n\n\u0003\n\u0006\n\u00f3",
    "\n\n\r\n\u000e\n\u00f4\u0003\u000b\u0003\u000b\u0005\u000b\u00f9\n\u000b",
    "\u0003\u000b\u0005\u000b\u00fc\n\u000b\u0003\u000b\u0005\u000b\u00ff",
    "\n\u000b\u0003\u000b\u0005\u000b\u0102\n\u000b\u0003\u000b\u0005\u000b",
    "\u0105\n\u000b\u0003\u000b\u0005\u000b\u0108\n\u000b\u0003\u000b\u0006",
    "\u000b\u010b\n\u000b\r\u000b\u000e\u000b\u010c\u0003\f\u0003\f\u0005",
    "\f\u0111\n\f\u0003\f\u0005\f\u0114\n\f\u0003\f\u0005\f\u0117\n\f\u0003",
    "\f\u0005\f\u011a\n\f\u0003\f\u0005\f\u011d\n\f\u0003\f\u0005\f\u0120",
    "\n\f\u0003\f\u0006\f\u0123\n\f\r\f\u000e\f\u0124\u0003\r\u0003\r\u0005",
    "\r\u0129\n\r\u0003\r\u0005\r\u012c\n\r\u0003\r\u0005\r\u012f\n\r\u0003",
    "\r\u0005\r\u0132\n\r\u0003\r\u0005\r\u0135\n\r\u0003\r\u0005\r\u0138",
    "\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0005\u000e\u013e\n\u000e",
    "\u0003\u000e\u0005\u000e\u0141\n\u000e\u0003\u000e\u0005\u000e\u0144",
    "\n\u000e\u0003\u000e\u0005\u000e\u0147\n\u000e\u0003\u000e\u0005\u000e",
    "\u014a\n\u000e\u0003\u000e\u0005\u000e\u014d\n\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0005\u000f\u0153\n\u000f\u0003\u000f",
    "\u0005\u000f\u0156\n\u000f\u0003\u000f\u0005\u000f\u0159\n\u000f\u0003",
    "\u000f\u0005\u000f\u015c\n\u000f\u0003\u000f\u0005\u000f\u015f\n\u000f",
    "\u0003\u000f\u0005\u000f\u0162\n\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u016b",
    "\n\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u016f\n\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u0173\n\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u0177\n\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u017b\n\u0010",
    "\u0003\u0010\u0003\u0010\u0005\u0010\u017f\n\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u0183\n\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u0187\n\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u018b\n\u0010\u0005",
    "\u0010\u018d\n\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0005\u0013\u0195\n\u0013\u0003\u0013\u0003",
    "\u0013\u0005\u0013\u0199\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0005\u0013\u01a0\n\u0013\u0003\u0013\u0003",
    "\u0013\u0005\u0013\u01a4\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0005\u0013\u01ab\n\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0002\u0002\u0015\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&\u0002\u0003\u0003\u0002",
    "\u0010\u0011\u0002\u0215\u0002)\u0003\u0002\u0002\u0002\u0004@\u0003",
    "\u0002\u0002\u0002\u0006C\u0003\u0002\u0002\u0002\b^\u0003\u0002\u0002",
    "\u0002\ny\u0003\u0002\u0002\u0002\f\u0094\u0003\u0002\u0002\u0002\u000e",
    "\u00ae\u0003\u0002\u0002\u0002\u0010\u00c6\u0003\u0002\u0002\u0002\u0012",
    "\u00de\u0003\u0002\u0002\u0002\u0014\u00f6\u0003\u0002\u0002\u0002\u0016",
    "\u010e\u0003\u0002\u0002\u0002\u0018\u0126\u0003\u0002\u0002\u0002\u001a",
    "\u013b\u0003\u0002\u0002\u0002\u001c\u0150\u0003\u0002\u0002\u0002\u001e",
    "\u018c\u0003\u0002\u0002\u0002 \u018e\u0003\u0002\u0002\u0002\"\u0190",
    "\u0003\u0002\u0002\u0002$\u01aa\u0003\u0002\u0002\u0002&\u01ac\u0003",
    "\u0002\u0002\u0002(*\u0005\u0004\u0003\u0002)(\u0003\u0002\u0002\u0002",
    "*+\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002",
    "\u0002,.\u0003\u0002\u0002\u0002-/\u0005$\u0013\u0002.-\u0003\u0002",
    "\u0002\u0002/0\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u000201\u0003",
    "\u0002\u0002\u000212\u0003\u0002\u0002\u000223\u0007\u0002\u0002\u0003",
    "3\u0003\u0003\u0002\u0002\u00024A\u0005\u0006\u0004\u00025A\u0005\b",
    "\u0005\u00026A\u0005\n\u0006\u00027A\u0005\f\u0007\u00028A\u0005\u000e",
    "\b\u00029A\u0005\u0010\t\u0002:A\u0005\u0012\n\u0002;A\u0005\u0014\u000b",
    "\u0002<A\u0005\u0016\f\u0002=A\u0005\u0018\r\u0002>A\u0005\u001a\u000e",
    "\u0002?A\u0005\u001c\u000f\u0002@4\u0003\u0002\u0002\u0002@5\u0003\u0002",
    "\u0002\u0002@6\u0003\u0002\u0002\u0002@7\u0003\u0002\u0002\u0002@8\u0003",
    "\u0002\u0002\u0002@9\u0003\u0002\u0002\u0002@:\u0003\u0002\u0002\u0002",
    "@;\u0003\u0002\u0002\u0002@<\u0003\u0002\u0002\u0002@=\u0003\u0002\u0002",
    "\u0002@>\u0003\u0002\u0002\u0002@?\u0003\u0002\u0002\u0002A\u0005\u0003",
    "\u0002\u0002\u0002BD\u0007\u0003\u0002\u0002CB\u0003\u0002\u0002\u0002",
    "CD\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EG\u0007\u0004\u0002",
    "\u0002FH\u0007\u0015\u0002\u0002GF\u0003\u0002\u0002\u0002GH\u0003\u0002",
    "\u0002\u0002HJ\u0003\u0002\u0002\u0002IK\u0005\u001e\u0010\u0002JI\u0003",
    "\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KM\u0003\u0002\u0002\u0002",
    "LN\u0007\u0015\u0002\u0002ML\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002",
    "\u0002NP\u0003\u0002\u0002\u0002OQ\u0005 \u0011\u0002PO\u0003\u0002",
    "\u0002\u0002PQ\u0003\u0002\u0002\u0002QS\u0003\u0002\u0002\u0002RT\u0007",
    "\u0015\u0002\u0002SR\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002",
    "TV\u0003\u0002\u0002\u0002UW\u0005\"\u0012\u0002VU\u0003\u0002\u0002",
    "\u0002VW\u0003\u0002\u0002\u0002WY\u0003\u0002\u0002\u0002XZ\u0007\u0016",
    "\u0002\u0002YX\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[Y\u0003",
    "\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\\u0007\u0003\u0002\u0002",
    "\u0002]_\u0007\u0003\u0002\u0002^]\u0003\u0002\u0002\u0002^_\u0003\u0002",
    "\u0002\u0002_`\u0003\u0002\u0002\u0002`b\u0007\u0005\u0002\u0002ac\u0007",
    "\u0015\u0002\u0002ba\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002",
    "ce\u0003\u0002\u0002\u0002df\u0005\u001e\u0010\u0002ed\u0003\u0002\u0002",
    "\u0002ef\u0003\u0002\u0002\u0002fh\u0003\u0002\u0002\u0002gi\u0007\u0015",
    "\u0002\u0002hg\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ik\u0003",
    "\u0002\u0002\u0002jl\u0005 \u0011\u0002kj\u0003\u0002\u0002\u0002kl",
    "\u0003\u0002\u0002\u0002ln\u0003\u0002\u0002\u0002mo\u0007\u0015\u0002",
    "\u0002nm\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002oq\u0003\u0002",
    "\u0002\u0002pr\u0005\"\u0012\u0002qp\u0003\u0002\u0002\u0002qr\u0003",
    "\u0002\u0002\u0002rt\u0003\u0002\u0002\u0002su\u0007\u0016\u0002\u0002",
    "ts\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002",
    "\u0002vw\u0003\u0002\u0002\u0002w\t\u0003\u0002\u0002\u0002xz\u0007",
    "\u0003\u0002\u0002yx\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002",
    "z{\u0003\u0002\u0002\u0002{}\u0007\u0006\u0002\u0002|~\u0007\u0015\u0002",
    "\u0002}|\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u0080\u0003",
    "\u0002\u0002\u0002\u007f\u0081\u0005\u001e\u0010\u0002\u0080\u007f\u0003",
    "\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0083\u0003",
    "\u0002\u0002\u0002\u0082\u0084\u0007\u0015\u0002\u0002\u0083\u0082\u0003",
    "\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0086\u0003",
    "\u0002\u0002\u0002\u0085\u0087\u0005 \u0011\u0002\u0086\u0085\u0003",
    "\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0089\u0003",
    "\u0002\u0002\u0002\u0088\u008a\u0007\u0015\u0002\u0002\u0089\u0088\u0003",
    "\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008c\u0003",
    "\u0002\u0002\u0002\u008b\u008d\u0005\"\u0012\u0002\u008c\u008b\u0003",
    "\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u008f\u0003",
    "\u0002\u0002\u0002\u008e\u0090\u0007\u0016\u0002\u0002\u008f\u008e\u0003",
    "\u0002\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u008f\u0003",
    "\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u000b\u0003",
    "\u0002\u0002\u0002\u0093\u0095\u0007\u0003\u0002\u0002\u0094\u0093\u0003",
    "\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0096\u0003",
    "\u0002\u0002\u0002\u0096\u0098\u0007\u0007\u0002\u0002\u0097\u0099\u0007",
    "\u0015\u0002\u0002\u0098\u0097\u0003\u0002\u0002\u0002\u0098\u0099\u0003",
    "\u0002\u0002\u0002\u0099\u009b\u0003\u0002\u0002\u0002\u009a\u009c\u0005",
    "\u001e\u0010\u0002\u009b\u009a\u0003\u0002\u0002\u0002\u009b\u009c\u0003",
    "\u0002\u0002\u0002\u009c\u009e\u0003\u0002\u0002\u0002\u009d\u009f\u0007",
    "\u0015\u0002\u0002\u009e\u009d\u0003\u0002\u0002\u0002\u009e\u009f\u0003",
    "\u0002\u0002\u0002\u009f\u00a1\u0003\u0002\u0002\u0002\u00a0\u00a2\u0005",
    " \u0011\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003",
    "\u0002\u0002\u0002\u00a2\u00a4\u0003\u0002\u0002\u0002\u00a3\u00a5\u0007",
    "\u0015\u0002\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003",
    "\u0002\u0002\u0002\u00a5\u00a7\u0003\u0002\u0002\u0002\u00a6\u00a8\u0005",
    "\"\u0012\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003",
    "\u0002\u0002\u0002\u00a8\u00aa\u0003\u0002\u0002\u0002\u00a9\u00ab\u0007",
    "\u0016\u0002\u0002\u00aa\u00a9\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003",
    "\u0002\u0002\u0002\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003",
    "\u0002\u0002\u0002\u00ad\r\u0003\u0002\u0002\u0002\u00ae\u00b0\u0007",
    "\b\u0002\u0002\u00af\u00b1\u0007\u0015\u0002\u0002\u00b0\u00af\u0003",
    "\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b3\u0003",
    "\u0002\u0002\u0002\u00b2\u00b4\u0005\u001e\u0010\u0002\u00b3\u00b2\u0003",
    "\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b6\u0003",
    "\u0002\u0002\u0002\u00b5\u00b7\u0007\u0015\u0002\u0002\u00b6\u00b5\u0003",
    "\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b9\u0003",
    "\u0002\u0002\u0002\u00b8\u00ba\u0005 \u0011\u0002\u00b9\u00b8\u0003",
    "\u0002\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bc\u0003",
    "\u0002\u0002\u0002\u00bb\u00bd\u0007\u0015\u0002\u0002\u00bc\u00bb\u0003",
    "\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00bf\u0003",
    "\u0002\u0002\u0002\u00be\u00c0\u0005\"\u0012\u0002\u00bf\u00be\u0003",
    "\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0\u00c2\u0003",
    "\u0002\u0002\u0002\u00c1\u00c3\u0007\u0016\u0002\u0002\u00c2\u00c1\u0003",
    "\u0002\u0002\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003",
    "\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5\u000f\u0003",
    "\u0002\u0002\u0002\u00c6\u00c8\u0007\t\u0002\u0002\u00c7\u00c9\u0007",
    "\u0015\u0002\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003",
    "\u0002\u0002\u0002\u00c9\u00cb\u0003\u0002\u0002\u0002\u00ca\u00cc\u0005",
    "\u001e\u0010\u0002\u00cb\u00ca\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003",
    "\u0002\u0002\u0002\u00cc\u00ce\u0003\u0002\u0002\u0002\u00cd\u00cf\u0007",
    "\u0015\u0002\u0002\u00ce\u00cd\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003",
    "\u0002\u0002\u0002\u00cf\u00d1\u0003\u0002\u0002\u0002\u00d0\u00d2\u0005",
    " \u0011\u0002\u00d1\u00d0\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003",
    "\u0002\u0002\u0002\u00d2\u00d4\u0003\u0002\u0002\u0002\u00d3\u00d5\u0007",
    "\u0015\u0002\u0002\u00d4\u00d3\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003",
    "\u0002\u0002\u0002\u00d5\u00d7\u0003\u0002\u0002\u0002\u00d6\u00d8\u0005",
    "\"\u0012\u0002\u00d7\u00d6\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003",
    "\u0002\u0002\u0002\u00d8\u00da\u0003\u0002\u0002\u0002\u00d9\u00db\u0007",
    "\u0016\u0002\u0002\u00da\u00d9\u0003\u0002\u0002\u0002\u00db\u00dc\u0003",
    "\u0002\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003",
    "\u0002\u0002\u0002\u00dd\u0011\u0003\u0002\u0002\u0002\u00de\u00e0\u0007",
    "\n\u0002\u0002\u00df\u00e1\u0007\u0015\u0002\u0002\u00e0\u00df\u0003",
    "\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\u00e3\u0003",
    "\u0002\u0002\u0002\u00e2\u00e4\u0005\u001e\u0010\u0002\u00e3\u00e2\u0003",
    "\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e6\u0003",
    "\u0002\u0002\u0002\u00e5\u00e7\u0007\u0015\u0002\u0002\u00e6\u00e5\u0003",
    "\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e9\u0003",
    "\u0002\u0002\u0002\u00e8\u00ea\u0005 \u0011\u0002\u00e9\u00e8\u0003",
    "\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea\u00ec\u0003",
    "\u0002\u0002\u0002\u00eb\u00ed\u0007\u0015\u0002\u0002\u00ec\u00eb\u0003",
    "\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u00ef\u0003",
    "\u0002\u0002\u0002\u00ee\u00f0\u0005\"\u0012\u0002\u00ef\u00ee\u0003",
    "\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0\u00f2\u0003",
    "\u0002\u0002\u0002\u00f1\u00f3\u0007\u0016\u0002\u0002\u00f2\u00f1\u0003",
    "\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4\u00f2\u0003",
    "\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5\u0013\u0003",
    "\u0002\u0002\u0002\u00f6\u00f8\u0007\u000b\u0002\u0002\u00f7\u00f9\u0007",
    "\u0015\u0002\u0002\u00f8\u00f7\u0003\u0002\u0002\u0002\u00f8\u00f9\u0003",
    "\u0002\u0002\u0002\u00f9\u00fb\u0003\u0002\u0002\u0002\u00fa\u00fc\u0005",
    "\u001e\u0010\u0002\u00fb\u00fa\u0003\u0002\u0002\u0002\u00fb\u00fc\u0003",
    "\u0002\u0002\u0002\u00fc\u00fe\u0003\u0002\u0002\u0002\u00fd\u00ff\u0007",
    "\u0015\u0002\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003",
    "\u0002\u0002\u0002\u00ff\u0101\u0003\u0002\u0002\u0002\u0100\u0102\u0005",
    " \u0011\u0002\u0101\u0100\u0003\u0002\u0002\u0002\u0101\u0102\u0003",
    "\u0002\u0002\u0002\u0102\u0104\u0003\u0002\u0002\u0002\u0103\u0105\u0007",
    "\u0015\u0002\u0002\u0104\u0103\u0003\u0002\u0002\u0002\u0104\u0105\u0003",
    "\u0002\u0002\u0002\u0105\u0107\u0003\u0002\u0002\u0002\u0106\u0108\u0005",
    "\"\u0012\u0002\u0107\u0106\u0003\u0002\u0002\u0002\u0107\u0108\u0003",
    "\u0002\u0002\u0002\u0108\u010a\u0003\u0002\u0002\u0002\u0109\u010b\u0007",
    "\u0016\u0002\u0002\u010a\u0109\u0003\u0002\u0002\u0002\u010b\u010c\u0003",
    "\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010c\u010d\u0003",
    "\u0002\u0002\u0002\u010d\u0015\u0003\u0002\u0002\u0002\u010e\u0110\u0007",
    "\u0003\u0002\u0002\u010f\u0111\u0007\u0015\u0002\u0002\u0110\u010f\u0003",
    "\u0002\u0002\u0002\u0110\u0111\u0003\u0002\u0002\u0002\u0111\u0113\u0003",
    "\u0002\u0002\u0002\u0112\u0114\u0005\u001e\u0010\u0002\u0113\u0112\u0003",
    "\u0002\u0002\u0002\u0113\u0114\u0003\u0002\u0002\u0002\u0114\u0116\u0003",
    "\u0002\u0002\u0002\u0115\u0117\u0007\u0015\u0002\u0002\u0116\u0115\u0003",
    "\u0002\u0002\u0002\u0116\u0117\u0003\u0002\u0002\u0002\u0117\u0119\u0003",
    "\u0002\u0002\u0002\u0118\u011a\u0005 \u0011\u0002\u0119\u0118\u0003",
    "\u0002\u0002\u0002\u0119\u011a\u0003\u0002\u0002\u0002\u011a\u011c\u0003",
    "\u0002\u0002\u0002\u011b\u011d\u0007\u0015\u0002\u0002\u011c\u011b\u0003",
    "\u0002\u0002\u0002\u011c\u011d\u0003\u0002\u0002\u0002\u011d\u011f\u0003",
    "\u0002\u0002\u0002\u011e\u0120\u0005\"\u0012\u0002\u011f\u011e\u0003",
    "\u0002\u0002\u0002\u011f\u0120\u0003\u0002\u0002\u0002\u0120\u0122\u0003",
    "\u0002\u0002\u0002\u0121\u0123\u0007\u0016\u0002\u0002\u0122\u0121\u0003",
    "\u0002\u0002\u0002\u0123\u0124\u0003\u0002\u0002\u0002\u0124\u0122\u0003",
    "\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0125\u0017\u0003",
    "\u0002\u0002\u0002\u0126\u0128\u0007\f\u0002\u0002\u0127\u0129\u0007",
    "\u0015\u0002\u0002\u0128\u0127\u0003\u0002\u0002\u0002\u0128\u0129\u0003",
    "\u0002\u0002\u0002\u0129\u012b\u0003\u0002\u0002\u0002\u012a\u012c\u0005",
    "\u001e\u0010\u0002\u012b\u012a\u0003\u0002\u0002\u0002\u012b\u012c\u0003",
    "\u0002\u0002\u0002\u012c\u012e\u0003\u0002\u0002\u0002\u012d\u012f\u0007",
    "\u0015\u0002\u0002\u012e\u012d\u0003\u0002\u0002\u0002\u012e\u012f\u0003",
    "\u0002\u0002\u0002\u012f\u0131\u0003\u0002\u0002\u0002\u0130\u0132\u0005",
    " \u0011\u0002\u0131\u0130\u0003\u0002\u0002\u0002\u0131\u0132\u0003",
    "\u0002\u0002\u0002\u0132\u0134\u0003\u0002\u0002\u0002\u0133\u0135\u0007",
    "\u0015\u0002\u0002\u0134\u0133\u0003\u0002\u0002\u0002\u0134\u0135\u0003",
    "\u0002\u0002\u0002\u0135\u0137\u0003\u0002\u0002\u0002\u0136\u0138\u0005",
    "\"\u0012\u0002\u0137\u0136\u0003\u0002\u0002\u0002\u0137\u0138\u0003",
    "\u0002\u0002\u0002\u0138\u0139\u0003\u0002\u0002\u0002\u0139\u013a\u0007",
    "\u0016\u0002\u0002\u013a\u0019\u0003\u0002\u0002\u0002\u013b\u013d\u0007",
    "\r\u0002\u0002\u013c\u013e\u0007\u0015\u0002\u0002\u013d\u013c\u0003",
    "\u0002\u0002\u0002\u013d\u013e\u0003\u0002\u0002\u0002\u013e\u0140\u0003",
    "\u0002\u0002\u0002\u013f\u0141\u0005\u001e\u0010\u0002\u0140\u013f\u0003",
    "\u0002\u0002\u0002\u0140\u0141\u0003\u0002\u0002\u0002\u0141\u0143\u0003",
    "\u0002\u0002\u0002\u0142\u0144\u0007\u0015\u0002\u0002\u0143\u0142\u0003",
    "\u0002\u0002\u0002\u0143\u0144\u0003\u0002\u0002\u0002\u0144\u0146\u0003",
    "\u0002\u0002\u0002\u0145\u0147\u0005 \u0011\u0002\u0146\u0145\u0003",
    "\u0002\u0002\u0002\u0146\u0147\u0003\u0002\u0002\u0002\u0147\u0149\u0003",
    "\u0002\u0002\u0002\u0148\u014a\u0007\u0015\u0002\u0002\u0149\u0148\u0003",
    "\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002\u014a\u014c\u0003",
    "\u0002\u0002\u0002\u014b\u014d\u0005\"\u0012\u0002\u014c\u014b\u0003",
    "\u0002\u0002\u0002\u014c\u014d\u0003\u0002\u0002\u0002\u014d\u014e\u0003",
    "\u0002\u0002\u0002\u014e\u014f\u0007\u0016\u0002\u0002\u014f\u001b\u0003",
    "\u0002\u0002\u0002\u0150\u0152\u0007\u000e\u0002\u0002\u0151\u0153\u0007",
    "\u0015\u0002\u0002\u0152\u0151\u0003\u0002\u0002\u0002\u0152\u0153\u0003",
    "\u0002\u0002\u0002\u0153\u0155\u0003\u0002\u0002\u0002\u0154\u0156\u0005",
    "\u001e\u0010\u0002\u0155\u0154\u0003\u0002\u0002\u0002\u0155\u0156\u0003",
    "\u0002\u0002\u0002\u0156\u0158\u0003\u0002\u0002\u0002\u0157\u0159\u0007",
    "\u0015\u0002\u0002\u0158\u0157\u0003\u0002\u0002\u0002\u0158\u0159\u0003",
    "\u0002\u0002\u0002\u0159\u015b\u0003\u0002\u0002\u0002\u015a\u015c\u0005",
    " \u0011\u0002\u015b\u015a\u0003\u0002\u0002\u0002\u015b\u015c\u0003",
    "\u0002\u0002\u0002\u015c\u015e\u0003\u0002\u0002\u0002\u015d\u015f\u0007",
    "\u0015\u0002\u0002\u015e\u015d\u0003\u0002\u0002\u0002\u015e\u015f\u0003",
    "\u0002\u0002\u0002\u015f\u0161\u0003\u0002\u0002\u0002\u0160\u0162\u0005",
    "\"\u0012\u0002\u0161\u0160\u0003\u0002\u0002\u0002\u0161\u0162\u0003",
    "\u0002\u0002\u0002\u0162\u0163\u0003\u0002\u0002\u0002\u0163\u0164\u0007",
    "\u0016\u0002\u0002\u0164\u001d\u0003\u0002\u0002\u0002\u0165\u018d\u0007",
    "\u0012\u0002\u0002\u0166\u0167\u0007\u0012\u0002\u0002\u0167\u018d\u0007",
    "\u0013\u0002\u0002\u0168\u016a\u0007\u0004\u0002\u0002\u0169\u016b\u0007",
    "\u0013\u0002\u0002\u016a\u0169\u0003\u0002\u0002\u0002\u016a\u016b\u0003",
    "\u0002\u0002\u0002\u016b\u018d\u0003\u0002\u0002\u0002\u016c\u016e\u0007",
    "\u0005\u0002\u0002\u016d\u016f\u0007\u0013\u0002\u0002\u016e\u016d\u0003",
    "\u0002\u0002\u0002\u016e\u016f\u0003\u0002\u0002\u0002\u016f\u018d\u0003",
    "\u0002\u0002\u0002\u0170\u0172\u0007\u0006\u0002\u0002\u0171\u0173\u0007",
    "\u0013\u0002\u0002\u0172\u0171\u0003\u0002\u0002\u0002\u0172\u0173\u0003",
    "\u0002\u0002\u0002\u0173\u018d\u0003\u0002\u0002\u0002\u0174\u0176\u0007",
    "\u0007\u0002\u0002\u0175\u0177\u0007\u0013\u0002\u0002\u0176\u0175\u0003",
    "\u0002\u0002\u0002\u0176\u0177\u0003\u0002\u0002\u0002\u0177\u018d\u0003",
    "\u0002\u0002\u0002\u0178\u017a\u0007\b\u0002\u0002\u0179\u017b\u0007",
    "\u0013\u0002\u0002\u017a\u0179\u0003\u0002\u0002\u0002\u017a\u017b\u0003",
    "\u0002\u0002\u0002\u017b\u018d\u0003\u0002\u0002\u0002\u017c\u017e\u0007",
    "\t\u0002\u0002\u017d\u017f\u0007\u0013\u0002\u0002\u017e\u017d\u0003",
    "\u0002\u0002\u0002\u017e\u017f\u0003\u0002\u0002\u0002\u017f\u018d\u0003",
    "\u0002\u0002\u0002\u0180\u0182\u0007\n\u0002\u0002\u0181\u0183\u0007",
    "\u0013\u0002\u0002\u0182\u0181\u0003\u0002\u0002\u0002\u0182\u0183\u0003",
    "\u0002\u0002\u0002\u0183\u018d\u0003\u0002\u0002\u0002\u0184\u0186\u0007",
    "\u000b\u0002\u0002\u0185\u0187\u0007\u0013\u0002\u0002\u0186\u0185\u0003",
    "\u0002\u0002\u0002\u0186\u0187\u0003\u0002\u0002\u0002\u0187\u018d\u0003",
    "\u0002\u0002\u0002\u0188\u018a\u0007\u0003\u0002\u0002\u0189\u018b\u0007",
    "\u0013\u0002\u0002\u018a\u0189\u0003\u0002\u0002\u0002\u018a\u018b\u0003",
    "\u0002\u0002\u0002\u018b\u018d\u0003\u0002\u0002\u0002\u018c\u0165\u0003",
    "\u0002\u0002\u0002\u018c\u0166\u0003\u0002\u0002\u0002\u018c\u0168\u0003",
    "\u0002\u0002\u0002\u018c\u016c\u0003\u0002\u0002\u0002\u018c\u0170\u0003",
    "\u0002\u0002\u0002\u018c\u0174\u0003\u0002\u0002\u0002\u018c\u0178\u0003",
    "\u0002\u0002\u0002\u018c\u017c\u0003\u0002\u0002\u0002\u018c\u0180\u0003",
    "\u0002\u0002\u0002\u018c\u0184\u0003\u0002\u0002\u0002\u018c\u0188\u0003",
    "\u0002\u0002\u0002\u018d\u001f\u0003\u0002\u0002\u0002\u018e\u018f\u0007",
    "\u0013\u0002\u0002\u018f!\u0003\u0002\u0002\u0002\u0190\u0191\u0007",
    "\u000f\u0002\u0002\u0191#\u0003\u0002\u0002\u0002\u0192\u0194\u0005",
    "\u001e\u0010\u0002\u0193\u0195\u0007\u0015\u0002\u0002\u0194\u0193\u0003",
    "\u0002\u0002\u0002\u0194\u0195\u0003\u0002\u0002\u0002\u0195\u0196\u0003",
    "\u0002\u0002\u0002\u0196\u0198\u0005&\u0014\u0002\u0197\u0199\u0007",
    "\u0015\u0002\u0002\u0198\u0197\u0003\u0002\u0002\u0002\u0198\u0199\u0003",
    "\u0002\u0002\u0002\u0199\u019a\u0003\u0002\u0002\u0002\u019a\u019b\u0005",
    "\u001e\u0010\u0002\u019b\u019c\u0007\u0016\u0002\u0002\u019c\u01ab\u0003",
    "\u0002\u0002\u0002\u019d\u019f\u0005\u001e\u0010\u0002\u019e\u01a0\u0007",
    "\u0015\u0002\u0002\u019f\u019e\u0003\u0002\u0002\u0002\u019f\u01a0\u0003",
    "\u0002\u0002\u0002\u01a0\u01a1\u0003\u0002\u0002\u0002\u01a1\u01a3\u0005",
    "&\u0014\u0002\u01a2\u01a4\u0007\u0015\u0002\u0002\u01a3\u01a2\u0003",
    "\u0002\u0002\u0002\u01a3\u01a4\u0003\u0002\u0002\u0002\u01a4\u01a5\u0003",
    "\u0002\u0002\u0002\u01a5\u01a6\u0005\u001e\u0010\u0002\u01a6\u01a7\u0007",
    "\f\u0002\u0002\u01a7\u01a8\u0005\u001e\u0010\u0002\u01a8\u01a9\u0007",
    "\u0016\u0002\u0002\u01a9\u01ab\u0003\u0002\u0002\u0002\u01aa\u0192\u0003",
    "\u0002\u0002\u0002\u01aa\u019d\u0003\u0002\u0002\u0002\u01ab%\u0003",
    "\u0002\u0002\u0002\u01ac\u01ad\t\u0002\u0002\u0002\u01ad\'\u0003\u0002",
    "\u0002\u0002i+0@CGJMPSV[^behknqvy}\u0080\u0083\u0086\u0089\u008c\u0091",
    "\u0094\u0098\u009b\u009e\u00a1\u00a4\u00a7\u00ac\u00b0\u00b3\u00b6\u00b9",
    "\u00bc\u00bf\u00c4\u00c8\u00cb\u00ce\u00d1\u00d4\u00d7\u00dc\u00e0\u00e3",
    "\u00e6\u00e9\u00ec\u00ef\u00f4\u00f8\u00fb\u00fe\u0101\u0104\u0107\u010c",
    "\u0110\u0113\u0116\u0119\u011c\u011f\u0124\u0128\u012b\u012e\u0131\u0134",
    "\u0137\u013d\u0140\u0143\u0146\u0149\u014c\u0152\u0155\u0158\u015b\u015e",
    "\u0161\u016a\u016e\u0172\u0176\u017a\u017e\u0182\u0186\u018a\u018c\u0194",
    "\u0198\u019f\u01a3\u01aa"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'<'", "'p'", "'r'", "'c'", "'t'", "'s'", "'o'", 
                     "'d'", "'>'", "'-'", "'.'", "'|'", "'nl'", "'ind'", 
                     "'rep'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "ID", "INT", 
                      "SK", "WS", "NL" ];

var ruleNames =  [ "script", "pigeoncommands", "promoter", "repressor", 
                   "codingseq", "transcription", "stop", "operator", "degredationtag", 
                   "righttriangle", "lefttriangle", "dash", "period", "bar", 
                   "label", "color", "ignorecolor", "arccommands", "arc" ];

function PigeonParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

PigeonParser.prototype = Object.create(antlr4.Parser.prototype);
PigeonParser.prototype.constructor = PigeonParser;

Object.defineProperty(PigeonParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

PigeonParser.EOF = antlr4.Token.EOF;
PigeonParser.T__0 = 1;
PigeonParser.T__1 = 2;
PigeonParser.T__2 = 3;
PigeonParser.T__3 = 4;
PigeonParser.T__4 = 5;
PigeonParser.T__5 = 6;
PigeonParser.T__6 = 7;
PigeonParser.T__7 = 8;
PigeonParser.T__8 = 9;
PigeonParser.T__9 = 10;
PigeonParser.T__10 = 11;
PigeonParser.T__11 = 12;
PigeonParser.T__12 = 13;
PigeonParser.T__13 = 14;
PigeonParser.T__14 = 15;
PigeonParser.ID = 16;
PigeonParser.INT = 17;
PigeonParser.SK = 18;
PigeonParser.WS = 19;
PigeonParser.NL = 20;

PigeonParser.RULE_script = 0;
PigeonParser.RULE_pigeoncommands = 1;
PigeonParser.RULE_promoter = 2;
PigeonParser.RULE_repressor = 3;
PigeonParser.RULE_codingseq = 4;
PigeonParser.RULE_transcription = 5;
PigeonParser.RULE_stop = 6;
PigeonParser.RULE_operator = 7;
PigeonParser.RULE_degredationtag = 8;
PigeonParser.RULE_righttriangle = 9;
PigeonParser.RULE_lefttriangle = 10;
PigeonParser.RULE_dash = 11;
PigeonParser.RULE_period = 12;
PigeonParser.RULE_bar = 13;
PigeonParser.RULE_label = 14;
PigeonParser.RULE_color = 15;
PigeonParser.RULE_ignorecolor = 16;
PigeonParser.RULE_arccommands = 17;
PigeonParser.RULE_arc = 18;


function ScriptContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_script;
    return this;
}

ScriptContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScriptContext.prototype.constructor = ScriptContext;

ScriptContext.prototype.EOF = function() {
    return this.getToken(PigeonParser.EOF, 0);
};

ScriptContext.prototype.pigeoncommands = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PigeoncommandsContext);
    } else {
        return this.getTypedRuleContext(PigeoncommandsContext,i);
    }
};

ScriptContext.prototype.arccommands = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArccommandsContext);
    } else {
        return this.getTypedRuleContext(ArccommandsContext,i);
    }
};

ScriptContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterScript(this);
	}
};

ScriptContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitScript(this);
	}
};

ScriptContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitScript(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.ScriptContext = ScriptContext;

PigeonParser.prototype.script = function() {

    var localctx = new ScriptContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, PigeonParser.RULE_script);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 38;
        		this.pigeoncommands();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 41; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 44; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 43;
            this.arccommands();
            this.state = 46; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PigeonParser.T__0) | (1 << PigeonParser.T__1) | (1 << PigeonParser.T__2) | (1 << PigeonParser.T__3) | (1 << PigeonParser.T__4) | (1 << PigeonParser.T__5) | (1 << PigeonParser.T__6) | (1 << PigeonParser.T__7) | (1 << PigeonParser.T__8) | (1 << PigeonParser.ID))) !== 0));
        this.state = 48;
        this.match(PigeonParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PigeoncommandsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_pigeoncommands;
    return this;
}

PigeoncommandsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PigeoncommandsContext.prototype.constructor = PigeoncommandsContext;

PigeoncommandsContext.prototype.promoter = function() {
    return this.getTypedRuleContext(PromoterContext,0);
};

PigeoncommandsContext.prototype.repressor = function() {
    return this.getTypedRuleContext(RepressorContext,0);
};

PigeoncommandsContext.prototype.codingseq = function() {
    return this.getTypedRuleContext(CodingseqContext,0);
};

PigeoncommandsContext.prototype.transcription = function() {
    return this.getTypedRuleContext(TranscriptionContext,0);
};

PigeoncommandsContext.prototype.stop = function() {
    return this.getTypedRuleContext(StopContext,0);
};

PigeoncommandsContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

PigeoncommandsContext.prototype.degredationtag = function() {
    return this.getTypedRuleContext(DegredationtagContext,0);
};

PigeoncommandsContext.prototype.righttriangle = function() {
    return this.getTypedRuleContext(RighttriangleContext,0);
};

PigeoncommandsContext.prototype.lefttriangle = function() {
    return this.getTypedRuleContext(LefttriangleContext,0);
};

PigeoncommandsContext.prototype.dash = function() {
    return this.getTypedRuleContext(DashContext,0);
};

PigeoncommandsContext.prototype.period = function() {
    return this.getTypedRuleContext(PeriodContext,0);
};

PigeoncommandsContext.prototype.bar = function() {
    return this.getTypedRuleContext(BarContext,0);
};

PigeoncommandsContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterPigeoncommands(this);
	}
};

PigeoncommandsContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitPigeoncommands(this);
	}
};

PigeoncommandsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitPigeoncommands(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.PigeoncommandsContext = PigeoncommandsContext;

PigeonParser.prototype.pigeoncommands = function() {

    var localctx = new PigeoncommandsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, PigeonParser.RULE_pigeoncommands);
    try {
        this.state = 62;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.promoter();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.repressor();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 52;
            this.codingseq();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 53;
            this.transcription();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 54;
            this.stop();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 55;
            this.operator();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 56;
            this.degredationtag();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 57;
            this.righttriangle();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 58;
            this.lefttriangle();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 59;
            this.dash();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 60;
            this.period();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 61;
            this.bar();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PromoterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_promoter;
    return this;
}

PromoterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PromoterContext.prototype.constructor = PromoterContext;

PromoterContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.WS);
    } else {
        return this.getToken(PigeonParser.WS, i);
    }
};


PromoterContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

PromoterContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

PromoterContext.prototype.ignorecolor = function() {
    return this.getTypedRuleContext(IgnorecolorContext,0);
};

PromoterContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.NL);
    } else {
        return this.getToken(PigeonParser.NL, i);
    }
};


PromoterContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterPromoter(this);
	}
};

PromoterContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitPromoter(this);
	}
};

PromoterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitPromoter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.PromoterContext = PromoterContext;

PigeonParser.prototype.promoter = function() {

    var localctx = new PromoterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, PigeonParser.RULE_promoter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__0) {
            this.state = 64;
            this.match(PigeonParser.T__0);
        }

        this.state = 67;
        this.match(PigeonParser.T__1);
        this.state = 69;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        if(la_===1) {
            this.state = 68;
            this.match(PigeonParser.WS);

        }
        this.state = 72;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PigeonParser.T__0) | (1 << PigeonParser.T__1) | (1 << PigeonParser.T__2) | (1 << PigeonParser.T__3) | (1 << PigeonParser.T__4) | (1 << PigeonParser.T__5) | (1 << PigeonParser.T__6) | (1 << PigeonParser.T__7) | (1 << PigeonParser.T__8) | (1 << PigeonParser.ID))) !== 0)) {
            this.state = 71;
            this.label();
        }

        this.state = 75;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        if(la_===1) {
            this.state = 74;
            this.match(PigeonParser.WS);

        }
        this.state = 78;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.INT) {
            this.state = 77;
            this.color();
        }

        this.state = 81;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.WS) {
            this.state = 80;
            this.match(PigeonParser.WS);
        }

        this.state = 84;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__12) {
            this.state = 83;
            this.ignorecolor();
        }

        this.state = 87; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 86;
            this.match(PigeonParser.NL);
            this.state = 89; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PigeonParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RepressorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_repressor;
    return this;
}

RepressorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepressorContext.prototype.constructor = RepressorContext;

RepressorContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.WS);
    } else {
        return this.getToken(PigeonParser.WS, i);
    }
};


RepressorContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

RepressorContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

RepressorContext.prototype.ignorecolor = function() {
    return this.getTypedRuleContext(IgnorecolorContext,0);
};

RepressorContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.NL);
    } else {
        return this.getToken(PigeonParser.NL, i);
    }
};


RepressorContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterRepressor(this);
	}
};

RepressorContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitRepressor(this);
	}
};

RepressorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitRepressor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.RepressorContext = RepressorContext;

PigeonParser.prototype.repressor = function() {

    var localctx = new RepressorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, PigeonParser.RULE_repressor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__0) {
            this.state = 91;
            this.match(PigeonParser.T__0);
        }

        this.state = 94;
        this.match(PigeonParser.T__2);
        this.state = 96;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        if(la_===1) {
            this.state = 95;
            this.match(PigeonParser.WS);

        }
        this.state = 99;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PigeonParser.T__0) | (1 << PigeonParser.T__1) | (1 << PigeonParser.T__2) | (1 << PigeonParser.T__3) | (1 << PigeonParser.T__4) | (1 << PigeonParser.T__5) | (1 << PigeonParser.T__6) | (1 << PigeonParser.T__7) | (1 << PigeonParser.T__8) | (1 << PigeonParser.ID))) !== 0)) {
            this.state = 98;
            this.label();
        }

        this.state = 102;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        if(la_===1) {
            this.state = 101;
            this.match(PigeonParser.WS);

        }
        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.INT) {
            this.state = 104;
            this.color();
        }

        this.state = 108;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.WS) {
            this.state = 107;
            this.match(PigeonParser.WS);
        }

        this.state = 111;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__12) {
            this.state = 110;
            this.ignorecolor();
        }

        this.state = 114; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 113;
            this.match(PigeonParser.NL);
            this.state = 116; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PigeonParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CodingseqContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_codingseq;
    return this;
}

CodingseqContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodingseqContext.prototype.constructor = CodingseqContext;

CodingseqContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.WS);
    } else {
        return this.getToken(PigeonParser.WS, i);
    }
};


CodingseqContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

CodingseqContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

CodingseqContext.prototype.ignorecolor = function() {
    return this.getTypedRuleContext(IgnorecolorContext,0);
};

CodingseqContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.NL);
    } else {
        return this.getToken(PigeonParser.NL, i);
    }
};


CodingseqContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterCodingseq(this);
	}
};

CodingseqContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitCodingseq(this);
	}
};

CodingseqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitCodingseq(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.CodingseqContext = CodingseqContext;

PigeonParser.prototype.codingseq = function() {

    var localctx = new CodingseqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, PigeonParser.RULE_codingseq);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__0) {
            this.state = 118;
            this.match(PigeonParser.T__0);
        }

        this.state = 121;
        this.match(PigeonParser.T__3);
        this.state = 123;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        if(la_===1) {
            this.state = 122;
            this.match(PigeonParser.WS);

        }
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PigeonParser.T__0) | (1 << PigeonParser.T__1) | (1 << PigeonParser.T__2) | (1 << PigeonParser.T__3) | (1 << PigeonParser.T__4) | (1 << PigeonParser.T__5) | (1 << PigeonParser.T__6) | (1 << PigeonParser.T__7) | (1 << PigeonParser.T__8) | (1 << PigeonParser.ID))) !== 0)) {
            this.state = 125;
            this.label();
        }

        this.state = 129;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        if(la_===1) {
            this.state = 128;
            this.match(PigeonParser.WS);

        }
        this.state = 132;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.INT) {
            this.state = 131;
            this.color();
        }

        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.WS) {
            this.state = 134;
            this.match(PigeonParser.WS);
        }

        this.state = 138;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__12) {
            this.state = 137;
            this.ignorecolor();
        }

        this.state = 141; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 140;
            this.match(PigeonParser.NL);
            this.state = 143; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PigeonParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TranscriptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_transcription;
    return this;
}

TranscriptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TranscriptionContext.prototype.constructor = TranscriptionContext;

TranscriptionContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.WS);
    } else {
        return this.getToken(PigeonParser.WS, i);
    }
};


TranscriptionContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

TranscriptionContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

TranscriptionContext.prototype.ignorecolor = function() {
    return this.getTypedRuleContext(IgnorecolorContext,0);
};

TranscriptionContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.NL);
    } else {
        return this.getToken(PigeonParser.NL, i);
    }
};


TranscriptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterTranscription(this);
	}
};

TranscriptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitTranscription(this);
	}
};

TranscriptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitTranscription(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.TranscriptionContext = TranscriptionContext;

PigeonParser.prototype.transcription = function() {

    var localctx = new TranscriptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, PigeonParser.RULE_transcription);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__0) {
            this.state = 145;
            this.match(PigeonParser.T__0);
        }

        this.state = 148;
        this.match(PigeonParser.T__4);
        this.state = 150;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        if(la_===1) {
            this.state = 149;
            this.match(PigeonParser.WS);

        }
        this.state = 153;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PigeonParser.T__0) | (1 << PigeonParser.T__1) | (1 << PigeonParser.T__2) | (1 << PigeonParser.T__3) | (1 << PigeonParser.T__4) | (1 << PigeonParser.T__5) | (1 << PigeonParser.T__6) | (1 << PigeonParser.T__7) | (1 << PigeonParser.T__8) | (1 << PigeonParser.ID))) !== 0)) {
            this.state = 152;
            this.label();
        }

        this.state = 156;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        if(la_===1) {
            this.state = 155;
            this.match(PigeonParser.WS);

        }
        this.state = 159;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.INT) {
            this.state = 158;
            this.color();
        }

        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.WS) {
            this.state = 161;
            this.match(PigeonParser.WS);
        }

        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__12) {
            this.state = 164;
            this.ignorecolor();
        }

        this.state = 168; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 167;
            this.match(PigeonParser.NL);
            this.state = 170; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PigeonParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_stop;
    return this;
}

StopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StopContext.prototype.constructor = StopContext;

StopContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.WS);
    } else {
        return this.getToken(PigeonParser.WS, i);
    }
};


StopContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

StopContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

StopContext.prototype.ignorecolor = function() {
    return this.getTypedRuleContext(IgnorecolorContext,0);
};

StopContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.NL);
    } else {
        return this.getToken(PigeonParser.NL, i);
    }
};


StopContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterStop(this);
	}
};

StopContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitStop(this);
	}
};

StopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitStop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.StopContext = StopContext;

PigeonParser.prototype.stop = function() {

    var localctx = new StopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, PigeonParser.RULE_stop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(PigeonParser.T__5);
        this.state = 174;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        if(la_===1) {
            this.state = 173;
            this.match(PigeonParser.WS);

        }
        this.state = 177;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PigeonParser.T__0) | (1 << PigeonParser.T__1) | (1 << PigeonParser.T__2) | (1 << PigeonParser.T__3) | (1 << PigeonParser.T__4) | (1 << PigeonParser.T__5) | (1 << PigeonParser.T__6) | (1 << PigeonParser.T__7) | (1 << PigeonParser.T__8) | (1 << PigeonParser.ID))) !== 0)) {
            this.state = 176;
            this.label();
        }

        this.state = 180;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        if(la_===1) {
            this.state = 179;
            this.match(PigeonParser.WS);

        }
        this.state = 183;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.INT) {
            this.state = 182;
            this.color();
        }

        this.state = 186;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.WS) {
            this.state = 185;
            this.match(PigeonParser.WS);
        }

        this.state = 189;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__12) {
            this.state = 188;
            this.ignorecolor();
        }

        this.state = 192; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 191;
            this.match(PigeonParser.NL);
            this.state = 194; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PigeonParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;

OperatorContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.WS);
    } else {
        return this.getToken(PigeonParser.WS, i);
    }
};


OperatorContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

OperatorContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

OperatorContext.prototype.ignorecolor = function() {
    return this.getTypedRuleContext(IgnorecolorContext,0);
};

OperatorContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.NL);
    } else {
        return this.getToken(PigeonParser.NL, i);
    }
};


OperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterOperator(this);
	}
};

OperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitOperator(this);
	}
};

OperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.OperatorContext = OperatorContext;

PigeonParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, PigeonParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this.match(PigeonParser.T__6);
        this.state = 198;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
        if(la_===1) {
            this.state = 197;
            this.match(PigeonParser.WS);

        }
        this.state = 201;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PigeonParser.T__0) | (1 << PigeonParser.T__1) | (1 << PigeonParser.T__2) | (1 << PigeonParser.T__3) | (1 << PigeonParser.T__4) | (1 << PigeonParser.T__5) | (1 << PigeonParser.T__6) | (1 << PigeonParser.T__7) | (1 << PigeonParser.T__8) | (1 << PigeonParser.ID))) !== 0)) {
            this.state = 200;
            this.label();
        }

        this.state = 204;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
        if(la_===1) {
            this.state = 203;
            this.match(PigeonParser.WS);

        }
        this.state = 207;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.INT) {
            this.state = 206;
            this.color();
        }

        this.state = 210;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.WS) {
            this.state = 209;
            this.match(PigeonParser.WS);
        }

        this.state = 213;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__12) {
            this.state = 212;
            this.ignorecolor();
        }

        this.state = 216; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 215;
            this.match(PigeonParser.NL);
            this.state = 218; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PigeonParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DegredationtagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_degredationtag;
    return this;
}

DegredationtagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DegredationtagContext.prototype.constructor = DegredationtagContext;

DegredationtagContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.WS);
    } else {
        return this.getToken(PigeonParser.WS, i);
    }
};


DegredationtagContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

DegredationtagContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

DegredationtagContext.prototype.ignorecolor = function() {
    return this.getTypedRuleContext(IgnorecolorContext,0);
};

DegredationtagContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.NL);
    } else {
        return this.getToken(PigeonParser.NL, i);
    }
};


DegredationtagContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterDegredationtag(this);
	}
};

DegredationtagContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitDegredationtag(this);
	}
};

DegredationtagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitDegredationtag(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.DegredationtagContext = DegredationtagContext;

PigeonParser.prototype.degredationtag = function() {

    var localctx = new DegredationtagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, PigeonParser.RULE_degredationtag);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.match(PigeonParser.T__7);
        this.state = 222;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
        if(la_===1) {
            this.state = 221;
            this.match(PigeonParser.WS);

        }
        this.state = 225;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PigeonParser.T__0) | (1 << PigeonParser.T__1) | (1 << PigeonParser.T__2) | (1 << PigeonParser.T__3) | (1 << PigeonParser.T__4) | (1 << PigeonParser.T__5) | (1 << PigeonParser.T__6) | (1 << PigeonParser.T__7) | (1 << PigeonParser.T__8) | (1 << PigeonParser.ID))) !== 0)) {
            this.state = 224;
            this.label();
        }

        this.state = 228;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
        if(la_===1) {
            this.state = 227;
            this.match(PigeonParser.WS);

        }
        this.state = 231;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.INT) {
            this.state = 230;
            this.color();
        }

        this.state = 234;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.WS) {
            this.state = 233;
            this.match(PigeonParser.WS);
        }

        this.state = 237;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__12) {
            this.state = 236;
            this.ignorecolor();
        }

        this.state = 240; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 239;
            this.match(PigeonParser.NL);
            this.state = 242; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PigeonParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RighttriangleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_righttriangle;
    return this;
}

RighttriangleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RighttriangleContext.prototype.constructor = RighttriangleContext;

RighttriangleContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.WS);
    } else {
        return this.getToken(PigeonParser.WS, i);
    }
};


RighttriangleContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

RighttriangleContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

RighttriangleContext.prototype.ignorecolor = function() {
    return this.getTypedRuleContext(IgnorecolorContext,0);
};

RighttriangleContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.NL);
    } else {
        return this.getToken(PigeonParser.NL, i);
    }
};


RighttriangleContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterRighttriangle(this);
	}
};

RighttriangleContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitRighttriangle(this);
	}
};

RighttriangleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitRighttriangle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.RighttriangleContext = RighttriangleContext;

PigeonParser.prototype.righttriangle = function() {

    var localctx = new RighttriangleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, PigeonParser.RULE_righttriangle);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        this.match(PigeonParser.T__8);
        this.state = 246;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
        if(la_===1) {
            this.state = 245;
            this.match(PigeonParser.WS);

        }
        this.state = 249;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PigeonParser.T__0) | (1 << PigeonParser.T__1) | (1 << PigeonParser.T__2) | (1 << PigeonParser.T__3) | (1 << PigeonParser.T__4) | (1 << PigeonParser.T__5) | (1 << PigeonParser.T__6) | (1 << PigeonParser.T__7) | (1 << PigeonParser.T__8) | (1 << PigeonParser.ID))) !== 0)) {
            this.state = 248;
            this.label();
        }

        this.state = 252;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
        if(la_===1) {
            this.state = 251;
            this.match(PigeonParser.WS);

        }
        this.state = 255;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.INT) {
            this.state = 254;
            this.color();
        }

        this.state = 258;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.WS) {
            this.state = 257;
            this.match(PigeonParser.WS);
        }

        this.state = 261;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__12) {
            this.state = 260;
            this.ignorecolor();
        }

        this.state = 264; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 263;
            this.match(PigeonParser.NL);
            this.state = 266; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PigeonParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LefttriangleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_lefttriangle;
    return this;
}

LefttriangleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LefttriangleContext.prototype.constructor = LefttriangleContext;

LefttriangleContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.WS);
    } else {
        return this.getToken(PigeonParser.WS, i);
    }
};


LefttriangleContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

LefttriangleContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

LefttriangleContext.prototype.ignorecolor = function() {
    return this.getTypedRuleContext(IgnorecolorContext,0);
};

LefttriangleContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.NL);
    } else {
        return this.getToken(PigeonParser.NL, i);
    }
};


LefttriangleContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterLefttriangle(this);
	}
};

LefttriangleContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitLefttriangle(this);
	}
};

LefttriangleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitLefttriangle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.LefttriangleContext = LefttriangleContext;

PigeonParser.prototype.lefttriangle = function() {

    var localctx = new LefttriangleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, PigeonParser.RULE_lefttriangle);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        this.match(PigeonParser.T__0);
        this.state = 270;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
        if(la_===1) {
            this.state = 269;
            this.match(PigeonParser.WS);

        }
        this.state = 273;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PigeonParser.T__0) | (1 << PigeonParser.T__1) | (1 << PigeonParser.T__2) | (1 << PigeonParser.T__3) | (1 << PigeonParser.T__4) | (1 << PigeonParser.T__5) | (1 << PigeonParser.T__6) | (1 << PigeonParser.T__7) | (1 << PigeonParser.T__8) | (1 << PigeonParser.ID))) !== 0)) {
            this.state = 272;
            this.label();
        }

        this.state = 276;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,65,this._ctx);
        if(la_===1) {
            this.state = 275;
            this.match(PigeonParser.WS);

        }
        this.state = 279;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.INT) {
            this.state = 278;
            this.color();
        }

        this.state = 282;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.WS) {
            this.state = 281;
            this.match(PigeonParser.WS);
        }

        this.state = 285;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__12) {
            this.state = 284;
            this.ignorecolor();
        }

        this.state = 288; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 287;
            this.match(PigeonParser.NL);
            this.state = 290; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PigeonParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DashContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_dash;
    return this;
}

DashContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DashContext.prototype.constructor = DashContext;

DashContext.prototype.NL = function() {
    return this.getToken(PigeonParser.NL, 0);
};

DashContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.WS);
    } else {
        return this.getToken(PigeonParser.WS, i);
    }
};


DashContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

DashContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

DashContext.prototype.ignorecolor = function() {
    return this.getTypedRuleContext(IgnorecolorContext,0);
};

DashContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterDash(this);
	}
};

DashContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitDash(this);
	}
};

DashContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitDash(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.DashContext = DashContext;

PigeonParser.prototype.dash = function() {

    var localctx = new DashContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, PigeonParser.RULE_dash);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        this.match(PigeonParser.T__9);
        this.state = 294;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,70,this._ctx);
        if(la_===1) {
            this.state = 293;
            this.match(PigeonParser.WS);

        }
        this.state = 297;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PigeonParser.T__0) | (1 << PigeonParser.T__1) | (1 << PigeonParser.T__2) | (1 << PigeonParser.T__3) | (1 << PigeonParser.T__4) | (1 << PigeonParser.T__5) | (1 << PigeonParser.T__6) | (1 << PigeonParser.T__7) | (1 << PigeonParser.T__8) | (1 << PigeonParser.ID))) !== 0)) {
            this.state = 296;
            this.label();
        }

        this.state = 300;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,72,this._ctx);
        if(la_===1) {
            this.state = 299;
            this.match(PigeonParser.WS);

        }
        this.state = 303;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.INT) {
            this.state = 302;
            this.color();
        }

        this.state = 306;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.WS) {
            this.state = 305;
            this.match(PigeonParser.WS);
        }

        this.state = 309;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__12) {
            this.state = 308;
            this.ignorecolor();
        }

        this.state = 311;
        this.match(PigeonParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PeriodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_period;
    return this;
}

PeriodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PeriodContext.prototype.constructor = PeriodContext;

PeriodContext.prototype.NL = function() {
    return this.getToken(PigeonParser.NL, 0);
};

PeriodContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.WS);
    } else {
        return this.getToken(PigeonParser.WS, i);
    }
};


PeriodContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

PeriodContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

PeriodContext.prototype.ignorecolor = function() {
    return this.getTypedRuleContext(IgnorecolorContext,0);
};

PeriodContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterPeriod(this);
	}
};

PeriodContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitPeriod(this);
	}
};

PeriodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitPeriod(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.PeriodContext = PeriodContext;

PigeonParser.prototype.period = function() {

    var localctx = new PeriodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, PigeonParser.RULE_period);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 313;
        this.match(PigeonParser.T__10);
        this.state = 315;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,76,this._ctx);
        if(la_===1) {
            this.state = 314;
            this.match(PigeonParser.WS);

        }
        this.state = 318;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PigeonParser.T__0) | (1 << PigeonParser.T__1) | (1 << PigeonParser.T__2) | (1 << PigeonParser.T__3) | (1 << PigeonParser.T__4) | (1 << PigeonParser.T__5) | (1 << PigeonParser.T__6) | (1 << PigeonParser.T__7) | (1 << PigeonParser.T__8) | (1 << PigeonParser.ID))) !== 0)) {
            this.state = 317;
            this.label();
        }

        this.state = 321;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,78,this._ctx);
        if(la_===1) {
            this.state = 320;
            this.match(PigeonParser.WS);

        }
        this.state = 324;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.INT) {
            this.state = 323;
            this.color();
        }

        this.state = 327;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.WS) {
            this.state = 326;
            this.match(PigeonParser.WS);
        }

        this.state = 330;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__12) {
            this.state = 329;
            this.ignorecolor();
        }

        this.state = 332;
        this.match(PigeonParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_bar;
    return this;
}

BarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BarContext.prototype.constructor = BarContext;

BarContext.prototype.NL = function() {
    return this.getToken(PigeonParser.NL, 0);
};

BarContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.WS);
    } else {
        return this.getToken(PigeonParser.WS, i);
    }
};


BarContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

BarContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

BarContext.prototype.ignorecolor = function() {
    return this.getTypedRuleContext(IgnorecolorContext,0);
};

BarContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterBar(this);
	}
};

BarContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitBar(this);
	}
};

BarContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitBar(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.BarContext = BarContext;

PigeonParser.prototype.bar = function() {

    var localctx = new BarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, PigeonParser.RULE_bar);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 334;
        this.match(PigeonParser.T__11);
        this.state = 336;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,82,this._ctx);
        if(la_===1) {
            this.state = 335;
            this.match(PigeonParser.WS);

        }
        this.state = 339;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PigeonParser.T__0) | (1 << PigeonParser.T__1) | (1 << PigeonParser.T__2) | (1 << PigeonParser.T__3) | (1 << PigeonParser.T__4) | (1 << PigeonParser.T__5) | (1 << PigeonParser.T__6) | (1 << PigeonParser.T__7) | (1 << PigeonParser.T__8) | (1 << PigeonParser.ID))) !== 0)) {
            this.state = 338;
            this.label();
        }

        this.state = 342;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,84,this._ctx);
        if(la_===1) {
            this.state = 341;
            this.match(PigeonParser.WS);

        }
        this.state = 345;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.INT) {
            this.state = 344;
            this.color();
        }

        this.state = 348;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.WS) {
            this.state = 347;
            this.match(PigeonParser.WS);
        }

        this.state = 351;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PigeonParser.T__12) {
            this.state = 350;
            this.ignorecolor();
        }

        this.state = 353;
        this.match(PigeonParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.ID = function() {
    return this.getToken(PigeonParser.ID, 0);
};

LabelContext.prototype.INT = function() {
    return this.getToken(PigeonParser.INT, 0);
};

LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitLabel(this);
	}
};

LabelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitLabel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.LabelContext = LabelContext;

PigeonParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, PigeonParser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 394;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,97,this._ctx);
        switch(la_) {
        case 1:
            this.state = 355;
            this.match(PigeonParser.ID);
            break;

        case 2:
            this.state = 356;
            this.match(PigeonParser.ID);
            this.state = 357;
            this.match(PigeonParser.INT);
            break;

        case 3:
            this.state = 358;
            this.match(PigeonParser.T__1);
            this.state = 360;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,88,this._ctx);
            if(la_===1) {
                this.state = 359;
                this.match(PigeonParser.INT);

            }
            break;

        case 4:
            this.state = 362;
            this.match(PigeonParser.T__2);
            this.state = 364;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,89,this._ctx);
            if(la_===1) {
                this.state = 363;
                this.match(PigeonParser.INT);

            }
            break;

        case 5:
            this.state = 366;
            this.match(PigeonParser.T__3);
            this.state = 368;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,90,this._ctx);
            if(la_===1) {
                this.state = 367;
                this.match(PigeonParser.INT);

            }
            break;

        case 6:
            this.state = 370;
            this.match(PigeonParser.T__4);
            this.state = 372;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,91,this._ctx);
            if(la_===1) {
                this.state = 371;
                this.match(PigeonParser.INT);

            }
            break;

        case 7:
            this.state = 374;
            this.match(PigeonParser.T__5);
            this.state = 376;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,92,this._ctx);
            if(la_===1) {
                this.state = 375;
                this.match(PigeonParser.INT);

            }
            break;

        case 8:
            this.state = 378;
            this.match(PigeonParser.T__6);
            this.state = 380;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,93,this._ctx);
            if(la_===1) {
                this.state = 379;
                this.match(PigeonParser.INT);

            }
            break;

        case 9:
            this.state = 382;
            this.match(PigeonParser.T__7);
            this.state = 384;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,94,this._ctx);
            if(la_===1) {
                this.state = 383;
                this.match(PigeonParser.INT);

            }
            break;

        case 10:
            this.state = 386;
            this.match(PigeonParser.T__8);
            this.state = 388;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,95,this._ctx);
            if(la_===1) {
                this.state = 387;
                this.match(PigeonParser.INT);

            }
            break;

        case 11:
            this.state = 390;
            this.match(PigeonParser.T__0);
            this.state = 392;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,96,this._ctx);
            if(la_===1) {
                this.state = 391;
                this.match(PigeonParser.INT);

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ColorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_color;
    return this;
}

ColorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColorContext.prototype.constructor = ColorContext;

ColorContext.prototype.INT = function() {
    return this.getToken(PigeonParser.INT, 0);
};

ColorContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterColor(this);
	}
};

ColorContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitColor(this);
	}
};

ColorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitColor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.ColorContext = ColorContext;

PigeonParser.prototype.color = function() {

    var localctx = new ColorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, PigeonParser.RULE_color);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 396;
        this.match(PigeonParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IgnorecolorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_ignorecolor;
    return this;
}

IgnorecolorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IgnorecolorContext.prototype.constructor = IgnorecolorContext;


IgnorecolorContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterIgnorecolor(this);
	}
};

IgnorecolorContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitIgnorecolor(this);
	}
};

IgnorecolorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitIgnorecolor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.IgnorecolorContext = IgnorecolorContext;

PigeonParser.prototype.ignorecolor = function() {

    var localctx = new IgnorecolorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, PigeonParser.RULE_ignorecolor);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 398;
        this.match(PigeonParser.T__12);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArccommandsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_arccommands;
    return this;
}

ArccommandsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArccommandsContext.prototype.constructor = ArccommandsContext;

ArccommandsContext.prototype.label = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LabelContext);
    } else {
        return this.getTypedRuleContext(LabelContext,i);
    }
};

ArccommandsContext.prototype.arc = function() {
    return this.getTypedRuleContext(ArcContext,0);
};

ArccommandsContext.prototype.NL = function() {
    return this.getToken(PigeonParser.NL, 0);
};

ArccommandsContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PigeonParser.WS);
    } else {
        return this.getToken(PigeonParser.WS, i);
    }
};


ArccommandsContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterArccommands(this);
	}
};

ArccommandsContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitArccommands(this);
	}
};

ArccommandsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitArccommands(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.ArccommandsContext = ArccommandsContext;

PigeonParser.prototype.arccommands = function() {

    var localctx = new ArccommandsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, PigeonParser.RULE_arccommands);
    var _la = 0; // Token type
    try {
        this.state = 424;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,102,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 400;
            this.label();
            this.state = 402;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PigeonParser.WS) {
                this.state = 401;
                this.match(PigeonParser.WS);
            }

            this.state = 404;
            this.arc();
            this.state = 406;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PigeonParser.WS) {
                this.state = 405;
                this.match(PigeonParser.WS);
            }

            this.state = 408;
            this.label();
            this.state = 409;
            this.match(PigeonParser.NL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 411;
            this.label();
            this.state = 413;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PigeonParser.WS) {
                this.state = 412;
                this.match(PigeonParser.WS);
            }

            this.state = 415;
            this.arc();
            this.state = 417;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PigeonParser.WS) {
                this.state = 416;
                this.match(PigeonParser.WS);
            }

            this.state = 419;
            this.label();
            this.state = 420;
            this.match(PigeonParser.T__9);
            this.state = 421;
            this.label();
            this.state = 422;
            this.match(PigeonParser.NL);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArcContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PigeonParser.RULE_arc;
    return this;
}

ArcContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArcContext.prototype.constructor = ArcContext;


ArcContext.prototype.enterRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.enterArc(this);
	}
};

ArcContext.prototype.exitRule = function(listener) {
    if(listener instanceof PigeonListener ) {
        listener.exitArc(this);
	}
};

ArcContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PigeonVisitor ) {
        return visitor.visitArc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PigeonParser.ArcContext = ArcContext;

PigeonParser.prototype.arc = function() {

    var localctx = new ArcContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, PigeonParser.RULE_arc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 426;
        _la = this._input.LA(1);
        if(!(_la===PigeonParser.T__13 || _la===PigeonParser.T__14)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.PigeonParser = PigeonParser;
