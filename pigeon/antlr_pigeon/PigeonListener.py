# Generated from /Users/krishna/Documents/GitHub/pidgeon/Pigeon.g4 by ANTLR 4.8
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .PigeonParser import PigeonParser
else:
    from PigeonParser import PigeonParser

# This class defines a complete listener for a parse tree produced by PigeonParser.
class PigeonListener(ParseTreeListener):

    # Enter a parse tree produced by PigeonParser#script.
    def enterScript(self, ctx:PigeonParser.ScriptContext):
        pass

    # Exit a parse tree produced by PigeonParser#script.
    def exitScript(self, ctx:PigeonParser.ScriptContext):
        pass


    # Enter a parse tree produced by PigeonParser#pigeoncommands.
    def enterPigeoncommands(self, ctx:PigeonParser.PigeoncommandsContext):
        pass

    # Exit a parse tree produced by PigeonParser#pigeoncommands.
    def exitPigeoncommands(self, ctx:PigeonParser.PigeoncommandsContext):
        pass


    # Enter a parse tree produced by PigeonParser#promoter.
    def enterPromoter(self, ctx:PigeonParser.PromoterContext):
        pass

    # Exit a parse tree produced by PigeonParser#promoter.
    def exitPromoter(self, ctx:PigeonParser.PromoterContext):
        pass


    # Enter a parse tree produced by PigeonParser#repressor.
    def enterRepressor(self, ctx:PigeonParser.RepressorContext):
        pass

    # Exit a parse tree produced by PigeonParser#repressor.
    def exitRepressor(self, ctx:PigeonParser.RepressorContext):
        pass


    # Enter a parse tree produced by PigeonParser#codingseq.
    def enterCodingseq(self, ctx:PigeonParser.CodingseqContext):
        pass

    # Exit a parse tree produced by PigeonParser#codingseq.
    def exitCodingseq(self, ctx:PigeonParser.CodingseqContext):
        pass


    # Enter a parse tree produced by PigeonParser#transcription.
    def enterTranscription(self, ctx:PigeonParser.TranscriptionContext):
        pass

    # Exit a parse tree produced by PigeonParser#transcription.
    def exitTranscription(self, ctx:PigeonParser.TranscriptionContext):
        pass


    # Enter a parse tree produced by PigeonParser#gene.
    def enterGene(self, ctx:PigeonParser.GeneContext):
        pass

    # Exit a parse tree produced by PigeonParser#gene.
    def exitGene(self, ctx:PigeonParser.GeneContext):
        pass


    # Enter a parse tree produced by PigeonParser#fseq.
    def enterFseq(self, ctx:PigeonParser.FseqContext):
        pass

    # Exit a parse tree produced by PigeonParser#fseq.
    def exitFseq(self, ctx:PigeonParser.FseqContext):
        pass


    # Enter a parse tree produced by PigeonParser#stop.
    def enterStop(self, ctx:PigeonParser.StopContext):
        pass

    # Exit a parse tree produced by PigeonParser#stop.
    def exitStop(self, ctx:PigeonParser.StopContext):
        pass


    # Enter a parse tree produced by PigeonParser#operator.
    def enterOperator(self, ctx:PigeonParser.OperatorContext):
        pass

    # Exit a parse tree produced by PigeonParser#operator.
    def exitOperator(self, ctx:PigeonParser.OperatorContext):
        pass


    # Enter a parse tree produced by PigeonParser#degredationtag.
    def enterDegredationtag(self, ctx:PigeonParser.DegredationtagContext):
        pass

    # Exit a parse tree produced by PigeonParser#degredationtag.
    def exitDegredationtag(self, ctx:PigeonParser.DegredationtagContext):
        pass


    # Enter a parse tree produced by PigeonParser#righttriangle.
    def enterRighttriangle(self, ctx:PigeonParser.RighttriangleContext):
        pass

    # Exit a parse tree produced by PigeonParser#righttriangle.
    def exitRighttriangle(self, ctx:PigeonParser.RighttriangleContext):
        pass


    # Enter a parse tree produced by PigeonParser#lefttriangle.
    def enterLefttriangle(self, ctx:PigeonParser.LefttriangleContext):
        pass

    # Exit a parse tree produced by PigeonParser#lefttriangle.
    def exitLefttriangle(self, ctx:PigeonParser.LefttriangleContext):
        pass


    # Enter a parse tree produced by PigeonParser#bar.
    def enterBar(self, ctx:PigeonParser.BarContext):
        pass

    # Exit a parse tree produced by PigeonParser#bar.
    def exitBar(self, ctx:PigeonParser.BarContext):
        pass


    # Enter a parse tree produced by PigeonParser#three.
    def enterThree(self, ctx:PigeonParser.ThreeContext):
        pass

    # Exit a parse tree produced by PigeonParser#three.
    def exitThree(self, ctx:PigeonParser.ThreeContext):
        pass


    # Enter a parse tree produced by PigeonParser#five.
    def enterFive(self, ctx:PigeonParser.FiveContext):
        pass

    # Exit a parse tree produced by PigeonParser#five.
    def exitFive(self, ctx:PigeonParser.FiveContext):
        pass


    # Enter a parse tree produced by PigeonParser#zring.
    def enterZring(self, ctx:PigeonParser.ZringContext):
        pass

    # Exit a parse tree produced by PigeonParser#zring.
    def exitZring(self, ctx:PigeonParser.ZringContext):
        pass


    # Enter a parse tree produced by PigeonParser#xbar.
    def enterXbar(self, ctx:PigeonParser.XbarContext):
        pass

    # Exit a parse tree produced by PigeonParser#xbar.
    def exitXbar(self, ctx:PigeonParser.XbarContext):
        pass


    # Enter a parse tree produced by PigeonParser#box.
    def enterBox(self, ctx:PigeonParser.BoxContext):
        pass

    # Exit a parse tree produced by PigeonParser#box.
    def exitBox(self, ctx:PigeonParser.BoxContext):
        pass


    # Enter a parse tree produced by PigeonParser#scar.
    def enterScar(self, ctx:PigeonParser.ScarContext):
        pass

    # Exit a parse tree produced by PigeonParser#scar.
    def exitScar(self, ctx:PigeonParser.ScarContext):
        pass


    # Enter a parse tree produced by PigeonParser#vector.
    def enterVector(self, ctx:PigeonParser.VectorContext):
        pass

    # Exit a parse tree produced by PigeonParser#vector.
    def exitVector(self, ctx:PigeonParser.VectorContext):
        pass


    # Enter a parse tree produced by PigeonParser#invert.
    def enterInvert(self, ctx:PigeonParser.InvertContext):
        pass

    # Exit a parse tree produced by PigeonParser#invert.
    def exitInvert(self, ctx:PigeonParser.InvertContext):
        pass


    # Enter a parse tree produced by PigeonParser#color.
    def enterColor(self, ctx:PigeonParser.ColorContext):
        pass

    # Exit a parse tree produced by PigeonParser#color.
    def exitColor(self, ctx:PigeonParser.ColorContext):
        pass


    # Enter a parse tree produced by PigeonParser#label.
    def enterLabel(self, ctx:PigeonParser.LabelContext):
        pass

    # Exit a parse tree produced by PigeonParser#label.
    def exitLabel(self, ctx:PigeonParser.LabelContext):
        pass


    # Enter a parse tree produced by PigeonParser#ignorecolor.
    def enterIgnorecolor(self, ctx:PigeonParser.IgnorecolorContext):
        pass

    # Exit a parse tree produced by PigeonParser#ignorecolor.
    def exitIgnorecolor(self, ctx:PigeonParser.IgnorecolorContext):
        pass


    # Enter a parse tree produced by PigeonParser#commands.
    def enterCommands(self, ctx:PigeonParser.CommandsContext):
        pass

    # Exit a parse tree produced by PigeonParser#commands.
    def exitCommands(self, ctx:PigeonParser.CommandsContext):
        pass


    # Enter a parse tree produced by PigeonParser#arccommands.
    def enterArccommands(self, ctx:PigeonParser.ArccommandsContext):
        pass

    # Exit a parse tree produced by PigeonParser#arccommands.
    def exitArccommands(self, ctx:PigeonParser.ArccommandsContext):
        pass


    # Enter a parse tree produced by PigeonParser#rep.
    def enterRep(self, ctx:PigeonParser.RepContext):
        pass

    # Exit a parse tree produced by PigeonParser#rep.
    def exitRep(self, ctx:PigeonParser.RepContext):
        pass


    # Enter a parse tree produced by PigeonParser#rep2.
    def enterRep2(self, ctx:PigeonParser.Rep2Context):
        pass

    # Exit a parse tree produced by PigeonParser#rep2.
    def exitRep2(self, ctx:PigeonParser.Rep2Context):
        pass


    # Enter a parse tree produced by PigeonParser#ind.
    def enterInd(self, ctx:PigeonParser.IndContext):
        pass

    # Exit a parse tree produced by PigeonParser#ind.
    def exitInd(self, ctx:PigeonParser.IndContext):
        pass



del PigeonParser