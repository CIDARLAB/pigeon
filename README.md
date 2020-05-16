## Command Line Interface
To run Pigeon from the command line:

    python cmdline.py <your_pigeon_script>.txt
    
This will run pigeon in the default settings which generate an svg with the same name as the pigeon script passed in, and save it in the project repo. For example if you enter:
    
    python cmdline.py pigeon_script.txt

Where pigeon_script.txt is a text file in the project folder, then pigeon will generate and save an image called pigeon_script.svg in the same folder. 


There are also additional config options you can specify when using pigeon. Those options are:
1. image name
2. image format (png, pdf, or svg)
3. image location 

For example:

    python cmdline.py -name=my_image -format=png -location=/path/to/myFolder pigeon_script.txt
    
will generate an image "my_image.png" and save it in /myFolder


## Code Integration (see cmdline.py for example)

1. Check requirements.txt to ensure all required dependencies are installed 
2. import Pigeon (see class specs in Pigeon.py)
3. To create a parser and generate and save the image:


    parser = Pigeon.Pigeon(image_format) // if no format specified default is svg
    parser.parseAndGenerateImage(script_string)   // the script is passed as a string to the parsing function
    parser.save(image_location, image_name)  // saves the image with name 'image_name' at the folder specified by 'image_location'
    
 
## Binary Executable (Krishna/Ryuichi) 

1. ... 
  


## Web Setup (Krishna probably)

Set Flask variables:

    export FLASK_ENV=development
    export FLASK_APP=server.py
  
And run the application:

    flask run

