import argparse
from pigeon.Pigeon import Pigeon
from pigeon.PigeonGraph import PigeonGraph

def main():


    parser = argparse.ArgumentParser()
    parser.add_argument("pigeon_script", help="enter the path to the pigeon script text file to be parsed")
    parser.add_argument("-location", "--location", help="enter the location where you want the image to be saved \n i.e. -location=/path/to/your/folder/")
    parser.add_argument("-format", "--format", help="enter the format you want the image to be saved in \n i.e. -image_type=pdf \n options are svg, pdf, and png. Default is svg.")
    parser.add_argument("-name", "--name", help="enter a name for the design that is being generated \n i.e. -name=my_image_name")
    parser.add_argument("-g", "--graph", help="enable the graph processing flag", action="store_true")
    args = parser.parse_args()

    # default values
    imglocation = ''
    imgformat = 'svg'
    imgname = args.pigeon_script.split('.')[0]


    if (args.location):
        imglocation = args.location

    if (args.format):
        imgformat = args.format

    if (args.name):
        imgname = args.name

    with open (args.pigeon_script, "r", encoding="utf-8") as myfile:
        data=myfile.read()

    if args.graph == True:
        p_graph = PigeonGraph()
        p_graph.parseAndGenerateImage(data)
        p_graph.save(imglocation, imgname)
    else:
        parser = Pigeon(imgformat)
        parser.parseAndGenerateImage(data)
        parser.save(imglocation, imgname)

    pass
    

if __name__ == '__main__':
    main()

