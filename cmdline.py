import argparse
import os
import Pigeon

def main():


    parser = argparse.ArgumentParser()
    parser.add_argument("pigeon_script", help="enter the path to the pigeon script text file to be parsed")
    parser.add_argument("-location", "--location", help="enter the location where you want the image to be saved \n i.e. -location=/path/to/your/folder/")
    parser.add_argument("-format", "--format", help="enter the format you want the image to be saved in \n i.e. -image_type=pdf \n options are svg, pdf, and png. Default is svg.")
    args = parser.parse_args()

    # default values
    imglocation = ''
    imgformat = 'svg'

    if (args.location):
        imglocation = args.location

    if (args.format):
        imgformat = args.format

    with open (args.pigeon_script, "r") as myfile:
        data=myfile.read()

    parser = Pigeon.Pigeon()
    fig = parser.parse(data)

    parser.save(fig, imgformat, imglocation)
    pass
    

if __name__ == '__main__':
    main()

