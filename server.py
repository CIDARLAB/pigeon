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
    fig = parser.parseAndGenerateImage(script)
    imgdata = StringIO()
    fig.savefig(imgdata, format='svg')
    return imgdata.getvalue()


# added this to try and stop the page from caching the old image - not working currently
@pigeon_app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    # r.headers['Cache-Control'] = 'public, max-age=0'
    return r













