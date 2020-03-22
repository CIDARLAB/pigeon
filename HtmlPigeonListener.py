import sys
from antlr4 import *
from PigeonParser import PigeonParser
from PigeonListener import PigeonListener


# HTML Pigeon Listener could take as input some type of design list
# that can help specify layout
class HtmlPigeonListener(PigeonListener):
        # vars for drawing glpyhs
        design = []
        cur_part = {'type': '', 'name': '', 'fwd': True,
                         'opts': {'color': (0,0,0), 'label': '', 'label_y_offset': 0}}
        type = ''
        name = ''
        fwd = True
        color = ''
        y_offset = 0
        col_map = {}

        # vars for drawing arcs
        arcs = []
        cur_arc = {'type' : '', 'from_part' : '', 'to_part' : '', 'opts':{'color':(0,0,0),    'linewidth':1}}
        gettingArcLabels = False
        haveArcType = False
        arc_type = ''
        from_part = {}
        to_part = {}


        def __init__(self):
            self.col_map['1'] = (0.6, 0.6, 1.0)  # light blue
            self.col_map['2'] = (0.0, 0.0, 0.9)  # blue

            self.col_map['3'] = (0.6, 1.0, 0.6)  # light green
            self.col_map['4'] = (0.0, 0.8, 0.0)  # green

            self.col_map['5'] = (1.0, 0.6, 0.6)  # light red
            self.col_map['6'] = (0.9, 0.0, 0.0)  # red

            self.col_map['7'] = (1.0, 0.7, 0.5)  # light orange
            self.col_map['8'] = (1.0, 0.5, 0.0)  # orange

            self.col_map['9'] = (0.8, 0.4, 0.8)  # light purple
            self.col_map['10'] = (0.45, 0.0, 0.45)  # purple

            self.col_map['11'] = (1.0, 1.0, 0.6)  # light yellow
            self.col_map['12'] = (0.95, 0.95, 0.0)  # yellow

            self.col_map['13'] = (0.7, 0.7, 0.7)  # grey
            self.col_map['14'] = (0.0, 0.0, 0.0)  # black

            self.fwd = True
            self.y_offset = 0

            pass

        def getDesignList(self):
            return self.design

        def getArcList(self):
            return self.arcs


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
            self.color = (0.0, 0.0, 0.0)
            self.y_offset = -5
            print('enterPromoter')
            pass

        # Exit a parse tree produced by PigeonParser#promoter.
        def exitPromoter(self, ctx:PigeonParser.PromoterContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts':{'color':self.color, 'label': self.name,
                             'label_y_offset':self.y_offset, 'label_style':'italic',
                             'label_size': 5, 'start_pad':3.5, 'end_pad':3.5}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            print('exitPromoter')

            pass

        # Enter a parse tree produced by PigeonParser#repressor.
        def enterRepressor(self, ctx:PigeonParser.RepressorContext):
            self.type = 'RBS'
            self.color = (0.0, 0.0, 0.0)
            self.y_offset = -5
            print('enterRepressor')

            pass

        # Exit a parse tree produced by PigeonParser#repressor.
        def exitRepressor(self, ctx:PigeonParser.RepressorContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 3.5, 'end_pad': 3.5}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            print('exitRepressor')

            pass

        # Enter a parse tree produced by PigeonParser#codingseq.
        def enterCodingseq(self, ctx:PigeonParser.CodingseqContext):
            self.type = 'CDS'
            self.color = (0.0, 0.0, 0.0)
            self.y_offset = 0
            print('enterCodingseq')
            pass

        # Exit a parse tree produced by PigeonParser#codingseq.
        def exitCodingseq(self, ctx: PigeonParser.CodingseqContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 3.5, 'end_pad': 3.5}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            print('exitCodingseq')

            pass

        # Enter a parse tree produced by PigeonParser#transcription.
        def enterTranscription(self, ctx:PigeonParser.TranscriptionContext):
            self.type = 'Terminator'
            self.color = (0.0, 0.0, 0.0)
            self.y_offset = -5
            print('enterTranscription')
            pass

        # Exit a parse tree produced by PigeonParser#transcription.
        def exitTranscription(self, ctx:PigeonParser.TranscriptionContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 3.5, 'end_pad': 3.5}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            print('exitTranscription')

            pass

        # Enter a parse tree produced by PigeonParser#stop.
        def enterStop(self, ctx:PigeonParser.StopContext):
            self.type = 'Spacer'
            self.color = (0.0, 0.0, 0.0)
            self.y_offset = -5
            print('enterStop')

            pass

        # Exit a parse tree produced by PigeonParser#stop.
        def exitStop(self, ctx:PigeonParser.StopContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 3.5, 'end_pad': 3.5}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            print('exitStop')

            pass

        # Enter a parse tree produced by PigeonParser#operator.
        def enterOperator(self, ctx:PigeonParser.OperatorContext):
            self.type = 'Operator'
            self.color = (0.0, 0.0, 0.0)
            self.y_offset = 0
            print('enterOperator')

            pass

        # Exit a parse tree produced by PigeonParser#operator.
        def exitOperator(self, ctx:PigeonParser.OperatorContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 3.5, 'end_pad': 3.5}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
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

            # Enter a parse tree produced by PigeonParser#invert.

        def enterInvert(self, ctx: PigeonParser.InvertContext):
            self.fwd = False
            self.y_offset = 5 # don't necessarily want to always do this
            pass

            # Exit a parse tree produced by PigeonParser#invert.

        def exitInvert(self, ctx: PigeonParser.InvertContext):
            pass

        # # Enter a parse tree produced by PigeonParser#dash.
        # def enterDash(self, ctx: PigeonParser.DashContext):
        #     print('enterDash')
        #
        #     pass
        #
        # # Exit a parse tree produced by PigeonParser#dash.
        # def exitDash(self, ctx: PigeonParser.DashContext):
        #     print('exitDash')
        #
        #     pass
        #
        # # Enter a parse tree produced by PigeonParser#period.
        # def enterPeriod(self, ctx: PigeonParser.PeriodContext):
        #     print('enterPeriod')
        #
        #     pass
        #
        # # Exit a parse tree produced by PigeonParser#period.
        # def exitPeriod(self, ctx: PigeonParser.PeriodContext):
        #     print('exitPeriod')
        #
        #     pass
        #
        # # Enter a parse tree produced by PigeonParser#bar.
        # def enterBar(self, ctx: PigeonParser.BarContext):
        #     print('enterBar')
        #
        #     pass
        #
        # # Exit a parse tree produced by PigeonParser#bar.
        # def exitBar(self, ctx: PigeonParser.BarContext):
        #     print('exitBar')
        #     pass

        # Enter a parse tree produced by PigeonParser#label.
        def enterLabel(self, ctx: PigeonParser.LabelContext):
            print('enterLabel')
            self.name = ctx.getText()
            if (self.type == 'CDS'):
                self.y_offset = 0

            if (self.gettingArcLabels and not self.haveArcType):
                for i in self.design:
                    if (i['name'] == self.name):
                        self.cur_arc['from_part'] = i
            elif (self.gettingArcLabels and self.haveArcType):
                for i in self.design:
                    if (i['name'] == self.name):
                        self.cur_arc['to_part'] = i
            pass

        # Exit a parse tree produced by PigeonParser#label.
        def exitLabel(self, ctx: PigeonParser.LabelContext):
            print('exitLabel')
            pass

        # Enter a parse tree produced by PigeonParser#color.
        def enterColor(self, ctx: PigeonParser.ColorContext):
            print('enterColor')
            self.color = self.col_map[ctx.getText()]
            pass

        # Exit a parse tree produced by PigeonParser#color.
        def exitColor(self, ctx: PigeonParser.ColorContext):
            print('exitColor')
            pass

        # Enter a parse tree produced by PigeonParser#ignorecolor.
        def enterIgnorecolor(self, ctx: PigeonParser.IgnorecolorContext):
            self.color = (0.0, 0.0, 0.0)
            self.name = ''
            print('enterIgnorecolor')

            pass

        # Exit a parse tree produced by PigeonParser#ignorecolor.
        def exitIgnorecolor(self, ctx: PigeonParser.IgnorecolorContext):
            print('exitIgnorecolor')

            pass

        # Enter a parse tree produced by PigeonParser#arccommands.
        def enterArccommands(self, ctx: PigeonParser.ArccommandsContext):
            self.gettingArcLabels = True
            print('enterArccommands')

            pass

        # Exit a parse tree produced by PigeonParser#arccommands.
        def exitArccommands(self, ctx: PigeonParser.ArccommandsContext):
            self.gettingArcLabels = False
            self.haveArcType = False
            print(self.cur_arc['from_part']['type'])
            print(self.cur_arc['to_part']['type'])

            if ((self.cur_arc['from_part']['type'] != 'CDS') or (self.cur_arc['to_part']['type'] != 'Promoter')):
                self.cur_arc = {}
                print("ERROR: Invalid Arc. Arcs must be drawn from command c to command p")
            else:
                self.arcs += [self.cur_arc]
                self.cur_arc = {}
            print('exitArccommands')
            pass

        # Enter a parse tree produced by PigeonParser#arc.
        def enterArc(self, ctx: PigeonParser.ArcContext):
            arc = ctx.getText()
            # if ind do this else if rep do that
            if (arc == 'rep'):
                self.cur_arc['type'] = 'Repression'
            elif (arc == 'ind'):
                self.cur_arc['type'] = 'Connection' # is this correct?

            self.haveArcType = True
            print('enterArc')
            pass

        # Exit a parse tree produced by PigeonParser#arc.
        def exitArc(self, ctx: PigeonParser.ArcContext):
            print('exitArc')

            pass


#del HtmlPigeonListener


