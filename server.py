from flask import Flask
from flask import request

pigeon_app = Flask(__name__)

# test
@pigeon_app.route('/', methods= ['GET'])
def index():
    return "<h1>Pigeon Visualizer</h1><p>This site is a prototype API for rendering synthetic biological circuits using the pigeon visualizer</p>"


# sample file load function
# should be getting the pigeon script here and generating the image

# @app.route('/upload', methods=['GET', 'POST'])
# def upload_file():
#     if request.method == 'POST':
#         static_file = request.files['the_file']
#         # here you can send this static_file to a storage service
#         # or save it permanently to the file system
#         static_file.save('/var/www/uploads/profilephoto.png')

