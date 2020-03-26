from flask import Flask, render_template, request, Response
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from matplotlib.figure import Figure
import Pigeon
import io

pigeon_app = Flask(__name__, static_url_path='')


@pigeon_app.route('/')
def index():
    return render_template('index.html')


@pigeon_app.route('/parse', methods=['POST'])
def submit():
    script = request.form['script']
    fig = getDesign(script)
    output = io.BytesIO()
    FigureCanvas(fig).print_png(output)
    return Response(output.getvalue(), mimetype='image/png')

def getDesign(script):
    fig = Pigeon.main(script)
    fig.savefig('pigeon_design.png', dpi=300)
    return fig
