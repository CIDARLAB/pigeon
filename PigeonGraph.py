from Pigeon import Pigeon
import re
import pygraphviz as pgv
import os

class PigeonGraph:

    def __init__(self) -> None:
        #Create temporary folder
        self._pigeon_file_paths = dict()
        self._dot_stream = None

    def parseAndGenerateImage(self, script_text):
        regex_pattern = r'PIGEON_START\s(\".*\")\s([\w\d\s\=\-\<\>\#\?\|]+)PIGEON_END'
        matches = re.findall(regex_pattern, script_text)

        node_keys = self._pigeon_file_paths

        i = 0
        for match in matches:
            key = match[0]
            pigeon_text = match[1]
            pigeon_object = Pigeon('png')
            pigeon_object.parseAndGenerateImage(pigeon_text)
            filepath = pigeon_object.save('./', "graph_{}".format(i))
            node_keys[key] = filepath
            i += 1

        subs_text = ''
        #TODO: Replace the matches with with whatever keys
        def replace_callback(match):
            key = match.groups()[0]
            ret = '{} [image="{}"]'.format(key, node_keys[key])
            return ret
                        

        subs_text = re.sub(regex_pattern, replace_callback, script_text)
        print("Finished Replacing the Graph node data")
    
        self._dot_stream = subs_text
    
    def save(self , location, name):
        G=pgv.AGraph(self._dot_stream)
        G.layout(prog='dot')
        G.draw('test-graph-output.pdf')
        for key in self._pigeon_file_paths.keys():
            os.remove(self._pigeon_file_paths[key])

            
