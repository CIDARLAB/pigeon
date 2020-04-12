import sys
from antlr4 import *
from antlr_pigeon.PigeonParser import PigeonParser
from antlr_pigeon.PigeonListener import PigeonListener


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
        label_y_offset = 0
        col_map = {}

        # vars for drawing arcs
        arcs = []
        cur_arc = {'type' : '', 'from_part' : '', 'to_part' : '',
                   'opts':{'color':(0,0,0), 'linewidth':1,
                           'arc_height_start':10, 'arc_height_end':15}}
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

            self.col_map['11'] = (1.0, 1.0, 0.4)  # light yellow
            self.col_map['12'] = (0.9, 0.9, 0.0)  # yellow

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
            # print('enterScript')
            pass

        # Exit a parse tree produced by PigeonParser#script.
        def exitScript(self, ctx: PigeonParser.ScriptContext):
            pass


        # Enter a parse tree produced by PigeonParser#pigeoncommands.
        def enterPigeoncommands(self, ctx:PigeonParser.PigeoncommandsContext):
            # print('enterPigeoncommands')

            pass

        # Exit a parse tree produced by PigeonParser#pigeoncommands.
        def exitPigeoncommands(self, ctx:PigeonParser.PigeoncommandsContext):
            # print('exitPigeoncommands')
            pass

        # Enter a parse tree produced by PigeonParser#promoter.
        def enterPromoter(self, ctx:PigeonParser.PromoterContext):
            self.type = 'Promoter'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterPromoter')
            pass

        # Exit a parse tree produced by PigeonParser#promoter.
        def exitPromoter(self, ctx:PigeonParser.PromoterContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts':{'color':self.color, 'label': self.name,
                             'label_y_offset':self.label_y_offset, 'label_style':'italic',
                             'label_size': 5, 'start_pad':4, 'end_pad':4}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            # print('exitPromoter')

            pass

        # Enter a parse tree produced by PigeonParser#repressor.
        def enterRepressor(self, ctx:PigeonParser.RepressorContext):
            self.type = 'RBS'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterRepressor')

            pass

        # Exit a parse tree produced by PigeonParser#repressor.
        def exitRepressor(self, ctx:PigeonParser.RepressorContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            # print('exitRepressor')

            pass

        # Enter a parse tree produced by PigeonParser#codingseq.
        def enterCodingseq(self, ctx:PigeonParser.CodingseqContext):
            self.type = 'CDS'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = 0
            # print('enterCodingseq')
            pass

        # Exit a parse tree produced by PigeonParser#codingseq.
        def exitCodingseq(self, ctx: PigeonParser.CodingseqContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4, 'end_pad': 4, 'arrowhead_height': 0},
                                      }
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            # print('exitCodingseq')

            pass

        # Enter a parse tree produced by PigeonParser#transcription.
        def enterTranscription(self, ctx:PigeonParser.TranscriptionContext):
            self.type = 'Terminator'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterTranscription')
            pass

        # Exit a parse tree produced by PigeonParser#transcription.
        def exitTranscription(self, ctx:PigeonParser.TranscriptionContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            # print('exitTranscription')

            pass

        # Enter a parse tree produced by PigeonParser#stop.
        def enterStop(self, ctx:PigeonParser.StopContext):
            self.type = 'Spacer'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterStop')

            pass

        # Exit a parse tree produced by PigeonParser#stop.
        def exitStop(self, ctx:PigeonParser.StopContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            # print('exitStop')

            pass

        # Enter a parse tree produced by PigeonParser#operator.
        def enterOperator(self, ctx:PigeonParser.OperatorContext):
            self.type = 'Operator'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = 0
            # print('enterOperator')

            pass

        # Exit a parse tree produced by PigeonParser#operator.
        def exitOperator(self, ctx:PigeonParser.OperatorContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            # print('exitOperator')

            pass

        # Enter a parse tree produced by PigeonParser#degredationtag.
        def enterDegredationtag(self, ctx:PigeonParser.DegredationtagContext):
            self.type = 'Degredation'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterDegredationtag')
            pass

        # Exit a parse tree produced by PigeonParser#degredationtag.
        def exitDegredationtag(self, ctx:PigeonParser.DegredationtagContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)

            # print('exitDegredationtag')
            pass

        # Enter a parse tree produced by PigeonParser#righttriangle.
        def enterRighttriangle(self, ctx:PigeonParser.RighttriangleContext):
            self.type = 'Triangle'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterRighttriangle')

            pass

        # Exit a parse tree produced by PigeonParser#righttriangle.
        def exitRighttriangle(self, ctx:PigeonParser.RighttriangleContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            # print('exitRighttriangle')

            pass

        # Enter a parse tree produced by PigeonParser#lefttriangle.
        def enterLefttriangle(self, ctx: PigeonParser.LefttriangleContext):
            self.type = 'Triangle'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            self.fwd = False
            # print('enterLefttriangle')

            pass

        # Exit a parse tree produced by PigeonParser#lefttriangle.
        def exitLefttriangle(self, ctx: PigeonParser.LefttriangleContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            # print('exitLefttriangle')

            pass

            # Enter a parse tree produced by PigeonParser#invert.

        def enterInvert(self, ctx: PigeonParser.InvertContext):
            self.fwd = False
            self.label_y_offset = 5 # don't necessarily want to always do this
            pass

            # Exit a parse tree produced by PigeonParser#invert.

        def exitInvert(self, ctx: PigeonParser.InvertContext):
            pass


        # Enter a parse tree produced by PigeonParser#bar.
        def enterBar(self, ctx: PigeonParser.BarContext):
            self.type = 'Bar'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            print('enterBar')

            pass

        # Exit a parse tree produced by PigeonParser#bar.
        def exitBar(self, ctx: PigeonParser.BarContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            print('exitBar')
            pass

        def enterThree(self, ctx: PigeonParser.BarContext):
            self.type = '3Overhang'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            print('enterThree')

            pass

        # Exit a parse tree produced by PigeonParser#bar.
        def exitThree(self, ctx: PigeonParser.BarContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4.0, 'end_pad': 4.0,
                                      'y_extent': 1.5, 'x_extent': 10, 'linewidth': 1.5}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            print('exitThree')
            pass

        def enterFive(self, ctx: PigeonParser.BarContext):
            self.type = '5Overhang'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            print('enterFive')

            pass

        # Exit a parse tree produced by PigeonParser#bar.
        def exitFive(self, ctx: PigeonParser.BarContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4.0, 'end_pad': 4.0,
                                      'y_extent': 1.5, 'x_extent': 10, 'linewidth': 1.5}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            print('exitFive')
            pass

        def enterGene(self, ctx:PigeonParser.CodingseqContext):
            self.type = 'CDS'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = 0
            # print('enterCodingseq')
            pass

        # Exit a parse tree produced by PigeonParser#codingseq.
        def exitGene(self, ctx: PigeonParser.CodingseqContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4, 'end_pad': 4,
                                      'y_extent': 4, 'x_extent': 20},
                                      }
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            # print('exitCodingseq')

            pass

        def enterFseq(self, ctx:PigeonParser.CodingseqContext):
            self.type = 'FSequence'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = 0
            # print('enterCodingseq')
            pass

        # Exit a parse tree produced by PigeonParser#codingseq.
        def exitFseq(self, ctx: PigeonParser.CodingseqContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': 0, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4, 'end_pad': 4,
                                      'y_extent': 5, 'x_extent': 40},
                                      }
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            # print('exitCodingseq')

            pass


        def enterZring(self, ctx:PigeonParser.DegredationtagContext):
            self.type = 'ZRing'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterDegredationtag')
            pass

        # Exit a parse tree produced by PigeonParser#degredationtag.
        def exitZring(self, ctx:PigeonParser.DegredationtagContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)

            # print('exitDegredationtag')
            pass

        def enterXbar(self, ctx: PigeonParser.BarContext):
            self.type = 'XBar'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            print('enterBar')

            pass

        # Exit a parse tree produced by PigeonParser#bar.
        def exitXbar(self, ctx: PigeonParser.BarContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            print('exitBar')
            pass

        def enterBox(self, ctx:PigeonParser.CodingseqContext):
            self.type = 'CDS'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterCodingseq')
            pass

        # Exit a parse tree produced by PigeonParser#codingseq.
        def exitBox(self, ctx: PigeonParser.CodingseqContext):
            self.cur_part = {'type': self.type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 5, 'start_pad': 4, 'end_pad': 4,
                                      'arrowhead_height': 0, 'arrowhead_length': 0,
                                      'x_extent': 15, 'y_extent': 4},
                                      }
            self.design += [self.cur_part]
            self.cur_part = {}
            self.type = ''
            self.name = ''
            self.fwd = True
            self.color = (0.0, 0.0, 0.0)
            # print('exitCodingseq')

            pass

        # Enter a parse tree produced by PigeonParser#label.
        def enterLabel(self, ctx: PigeonParser.LabelContext):
            # print('enterLabel')
            self.name = ctx.getText()
            if (self.type == 'CDS'):
                self.label_y_offset = 0

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
            # print('exitLabel')
            pass

        # Enter a parse tree produced by PigeonParser#color.
        def enterColor(self, ctx: PigeonParser.ColorContext):
            # print('enterColor')
            self.color = self.col_map[ctx.getText()]
            pass

        # Exit a parse tree produced by PigeonParser#color.
        def exitColor(self, ctx: PigeonParser.ColorContext):
            # print('exitColor')
            pass

        # Enter a parse tree produced by PigeonParser#ignorecolor.
        def enterIgnorecolor(self, ctx: PigeonParser.IgnorecolorContext):
            self.color = (0.0, 0.0, 0.0)
            self.name = ''
            # print('enterIgnorecolor')

            pass

        # Exit a parse tree produced by PigeonParser#ignorecolor.
        def exitIgnorecolor(self, ctx: PigeonParser.IgnorecolorContext):
            # print('exitIgnorecolor')

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
            print(self.cur_arc['from_part']['type'] + ": " + self.cur_arc['from_part']['name'])
            print(self.cur_arc['to_part']['type'] + ": " + self.cur_arc['to_part']['name'])

            if ((self.cur_arc['from_part']['type'] != 'CDS') or (self.cur_arc['to_part']['type'] != 'Promoter')):
                self.cur_arc = {}
                print("ERROR: Invalid Arc. Arcs must be drawn from command c to command p")
            else:
                # if (self.cur_arc['to_part']['fwd'] == False):
                #     self.cur_arc['opts']['arc_height_end'] = 15
                self.arcs += [self.cur_arc]
                self.cur_arc = {}
            print('exitArccommands')
            pass

        # Enter a parse tree produced by PigeonParser#arc.
        def enterArc(self, ctx: PigeonParser.ArcContext):
            print('enterArc')
            arc = ctx.getText()
            # if ind do this else if rep do that
            if (arc == 'rep'):
                self.cur_arc['type'] = 'Repression'
            elif (arc == 'ind'):
                self.cur_arc['type'] = 'Activation' # is this correct?

            self.haveArcType = True
            pass

        # Exit a parse tree produced by PigeonParser#arc.
        def exitArc(self, ctx: PigeonParser.ArcContext):
            print('exitArc')

            pass


#del HtmlPigeonListener


