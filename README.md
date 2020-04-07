## Setup

Set Flask variables:

    export FLASK_ENV=development
    export FLASK_APP=server.py
  
And run the application:

    flask run



## Miscellaneous bugs and incomplete work 

- Three glyphs from the original pigeon command list cannot be drawn - no matching glyphs in the dnaplotlib library 
- Caching issue - have to restart the server each time I want to generate and show an image on the web page. Each time you refresh the new image is added onto the previous cached one
