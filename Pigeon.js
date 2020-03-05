const http = require('http');
const fs = require('fs')
const antlr4 = require ( 'antlr4/index' ); // why is this failing here?
const PigeonLexer = require('./parser/PigeonLexer');
const PigeonParser = require('./parser/PigeonParser');
const HtmlPigeonListener = require ('./HtmlPigeonListener').HtmlPigeonListener;


fetch('./pigeon_test.txt') // switch to pigeon script

    .then((file) => file.text())
    .then((data) => {

    var chars = new antlr4.InputStream(data); // not sure about this line
    var lexer = new PigeonLexer.PigeonLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new PigeonParser.PigeonParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.script(); // this is wrong
    var htmlPigeon = new HtmlPigeonListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(htmlPigeon,tree);

   })









