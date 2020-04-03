import sys
from antlr4 import *
from antlr_pigeon.PigeonLexer import PigeonLexer
from antlr_pigeon.PigeonParser import PigeonParser
from HtmlPigeonListener import HtmlPigeonListener
import dnaplotlib as dpl
import matplotlib.pyplot as plt
from matplotlib import gridspec
import numpy as np


class Pigeon(object):

    def __init__(self):
        # what do I do here again?
        pass

    def parse(self, script):
        input = InputStream(script)
        lexer = PigeonLexer(input)
        stream = CommonTokenStream(lexer)
        parser = PigeonParser(stream)
        tree = parser.script()

        htmlPigeon = HtmlPigeonListener()
        walker = ParseTreeWalker()
        walker.walk(htmlPigeon, tree)

        dr = dpl.DNARenderer()
        part_renderers = dr.SBOL_part_renderers()

        design = HtmlPigeonListener.getDesignList(htmlPigeon)
        arcs = HtmlPigeonListener.getArcList(htmlPigeon)

        fig = plt.figure(figsize=(design.__len__()/2, 1.5))
        gs = gridspec.GridSpec(1, 1)
        axis = plt.subplot(gs[0])

        start, end = dr.renderDNA(axis, design, part_renderers, regs = arcs, reg_renderers=dr.std_reg_renderers())
        axis.set_xlim([start, end])
        axis.set_ylim([-30, 30])
        axis.set_aspect('equal')
        axis.axis('off')
        return fig

    def save(self, fig):
        fig.savefig('pigeon_design.png', dpi=300) # Save .svg file
        fig.savefig('pigeon_design.pdf', dpi=300) # Save .svg file
        fig.savefig('pigeon_design.svg', dpi=300) # Save .svg file
        pass

