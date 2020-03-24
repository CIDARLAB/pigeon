from flask import Flask, render_template, request
import Pigeon

pigeon_app = Flask(__name__, static_url_path='')


@pigeon_app.route('/')
def index():
    return render_template('index.html')


@pigeon_app.route('/submit', methods=['POST'])
def submit():
    # get the pigeon script from the textarea input
    script = request.form['script']
    print(script)
    # generate the image
    Pigeon.main(script)
    # should return and render the image
    # give user option to download?
    return 'You entered: {}'.format(request.form['script'])
