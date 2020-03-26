import sys
from antlr4 import *
from antlr_pigeon.PigeonLexer import PigeonLexer
from antlr_pigeon.PigeonParser import PigeonParser
from HtmlPigeonListener import HtmlPigeonListener
import dnaplotlib as dpl
import matplotlib.pyplot as plt
from matplotlib import gridspec
import argparse

# get the txt file from user
# parser = argparse.ArgumentParser()
# parser.add_argument("pigeonScript", help="enter the pigeon script text file to be parsed")
# args = parser.parse_args()
# with open (args.pigeonScript, "r") as myfile:
#     data=myfile.read()


def main(data):

    input = InputStream(data)
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



if __name__ == '__main__':
    main(data)


