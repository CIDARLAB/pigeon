from flask import Flask, render_template, request, Response, send_file
import Pigeon
from io import StringIO


pigeon_app = Flask(__name__, static_url_path='')

@pigeon_app.route('/')
def index():
    return render_template('index.html')


@pigeon_app.route('/parse', methods=['GET'])
def parse():
    script = request.args.get('script')
    parser = Pigeon.Pigeon()
    fig = parser.parse(script)
    imgdata = StringIO()
    fig.savefig(imgdata, format='svg')
    return imgdata.getvalue()













