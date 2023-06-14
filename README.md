# Pigeon

Pigeon is a tool that generates SBOL compliant visualizations from text scripts. This readme provides instructions on how to install and use Pigeon.

## Installation

Make sure you have the following dependency installed:

- graphviz

### From source

1. Clone the repository.
2. Install the project and dependencies by running `pip install -e .` or `poetry install` (if you want to actively edit the project).
3. If using Poetry, activate the shell with `poetry shell`, then run `pigeon <your_pigeon_script>.txt` to generate the SVGs.

If you only want to install and use the project without any development, simply run `pip install .`.

## Command Line Interface

To run Pigeon from the command line, use the following command:

```
pigeon <your_pigeon_script>.txt
```

If you have installed the project, a softlink for `pigeon` should be added. If you encounter any issues, you can use `python cmdline.py` instead.

By default, Pigeon generates an SVG with the same name as the pigeon script passed in and saves it in the project repository. For example, if you run:

```
pigeon pigeon_script.txt
```

Pigeon will generate and save an image called `pigeon_script.svg` in the same folder.

You can also specify additional configuration options when using Pigeon, including:

1. Image name
2. Image format (png, pdf, or svg)
3. Image location

For example:

```
python cmdline.py -name=my_image -format=png -location=/path/to/myFolder pigeon_script.txt
```

This will generate an image named `my_image.png` and save it in the `/myFolder` directory.

## Code Integration (see cmdline.py for example)

To integrate Pigeon into your code, follow these steps:

1. Check `requirements.txt` to ensure all required dependencies are installed.
2. Import Pigeon (see class specifications in `Pigeon.py`).
3. Create a parser, generate and save the image using the following code:

```python
parser = Pigeon.Pigeon(image_format) # If no format is specified, the default is SVG.
parser.parseAndGenerateImage(script_string) # The script is passed as a string to the parsing function.
parser.save(image_location, image_name) # Saves the image with the name 'image_name' in the folder specified by 'image_location'.
```

## Web Setup (To be updated)

To set up Pigeon with Flask, follow these steps:

Set Flask variables:
```
export FLASK_ENV=development
export FLASK_APP=server.py
```

Run the application:
```
flask run
```

Please note that the web setup section requires updating and should be referred to the updated documentation.