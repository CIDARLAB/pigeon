import sys
from antlr4 import *
from antlr_pigeon.PigeonLexer import PigeonLexer
from antlr_pigeon.PigeonParser import PigeonParser
from HtmlPigeonListener import HtmlPigeonListener
import dnaplotlib as dpl
import matplotlib.pyplot as plt
from matplotlib import gridspec


def main(str):
    # input = FileStream(argv[1]) # use this if user wants to upload file
    input = InputStream(str)
    lexer = PigeonLexer(input) # throwing error here - need to read text in properly
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

    # need to play with this more - what exactly does it do can we play with it?
    fig = plt.figure(figsize=(design.__len__()/2, 1.5))  # plot size should be based on number of glyphs?
    gs = gridspec.GridSpec(1, 1)
    axis = plt.subplot(gs[0])

    start, end = dr.renderDNA(axis, design, part_renderers, regs = arcs, reg_renderers=dr.std_reg_renderers())
    axis.set_xlim([start, end]) # how  can I change xlim
    axis.set_ylim([-30, 30]) # need good way to auto format this image size
    axis.set_aspect('equal')
    axis.axis('off')

    fig.savefig('pigeon_design.png', dpi=300)

    #this should return the image - can we generate an SVG?


if __name__ == '__main__':
    main(str)


