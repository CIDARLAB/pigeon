To run current example enter:
-
- python Pigeon.py pigeon_test.txt
- there is an example pigeon script (pigeon_test.txt) and the generated image for that script (pigeon_design.png) in the directory. The script can be modified and a new image will overwrite the current one. 

Miscellaneous bugs and incomplete work: 
- 
- Need newline after last arc command in pigeon script - program throws error otherwise (probably a grammar error)
- Arc drawing needs to be restricted. Arcs can only be drawn from coding sequences to promoters (pigeon command c to p). Currently users can draw from any glyph to any other glyph
- Can't draw all types of arcs yet. Barred arcs are drawing correctly, but need to draw barred arcs pointing to other barred arcs, and pointed arcs. See arctypes pdf for the three types - can only draw the first
- Three glyphs from the original pigeon command list cannot be drawn - no matching glyphs in the dnaplotlib library  