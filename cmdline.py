import argparse
import Pigeon

def main():

    # get the txt file from user
    parser = argparse.ArgumentParser()
    parser.add_argument("your_script", help="enter the path to the pigeon script text file to be parsed")
    args = parser.parse_args()

    with open (args.your_script, "r") as myfile:
        data=myfile.read()

    parser = Pigeon.Pigeon()
    fig = parser.parse(data)
    parser.save(fig)
    pass
    

if __name__ == '__main__':
    main()

