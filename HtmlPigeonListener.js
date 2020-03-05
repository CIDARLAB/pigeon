const antlr4 = require('antlr4/index');
const PigeonLexer = require('./parser/PigeonLexer');
const PigeonParser = require('./parser/PigeonParser');
const PigeonListener = require('./parser/PigeonListener').PigeonListener;

HtmlPigeonListener = function(res) {
    this.Res = res;
    PigeonListener.call(this); // inherit default listener
    return this;
};

// inherit default listener
HtmlPigeonListener.prototype = Object.create(PigeonListener.prototype);
HtmlPigeonListener.prototype.constructor = HtmlPigeonListener;

// Enter a parse tree produced by PigeonParser#script.
HtmlPigeonListener.prototype.enterScript = function(ctx) {
    console.log("enterScript");
};

// Exit a parse tree produced by PigeonParser#script.
HtmlPigeonListener.prototype.exitScript = function(ctx) {
    console.log("exitScript");
};


// Enter a parse tree produced by PigeonParser#pigeoncommands.
HtmlPigeonListener.prototype.enterPigeoncommands = function(ctx) {
    console.log("enterPigeonCommands");
};

// Exit a parse tree produced by PigeonParser#pigeoncommands.
HtmlPigeonListener.prototype.exitPigeoncommands = function(ctx) {
    console.log("exitPigeonCommands");
};


// Enter a parse tree produced by PigeonParser#promoter.
HtmlPigeonListener.prototype.enterPromoter = function(ctx) {
    console.log("enterPromoter");
};

// Exit a parse tree produced by PigeonParser#promoter.
HtmlPigeonListener.prototype.exitPromoter = function(ctx) {
    console.log("exitPromoter");
};


// Enter a parse tree produced by PigeonParser#repressor.
HtmlPigeonListener.prototype.enterRepressor = function(ctx) {
    console.log("enterRepressor");
};

// Exit a parse tree produced by PigeonParser#repressor.
HtmlPigeonListener.prototype.exitRepressor = function(ctx) {
    console.log("exitRepressor");
};


// Enter a parse tree produced by PigeonParser#codingseq.
HtmlPigeonListener.prototype.enterCodingseq = function(ctx) {
    console.log("enterCodingseq");
};

// Exit a parse tree produced by PigeonParser#codingseq.
HtmlPigeonListener.prototype.exitCodingseq = function(ctx) {
    console.log("exitCodingseq");
};


// Enter a parse tree produced by PigeonParser#transcription.
HtmlPigeonListener.prototype.enterTranscription = function(ctx) {
    console.log("enterTranscription");
};

// Exit a parse tree produced by PigeonParser#transcription.
HtmlPigeonListener.prototype.exitTranscription = function(ctx) {
    console.log("exitTranscription");
};


// Enter a parse tree produced by PigeonParser#stop.
HtmlPigeonListener.prototype.enterStop = function(ctx) {
    console.log("exitTranscription");

};

// Exit a parse tree produced by PigeonParser#stop.
HtmlPigeonListener.prototype.exitStop = function(ctx) {
    console.log("enterStop");

};


// Enter a parse tree produced by PigeonParser#operator.
HtmlPigeonListener.prototype.enterOperator = function(ctx) {
    console.log("enterOperator");

};

// Exit a parse tree produced by PigeonParser#operator.
HtmlPigeonListener.prototype.exitOperator = function(ctx) {
    console.log("exitOperator");

};


// Enter a parse tree produced by PigeonParser#degredationtag.
HtmlPigeonListener.prototype.enterDegredationtag = function(ctx) {
    console.log("enterDegredationtag");

};

// Exit a parse tree produced by PigeonParser#degredationtag.
HtmlPigeonListener.prototype.exitDegredationtag = function(ctx) {
    console.log("exitDegredationtag");

};


// Enter a parse tree produced by PigeonParser#righttriangle.
HtmlPigeonListener.prototype.enterRighttriangle = function(ctx) {
    console.log("enterRighttriangle");

};

// Exit a parse tree produced by PigeonParser#righttriangle.
HtmlPigeonListener.prototype.exitRighttriangle = function(ctx) {
    console.log("exitRighttriangle");

};


// Enter a parse tree produced by PigeonParser#lefttriangle.
HtmlPigeonListener.prototype.enterLefttriangle = function(ctx) {
    console.log("enterLefttriangle");

};

// Exit a parse tree produced by PigeonParser#lefttriangle.
HtmlPigeonListener.prototype.exitLefttriangle = function(ctx) {
    console.log("exitLefttriangle");

};


// Enter a parse tree produced by PigeonParser#dash.
HtmlPigeonListener.prototype.enterDash = function(ctx) {
    console.log("enterDash");

};

// Exit a parse tree produced by PigeonParser#dash.
HtmlPigeonListener.prototype.exitDash = function(ctx) {
    console.log("exitDash");

};


// Enter a parse tree produced by PigeonParser#period.
HtmlPigeonListener.prototype.enterPeriod = function(ctx) {
    console.log("enterPeriod");

};

// Exit a parse tree produced by PigeonParser#period.
HtmlPigeonListener.prototype.exitPeriod = function(ctx) {
    console.log("exitPeriod");

};


// Enter a parse tree produced by PigeonParser#space.
HtmlPigeonListener.prototype.enterSpace = function(ctx) {
    console.log("enterSpace");

};

// Exit a parse tree produced by PigeonParser#space.
HtmlPigeonListener.prototype.exitSpace = function(ctx) {
    console.log("exitSpace");

};


// Enter a parse tree produced by PigeonParser#bar.
HtmlPigeonListener.prototype.enterBar = function(ctx) {
    console.log("enterBar");

};

// Exit a parse tree produced by PigeonParser#bar.
HtmlPigeonListener.prototype.exitBar = function(ctx) {
    console.log("exitBar");

};


// Enter a parse tree produced by PigeonParser#label.
HtmlPigeonListener.prototype.enterLabel = function(ctx) {
    console.log("enterLabel");

};

// Exit a parse tree produced by PigeonParser#label.
HtmlPigeonListener.prototype.exitLabel = function(ctx) {
    console.log("exitLabel");


};


// Enter a parse tree produced by PigeonParser#color.
HtmlPigeonListener.prototype.enterColor = function(ctx) {
    console.log("enterColor");

};

// Exit a parse tree produced by PigeonParser#color.
HtmlPigeonListener.prototype.exitColor = function(ctx) {
    console.log("exitColor");

};


// Enter a parse tree produced by PigeonParser#arccommands.
HtmlPigeonListener.prototype.enterArccommands = function(ctx) {
    console.log("enterArccommands");

};

// Exit a parse tree produced by PigeonParser#arccommands.
HtmlPigeonListener.prototype.exitArccommands = function(ctx) {
    console.log("exitArccommands");

};





exports.HtmlPigeonListener = HtmlPigeonListener;