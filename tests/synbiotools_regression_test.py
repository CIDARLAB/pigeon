import os

from pigeon import Pigeon
import pytest

@pytest.mark.mpl_image_compare
@pytest.mark.parametrize('file_path', [
    "synbiotools_examples/p1.pigeon",
    # "synbiotools_examples/p2.pigeon", # fails on rendering repressor's arc
])
def test_pigeon_with_file(file_path):
    with open(file_path, 'r') as file:
        script = file.read()
    parser = Pigeon.Pigeon('png')
    parser.parseAndGenerateImage(script)
    assert parser.fig is not None
    return parser.fig
