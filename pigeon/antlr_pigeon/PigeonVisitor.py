# Generated from /Users/krishna/Documents/GitHub/pidgeon/Pigeon.g4 by ANTLR 4.8
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .PigeonParser import PigeonParser
else:
    from PigeonParser import PigeonParser

# This class defines a complete generic visitor for a parse tree produced by PigeonParser.

class PigeonVisitor(ParseTreeVisitor):

    # Visit a parse tree produced by PigeonParser#script.
    def visitScript(self, ctx:PigeonParser.ScriptContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#pigeoncommands.
    def visitPigeoncommands(self, ctx:PigeonParser.PigeoncommandsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#promoter.
    def visitPromoter(self, ctx:PigeonParser.PromoterContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#repressor.
    def visitRepressor(self, ctx:PigeonParser.RepressorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#codingseq.
    def visitCodingseq(self, ctx:PigeonParser.CodingseqContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#transcription.
    def visitTranscription(self, ctx:PigeonParser.TranscriptionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#gene.
    def visitGene(self, ctx:PigeonParser.GeneContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#fseq.
    def visitFseq(self, ctx:PigeonParser.FseqContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#stop.
    def visitStop(self, ctx:PigeonParser.StopContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#operator.
    def visitOperator(self, ctx:PigeonParser.OperatorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#degredationtag.
    def visitDegredationtag(self, ctx:PigeonParser.DegredationtagContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#righttriangle.
    def visitRighttriangle(self, ctx:PigeonParser.RighttriangleContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#lefttriangle.
    def visitLefttriangle(self, ctx:PigeonParser.LefttriangleContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#bar.
    def visitBar(self, ctx:PigeonParser.BarContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#three.
    def visitThree(self, ctx:PigeonParser.ThreeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#five.
    def visitFive(self, ctx:PigeonParser.FiveContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#zring.
    def visitZring(self, ctx:PigeonParser.ZringContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#xbar.
    def visitXbar(self, ctx:PigeonParser.XbarContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#box.
    def visitBox(self, ctx:PigeonParser.BoxContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#scar.
    def visitScar(self, ctx:PigeonParser.ScarContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#vector.
    def visitVector(self, ctx:PigeonParser.VectorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#invert.
    def visitInvert(self, ctx:PigeonParser.InvertContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#color.
    def visitColor(self, ctx:PigeonParser.ColorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#label.
    def visitLabel(self, ctx:PigeonParser.LabelContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#ignorecolor.
    def visitIgnorecolor(self, ctx:PigeonParser.IgnorecolorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#commands.
    def visitCommands(self, ctx:PigeonParser.CommandsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#arccommands.
    def visitArccommands(self, ctx:PigeonParser.ArccommandsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#rep.
    def visitRep(self, ctx:PigeonParser.RepContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#rep2.
    def visitRep2(self, ctx:PigeonParser.Rep2Context):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by PigeonParser#ind.
    def visitInd(self, ctx:PigeonParser.IndContext):
        return self.visitChildren(ctx)



del PigeonParser