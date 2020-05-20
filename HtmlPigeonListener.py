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
                         'opts': {'color': (0,0,0), 'label': '', 'label_y_offset': 0, 'label_size': 5}}
        part_type = ''
        name = ''
        fwd = True
        color = ''
        label_y_offset = 0
        col_map = {}

        # vars for drawing arcs
        arcs = []
        cur_arc = {'type' : '', 'from_part' : '', 'to_part' : '',
                   'opts':{'color':(0,0,0), 'linewidth':1,
                           'arc_height_start':10, 'arc_height_end':15,
                           'label_y_offset': 0, 'rep_to_rep_name': ''}}
        gettingFromPart = False
        haveFromPart = False
        arc_type = ''
        from_part = {}
        to_part = {}
        ind_name = ''
        rep2_name = ''
        glyphToGlyphInd = False

        _has_vector = False
        _vector_label = None

        @property
        def has_vector(self):
            return self._has_vector

        @property
        def vector_label(self):
            return self._vector_label

        def clear_cur_part(self):
            self.part_type = ''
            self.name = ''
            self.fwd = True
            self.color = ''
            self.label_y_offset = 0
            self.cur_part = {'type': '', 'name': '', 'fwd': True,
                         'opts': {'color': (0,0,0), 'label': '', 'label_y_offset': 0, 'label_size': 3.5,
                                  'scale': 1}}



        def clear_cur_arc(self):
            self.gettingFromPart = False
            self.haveFromPart = False
            self.glyphToGlyphInd = False
            self.arc_type = ''
            self.ind_name = ''
            self.rep2_name = ''
            self.from_part = {}
            self.to_part = {}
            self.cur_arc = {'type': '', 'from_part': '', 'to_part': '',
                            'opts': {'color': (0, 0, 0), 'linewidth': 1,
                                     'arc_height_start': 10, 'arc_height_end': 15,
                                     'label_y_offset': 0, 'label_size': 3.5}}


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
            # print('exitScript')
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
            self.part_type = 'Promoter'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterPromoter')
            pass

        # Exit a parse tree produced by PigeonParser#promoter.
        def exitPromoter(self, ctx:PigeonParser.PromoterContext):
            if(not self.fwd):
                self.label_y_offset *= -1
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts':{'color':self.color, 'label': self.name,
                             'label_y_offset':self.label_y_offset, 'label_style':'italic',
                             'label_size': 3.5, 'start_pad':4, 'end_pad':4}}
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitPromoter')
            pass

        # Enter a parse tree produced by PigeonParser#repressor.
        def enterRepressor(self, ctx:PigeonParser.RepressorContext):
            self.part_type = 'RBS'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterRepressor')
            pass

        # Exit a parse tree produced by PigeonParser#repressor.
        def exitRepressor(self, ctx:PigeonParser.RepressorContext):
            if (not self.fwd):
                self.label_y_offset *= -1
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4, 'end_pad': 4, }}
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitRepressor')
            pass

        # Enter a parse tree produced by PigeonParser#codingseq.
        def enterCodingseq(self, ctx:PigeonParser.CodingseqContext):
            self.part_type = 'CDS'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = 0
            # print('enterCodingseq')
            pass

        # Exit a parse tree produced by PigeonParser#codingseq.
        def exitCodingseq(self, ctx: PigeonParser.CodingseqContext):
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,'scale': 5,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4, 'end_pad': 4, 'arrowhead_height': 0
                                      },
                             }
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitCodingseq')
            pass

        # Enter a parse tree produced by PigeonParser#transcription.
        def enterTranscription(self, ctx:PigeonParser.TranscriptionContext):
            self.part_type = 'Terminator'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterTranscription')
            pass

        # Exit a parse tree produced by PigeonParser#transcription.
        def exitTranscription(self, ctx:PigeonParser.TranscriptionContext):
            if (not self.fwd):
                self.label_y_offset *= -1
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitTranscription')
            pass

        # Enter a parse tree produced by PigeonParser#stop.
        def enterStop(self, ctx:PigeonParser.StopContext):
            self.part_type = 'Spacer'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterStop')
            pass

        # Exit a parse tree produced by PigeonParser#stop.
        def exitStop(self, ctx:PigeonParser.StopContext):
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitStop')
            pass

        # Enter a parse tree produced by PigeonParser#operator.
        def enterOperator(self, ctx:PigeonParser.OperatorContext):
            self.part_type = 'Operator'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = 0
            # print('enterOperator')
            pass

        # Exit a parse tree produced by PigeonParser#operator.
        def exitOperator(self, ctx:PigeonParser.OperatorContext):
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitOperator')
            pass

        # Enter a parse tree produced by PigeonParser#degredationtag.
        def enterDegredationtag(self, ctx:PigeonParser.DegredationtagContext):
            self.part_type = 'Degredation'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterDegredationtag')
            pass

        # Exit a parse tree produced by PigeonParser#degredationtag.
        def exitDegredationtag(self, ctx:PigeonParser.DegredationtagContext):
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitDegredationtag')
            pass

        # Enter a parse tree produced by PigeonParser#righttriangle.
        def enterRighttriangle(self, ctx:PigeonParser.RighttriangleContext):
            self.part_type = 'Triangle'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterRighttriangle')
            pass

        # Exit a parse tree produced by PigeonParser#righttriangle.
        def exitRighttriangle(self, ctx:PigeonParser.RighttriangleContext):
            if (not self.fwd):
                self.label_y_offset *= -1
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitRighttriangle')
            pass

        # Enter a parse tree produced by PigeonParser#lefttriangle.
        def enterLefttriangle(self, ctx: PigeonParser.LefttriangleContext):
            self.part_type = 'Triangle'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            self.fwd = False
            # print('enterLefttriangle')
            pass

        # Exit a parse tree produced by PigeonParser#lefttriangle.
        def exitLefttriangle(self, ctx: PigeonParser.LefttriangleContext):
            if (not self.fwd):
                self.label_y_offset *= -1
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitLefttriangle')
            pass

        # Enter a parse tree produced by PigeonParser#invert.
        def enterInvert(self, ctx: PigeonParser.InvertContext):
            self.fwd = False
            # self.label_y_offset = 5 # don't necessarily want to always do this
            pass

        # Exit a parse tree produced by PigeonParser#invert.
        def exitInvert(self, ctx: PigeonParser.InvertContext):
            pass


        # Enter a parse tree produced by PigeonParser#bar.
        def enterBar(self, ctx: PigeonParser.BarContext):
            self.part_type = 'Bar'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterBar')
            pass

        # Exit a parse tree produced by PigeonParser#bar.
        def exitBar(self, ctx: PigeonParser.BarContext):
            if (not self.fwd):
                self.label_y_offset *= -1
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitBar')
            pass

        def enterThree(self, ctx: PigeonParser.BarContext):
            self.part_type = '3Overhang'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterThree')
            pass

        # Exit a parse tree produced by PigeonParser#bar.
        def exitThree(self, ctx: PigeonParser.BarContext):
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4.0, 'end_pad': 4.0,
                                      'y_extent': 1.5, 'x_extent': 10, 'linewidth': 1.5}}
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitThree')
            pass

        def enterFive(self, ctx: PigeonParser.BarContext):
            self.part_type = '5Overhang'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterFive')
            pass

        # Exit a parse tree produced by PigeonParser#bar.
        def exitFive(self, ctx: PigeonParser.BarContext):
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4.0, 'end_pad': 4.0,
                                      'y_extent': 1.5, 'x_extent': 10, 'linewidth': 1.5}}
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitFive')
            pass

        def enterScar(self, ctx: PigeonParser.ScarContext):
            self.part_type = 'Scar'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8

        def exitScar(self, ctx: PigeonParser.ScarContext):
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4.0, 'end_pad': 4.0,
                                      'y_extent': 1.5, 'x_extent': 10, 'linewidth': 1.5}}
            self.design += [self.cur_part]
            self.clear_cur_part()


        def enterGene(self, ctx:PigeonParser.CodingseqContext):
            self.part_type = 'CDS'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = 0
            # print('enterGene')
            pass

        # Exit a parse tree produced by PigeonParser#codingseq.
        def exitGene(self, ctx: PigeonParser.CodingseqContext):
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4, 'end_pad': 4,
                                      'y_extent': 4, 'x_extent': 20},
                             }
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitGene')
            pass

        def enterFseq(self, ctx:PigeonParser.CodingseqContext):
            self.part_type = 'FSequence'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = 0
            # print('enterFseq')
            pass

        # Exit a parse tree produced by PigeonParser#codingseq.
        def exitFseq(self, ctx: PigeonParser.CodingseqContext):
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': 0, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4, 'end_pad': 4,
                                      'y_extent': 5, 'x_extent': 40},
                             }
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitFseq')
            pass


        def enterZring(self, ctx:PigeonParser.DegredationtagContext):
            self.part_type = 'ZRing'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterZring')
            pass

        # Exit a parse tree produced by PigeonParser#degredationtag.
        def exitZring(self, ctx:PigeonParser.DegredationtagContext):
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitZring')
            pass

        def enterXbar(self, ctx: PigeonParser.BarContext):
            self.part_type = 'XBar'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            print('enterBar')
            pass

        # Exit a parse tree produced by PigeonParser#bar.
        def exitXbar(self, ctx: PigeonParser.BarContext):
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4, 'end_pad': 4}}
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitBar')
            pass

        def enterBox(self, ctx:PigeonParser.CodingseqContext):
            self.part_type = 'CDS'
            self.color = (0.0, 0.0, 0.0)
            self.label_y_offset = -8
            # print('enterBox')
            pass

        # Exit a parse tree produced by PigeonParser#codingseq.
        def exitBox(self, ctx: PigeonParser.CodingseqContext):
            self.cur_part = {'type': self.part_type, 'name': self.name, 'fwd': self.fwd,
                             'opts': {'color': self.color, 'label': self.name,
                                      'label_y_offset': self.label_y_offset, 'label_style': 'italic',
                                      'label_size': 3.5, 'start_pad': 4, 'end_pad': 4,
                                      'arrowhead_height': 0, 'arrowhead_length': 0,
                                      'x_extent': 15, 'y_extent': 4},
                             }
            self.design += [self.cur_part]
            self.clear_cur_part()
            # print('exitBox')
            pass

        def exitVector(self, ctx: PigeonParser.VectorContext):
            self._has_vector = True
            self._vector_label = self.name

        # Enter a parse tree produced by PigeonParser#label.
        def enterLabel(self, ctx: PigeonParser.LabelContext):
            print('enterLabel')
            self.name = ctx.getText()

            # NORMAL REPRESSION ARCS
            if(self.gettingFromPart and self.cur_arc['type'] == 'Repression'):
                # print('REPRESSION ARC - GETTING LABELS')
                for i in self.design:
                    if (i['name'] == self.name):
                        self.cur_arc['from_part'] = i
                self.gettingFromPart = False
            else:
                for i in self.design:
                    if (i['name'] == self.name):
                        self.cur_arc['to_part'] = i

            # ACTIVATION ARCS
            if (self.gettingFromPart and self.cur_arc['type'] == 'Activation'):
                # print('ACTIVATION ARC - GETTING LABELS')

                for i in self.design:
                    if (i['name'] == self.name):
                        self.cur_arc['from_part'] = i
                        self.glyphToGlyphInd = True
                        print('from part name: ' + self.cur_arc['from_part']['name'])
                if(not self.glyphToGlyphInd):
                    self.ind_name = self.name
                self.gettingFromPart = False
            else:
                for i in self.design:
                    if (i['name'] == self.name):
                        self.cur_arc['to_part'] = i
                        if (not self.glyphToGlyphInd and self.cur_arc['type'] == 'Activation'):
                            self.cur_arc['from_part'] = self.cur_arc['to_part']
                            self.cur_arc['type'] = 'PointingActivation' # set the new type on the way out
                            self.cur_arc['opts']['arc_label_name'] = self.ind_name



            # REPRESSION ARC TO REPRESSION ARC
            if(self.cur_arc['type'] == 'RepToRep'):
                # print('REPRESSION ARC TO REPRESSION ARC - GETTING LABELS')

                if (not self.gettingFromPart):
                    self.rep2_name = self.name
                    self.gettingFromPart = True
                    self.haveFromPart = False
                elif (self.gettingFromPart and not self.haveFromPart):
                    for i in self.design:
                        if (i['name'] == self.name):
                            self.cur_arc['from_part'] = i
                    self.haveFromPart = True
                else:
                    for i in self.design:
                        if (i['name'] == self.name):
                            self.cur_arc['to_part'] = i
                            # print('to part name: ' + self.cur_arc['to_part']['name'])
                    self.cur_arc['opts']['arc_label_name'] = self.rep2_name


            pass

        # Exit a parse tree produced by PigeonParser#label.
        def exitLabel(self, ctx: PigeonParser.LabelContext):
            print('exitLabel')
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
            self.clear_cur_arc()
            print('enterArccommands')
            pass

        # Exit a parse tree produced by PigeonParser#arccommands.
        def exitArccommands(self, ctx: PigeonParser.ArccommandsContext):
            # if ((self.cur_arc['type'] != 'Activation') and ((self.cur_arc['from_part']['type'] != 'CDS') or (self.cur_arc['to_part']['type'] != 'Promoter'))):
            #     self.cur_arc = {}
            #     print("ERROR: Invalid Arc. Arcs must be drawn from a CDS (c) to a Promoter (p)")
            # else:
            self.arcs += [self.cur_arc]
            self.clear_cur_arc()
            print('exitArccommands')
            pass

        def enterRep(self, ctx:PigeonParser.RepContext):
            print('enterRep')
            self.cur_arc['type'] = 'Repression'
            self.gettingFromPart = True
            pass


        def exitRep(self, ctx:PigeonParser.RepContext):
            print('exitRep')
            pass

        def enterInd(self, ctx:PigeonParser.IndContext):
            print('enterInd')
            self.cur_arc['type'] = 'Activation'
            self.gettingFromPart = True

            pass

        def exitInd(self, ctx:PigeonParser.IndContext):
            print('exitInd')
            pass

        def enterRep2(self, ctx:PigeonParser.Rep2Context):
            print('enterRep2')
            self.cur_arc['type'] = 'RepToRep'
            self.gettingFromPart = False
            pass

        def exitRep2(self, ctx:PigeonParser.Rep2Context):
            print('exitRep2')
            pass


