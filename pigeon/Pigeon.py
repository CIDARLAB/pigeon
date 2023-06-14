import sys
from antlr4 import InputStream, CommonTokenStream, ParseTreeWalker
from antlr_pigeon.PigeonLexer import PigeonLexer
from antlr_pigeon.PigeonParser import PigeonParser
from PigeonListener import PigeonListener
import pigeon.dnaplotlib as dpl
import matplotlib.pyplot as plt
from matplotlib import gridspec

# class to maintain pigeon script parsing and image generation
class Pigeon(object):

    format = ''
    fig = plt.figure()

    # if no image format is specified when you instantiate the class it will use the default svg format
    def __init__(self, format='svg'):
        self.format = format

    # takes the pigeon script as a text string, and sets Pigeons fig property to the generated image
    def parseAndGenerateImage(self, script_string):
        input_stream = InputStream(script_string)
        lexer = PigeonLexer(input_stream)
        stream = CommonTokenStream(lexer)
        parser = PigeonParser(stream)
        tree = parser.script()

        pigeon_listener = PigeonListener()
        walker = ParseTreeWalker()
        walker.walk(pigeon_listener, tree)

        dr = dpl.DNARenderer()
        part_renderers = dr.SBOL_part_renderers()

        design = PigeonListener.getDesignList(pigeon_listener)
        arcs = PigeonListener.getArcList(pigeon_listener)

        fig = plt.figure(figsize=(design.__len__()/3, 2))
        gs = gridspec.GridSpec(1, 1)
        axis = plt.subplot(gs[0])

        print("Deisgn Length: " + str(design.__len__()))
        print("Arcs Length: " + str(arcs.__len__()))

        start, end = dr.renderDNA(axis, design, part_renderers, regs = arcs, reg_renderers=dr.std_reg_renderers(), plot_vector=pigeon_listener.has_vector, vector_label=pigeon_listener.vector_label)
        axis.set_xlim([start, end])
        axis.set_ylim([-(30 + design.__len__()), (30 + design.__len__())])
        axis.set_aspect('equal')
        axis.axis('off')
        self.fig = fig
        pass

    # Saves Pigeon's fig using the function input values for name and location
    def save(self, location, name) -> str:
        save_path = location + name + '.' + self.format
        self.fig.savefig(save_path, dpi=300) # Save as png file
        
        return save_path

