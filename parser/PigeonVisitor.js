// Generated from /Users/benlaskaris/Desktop/pigeon/Pigeon.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by PigeonParser.

function PigeonVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

PigeonVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
PigeonVisitor.prototype.constructor = PigeonVisitor;

// Visit a parse tree produced by PigeonParser#script.
PigeonVisitor.prototype.visitScript = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#pigeoncommands.
PigeonVisitor.prototype.visitPigeoncommands = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#promoter.
PigeonVisitor.prototype.visitPromoter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#repressor.
PigeonVisitor.prototype.visitRepressor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#codingseq.
PigeonVisitor.prototype.visitCodingseq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#transcription.
PigeonVisitor.prototype.visitTranscription = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#stop.
PigeonVisitor.prototype.visitStop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#operator.
PigeonVisitor.prototype.visitOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#degredationtag.
PigeonVisitor.prototype.visitDegredationtag = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#righttriangle.
PigeonVisitor.prototype.visitRighttriangle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#lefttriangle.
PigeonVisitor.prototype.visitLefttriangle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#dash.
PigeonVisitor.prototype.visitDash = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#period.
PigeonVisitor.prototype.visitPeriod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#bar.
PigeonVisitor.prototype.visitBar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#label.
PigeonVisitor.prototype.visitLabel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#color.
PigeonVisitor.prototype.visitColor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#ignorecolor.
PigeonVisitor.prototype.visitIgnorecolor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#arccommands.
PigeonVisitor.prototype.visitArccommands = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PigeonParser#arc.
PigeonVisitor.prototype.visitArc = function(ctx) {
  return this.visitChildren(ctx);
};



exports.PigeonVisitor = PigeonVisitor;