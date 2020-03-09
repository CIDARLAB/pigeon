import sys
from antlr4 import *
from PigeonLexer import PigeonLexer
from PigeonParser import PigeonParser
from HtmlPigeonListener import HtmlPigeonListener
import dnaplotlib as dpl
import matplotlib.pyplot as plt
from matplotlib import gridspec




def main(argv):

    fig = []
    axis = []


    input = FileStream(argv[1])
    lexer = PigeonLexer(input)
    stream = CommonTokenStream(lexer)
    parser = PigeonParser(stream)
    tree = parser.script()

    print(stream.getText()) #gives us raw text - can we get numLines?


    htmlPigeon = HtmlPigeonListener()
    walker = ParseTreeWalker()
    walker.walk(htmlPigeon, tree)

    # should be doing all the rendering in here
    # get the design list from HtmlPigeonListener

    dr = dpl.DNARenderer()
    part_renderers = dr.SBOL_part_renderers()

    # prom = {'type': 'Promoter', 'name': 'prom', 'fwd': True}
    # ins = {'type': 'Insulator', 'name': 'ins', 'fwd': True}
    # ribo_f = {'type': 'Ribozyme', 'name': 'ribo', 'fwd': True}

    # design = [prom, ins, ribo_f]


    design = HtmlPigeonListener.getDesignList(htmlPigeon)
    print(design)

    fig = plt.figure(figsize=(2, 1))  # plot size should be based on number of glyphs
    gs = gridspec.GridSpec(1, 1)
    axis = plt.subplot(gs[0])

    start, end = dr.renderDNA(axis, design, part_renderers)
    axis.set_xlim([start, end])
    axis.set_ylim([-15, 15])
    axis.set_aspect('equal')
    axis.axis('off')

    plt.subplots_adjust(left=0.01, right=0.99, top=0.99, bottom=0.01)

    fig.savefig('pleasework.png', dpi=300)


if __name__ == '__main__':
    main(sys.argv)


