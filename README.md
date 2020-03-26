## Setup

Set Flask variables:

    export FLASK_ENV=development
    export FLASK_APP=server.py
  
And run the application:

    flask run



## Miscellaneous bugs and incomplete work 

- Three glyphs from the original pigeon command list cannot be drawn - no matching glyphs in the dnaplotlib library 
- Generated image not being displayed on webpage 
- Need to package cmdline.py as a binary executable and clean up command line interface using argparse
- If you run the script twice through the webpage it doesn't clear the old image and generate a new one but adds more glyphs to the design already in the directory
