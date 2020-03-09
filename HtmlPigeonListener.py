import sys
from antlr4 import *
from PigeonParser import PigeonParser
from PigeonListener import PigeonListener


# HTML Pigeon Listener could take as input some type of design list
# that can help specify layout
class HtmlPigeonListener(PigeonListener):

        design = []
        cur_part = {}
        type = ''
        name = ''
        fwd = ''
        color = ''
        col_map = {}

        def __init__(self):
            self.col_map['1'] = (1.0, 1.0, 1.0)  # black
            self.col_map['2'] = (1.0, 0.0, 0.0)  # red
            self.col_map['3'] = (0.0, 1.0, 0.0)  # green
            self.col_map['4'] = (0.0, 0.0, 1.0)  # blue
            self.col_map['5'] = (1.0, 1.0, 0.0)  # some color


            pass

        def getDesignList(self):
            return self.design


        # Enter a parse tree produced by PigeonParser#script.
        def enterScript(self, ctx:PigeonParser.ScriptContext):
            print('enterScript')
            pass

        # Exit a parse tree produced by PigeonParser#script.
        def exitScript(self, ctx: PigeonParser.ScriptContext):
            pass


        # Enter a parse tree produced by PigeonParser#pigeoncommands.
        def enterPigeoncommands(self, ctx:PigeonParser.PigeoncommandsContext):
            print('enterPigeoncommands')

            pass

        # Exit a parse tree produced by PigeonParser#pigeoncommands.
        def exitPigeoncommands(self, ctx:PigeonParser.PigeoncommandsContext):
            print('exitPigeoncommands')
            pass

        # Enter a parse tree produced by PigeonParser#promoter.
        def enterPromoter(self, ctx:PigeonParser.PromoterContext):
            self.type = 'Promoter'
            print('enterPromoter')
            pass

        # Exit a parse tree produced by PigeonParser#promoter.
        def exitPromoter(self, ctx:PigeonParser.PromoterContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': True, 'opts':{'color':self.color, 'label': self.name, 'label_y_offset':-8}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = ''
            self.color = ''
            print('exitPromoter')

            pass

        # Enter a parse tree produced by PigeonParser#repressor.
        def enterRepressor(self, ctx:PigeonParser.RepressorContext):
            self.type = 'RBS'
            print('enterRepressor')

            pass

        # Exit a parse tree produced by PigeonParser#repressor.
        def exitRepressor(self, ctx:PigeonParser.RepressorContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': True, 'opts':{'color':self.color, 'label': self.name, 'label_y_offset':-8}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = ''
            self.color = ''
            print('exitRepressor')

            pass

        # Enter a parse tree produced by PigeonParser#codingseq.
        def enterCodingseq(self, ctx:PigeonParser.CodingseqContext):
            self.type = 'CDS'
            print('enterCodingseq')

            pass

        # Exit a parse tree produced by PigeonParser#codingseq.
        def exitCodingseq(self, ctx: PigeonParser.CodingseqContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': True, 'opts':{'color':self.color, 'label': self.name, 'label_y_offset':-8}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = ''
            self.color = ''
            print('exitCodingseq')

            pass

        # Enter a parse tree produced by PigeonParser#transcription.
        def enterTranscription(self, ctx:PigeonParser.TranscriptionContext):
            print('enterTranscription')

            pass

        # Exit a parse tree produced by PigeonParser#transcription.
        def exitTranscription(self, ctx:PigeonParser.TranscriptionContext):
            print('exitTranscription')

            pass

        # Enter a parse tree produced by PigeonParser#stop.
        def enterStop(self, ctx:PigeonParser.StopContext):
            print('enterStop')

            pass

        # Exit a parse tree produced by PigeonParser#stop.
        def exitStop(self, ctx:PigeonParser.StopContext):
            print('exitStop')

            pass

        # Enter a parse tree produced by PigeonParser#operator.
        def enterOperator(self, ctx:PigeonParser.OperatorContext):
            print('enterOperator')

            pass

        # Exit a parse tree produced by PigeonParser#operator.
        def exitOperator(self, ctx:PigeonParser.OperatorContext):
            print('exitOperator')

            pass

        # Enter a parse tree produced by PigeonParser#degredationtag.
        def enterDegredationtag(self, ctx:PigeonParser.DegredationtagContext):
            print('enterDegredationtag')

            pass

        # Exit a parse tree produced by PigeonParser#degredationtag.
        def exitDegredationtag(self, ctx:PigeonParser.DegredationtagContext):
            print('exitDegredationtag')

            pass

        # Enter a parse tree produced by PigeonParser#righttriangle.
        def enterRighttriangle(self, ctx:PigeonParser.RighttriangleContext):
            print('enterRighttriangle')

            pass

        # Exit a parse tree produced by PigeonParser#righttriangle.
        def exitRighttriangle(self, ctx:PigeonParser.RighttriangleContext):
            print('exitRighttriangle')

            pass

        # Enter a parse tree produced by PigeonParser#lefttriangle.
        def enterLefttriangle(self, ctx: PigeonParser.LefttriangleContext):
            print('enterLefttriangle')

            pass

        # Exit a parse tree produced by PigeonParser#lefttriangle.
        def exitLefttriangle(self, ctx: PigeonParser.LefttriangleContext):
            print('exitLefttriangle')

            pass

        # Enter a parse tree produced by PigeonParser#dash.
        def enterDash(self, ctx: PigeonParser.DashContext):
            print('enterDash')

            pass

        # Exit a parse tree produced by PigeonParser#dash.
        def exitDash(self, ctx: PigeonParser.DashContext):
            print('exitDash')

            pass

        # Enter a parse tree produced by PigeonParser#period.
        def enterPeriod(self, ctx: PigeonParser.PeriodContext):
            print('enterPeriod')

            pass

        # Exit a parse tree produced by PigeonParser#period.
        def exitPeriod(self, ctx: PigeonParser.PeriodContext):
            print('exitPeriod')

            pass

        # Enter a parse tree produced by PigeonParser#bar.
        def enterBar(self, ctx: PigeonParser.BarContext):
            print('enterBar')

            pass

        # Exit a parse tree produced by PigeonParser#bar.
        def exitBar(self, ctx: PigeonParser.BarContext):
            print('exitBar')
            pass

        # Enter a parse tree produced by PigeonParser#label.
        def enterLabel(self, ctx: PigeonParser.LabelContext):
            print('enterLabel')
            self.name = ctx.getText()
            pass

        # Exit a parse tree produced by PigeonParser#label.
        def exitLabel(self, ctx: PigeonParser.LabelContext):
            print('exitLabel')

            pass

        # Enter a parse tree produced by PigeonParser#color.
        def enterColor(self, ctx: PigeonParser.ColorContext):
            print('enterColor')
            self.color = self.col_map[ctx.getText()]
            print(self.color)
            pass

        # Exit a parse tree produced by PigeonParser#color.
        def exitColor(self, ctx: PigeonParser.ColorContext):
            print('exitColor')

            pass

        # Enter a parse tree produced by PigeonParser#ignorecolor.
        def enterIgnorecolor(self, ctx: PigeonParser.IgnorecolorContext):
            print('enterIgnorecolor')

            pass

        # Exit a parse tree produced by PigeonParser#ignorecolor.
        def exitIgnorecolor(self, ctx: PigeonParser.IgnorecolorContext):
            print('exitIgnorecolor')

            pass

        # Enter a parse tree produced by PigeonParser#arccommands.
        def enterArccommands(self, ctx: PigeonParser.ArccommandsContext):
            print('enterArccommands')

            pass

        # Exit a parse tree produced by PigeonParser#arccommands.
        def exitArccommands(self, ctx: PigeonParser.ArccommandsContext):
            print('exitArccommands')

            pass

        # Enter a parse tree produced by PigeonParser#arc.
        def enterArc(self, ctx: PigeonParser.ArcContext):
            print('enterArc')

            pass

        # Exit a parse tree produced by PigeonParser#arc.
        def exitArc(self, ctx: PigeonParser.ArcContext):
            print('exitArc')

            pass


#del HtmlPigeonListener


