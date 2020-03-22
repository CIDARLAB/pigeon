import sys
from antlr4 import *
from antlr_pigeon.PigeonLexer import PigeonLexer
from antlr_pigeon.PigeonParser import PigeonParser
from HtmlPigeonListener import HtmlPigeonListener
import dnaplotlib as dpl
import matplotlib.pyplot as plt
from matplotlib import gridspec




def main(argv):


    input = FileStream(argv[1])
    lexer = PigeonLexer(input)
    stream = CommonTokenStream(lexer)
    parser = PigeonParser(stream)
    tree = parser.script()

    htmlPigeon = HtmlPigeonListener()
    walker = ParseTreeWalker()
    walker.walk(htmlPigeon, tree)

    # should be doing all the rendering in here
    # get the design list from HtmlPigeonListener
    dr = dpl.DNARenderer()
    part_renderers = dr.SBOL_part_renderers()

    design = HtmlPigeonListener.getDesignList(htmlPigeon)
    # print(design)
    arcs = HtmlPigeonListener.getArcList(htmlPigeon)
    # print(arcs)

    # need to play with this more - what exactly does it do can we play with it?
    fig = plt.figure(figsize=(design.__len__()/2, 1.5))  # plot size should be based on number of glyphs?
    gs = gridspec.GridSpec(1, 1)
    axis = plt.subplot(gs[0])
    # axis = plt.axes([0, 0, 1, 1])


    start, end = dr.renderDNA(axis, design, part_renderers, regs = arcs, reg_renderers=dr.std_reg_renderers())
    axis.set_xlim([start, end]) # how  can I change xlim
    axis.set_ylim([-30, 30]) # need good way to auto format this image size
    axis.set_aspect('equal')
    axis.axis('off')

    # plt.subplots_adjust(left=0.01, right=0.99, top=0.99, bottom=0.01)

    fig.savefig('pigeon_design.png', dpi=300)


if __name__ == '__main__':
    main(sys.argv)


