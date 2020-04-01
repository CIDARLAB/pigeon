from flask import Flask, render_template, request, send_from_directory

import Pigeon
import os


pigeon_app = Flask(__name__, static_url_path='', static_folder='static')

@pigeon_app.route('/')
def index():
    return render_template('index.html')


@pigeon_app.route('/parse', methods=['GET'])
def parse():
    script = request.args.get('script')
    parser = Pigeon.Pigeon()
    parser.parse(script)

    # not sure this will work for the deployed version...
    # root_dir = os.path.dirname((os.getcwd()))
    # image_path = root_dir + '/pidgeon/static/pigeon_design.png'
    filename = "pigeon_design.png"
    # return render_template('index.html', user_image = image_path)
    return send_from_directory(pigeon_app.static_folder, filename)







