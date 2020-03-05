grammar Pigeon;

/*
Parser Rules
*/
script
    : pigeoncommands+
      (arccommands+)?
      EOF
    ;

pigeoncommands
    :  promoter
    |  repressor
    |  codingseq
    |  transcription
    |  stop
    |  operator
    |  degredationtag
    |  righttriangle
    |  lefttriangle
    |  dash
    |  period
    |  bar
    ;

// promoter, repressor, coding sequence, and transcription unit
// added (label | 'p')? to account for user labeling glyph with same character as the glyph command
// i.e. if the user inputs p p 13 - the label is also p - true for most components - there might be a
// more elegant way to fix that
promoter : ('<')? 'p' WS? label? WS? color? WS? ignorecolor? NL+ ;
repressor : ('<')? 'r' WS? label?  WS? color? WS? ignorecolor? NL+ ;
codingseq : ('<')? 'c' WS? label?  WS? color? WS? ignorecolor? NL+ ;
transcription : ('<')? 't' WS? label?  WS? color? WS? ignorecolor? NL+ ;


// stop, operator, degredation tag, left and right triangle
stop : 's' WS? label?  WS? color? WS? ignorecolor? NL+;
operator : 'o' WS? label?  WS? color? WS? ignorecolor? NL+;
degredationtag : 'd' WS? label?  WS? color? WS? ignorecolor? NL+;
righttriangle : '>' WS? label? WS? color? WS? ignorecolor? NL+ ; // not sure this need labels
lefttriangle : '<' WS? label? WS? color? WS? ignorecolor? NL+ ; // not sure this needs labels


// What are these commands for? - have not seen a sample script where they are ever used
dash : '-'WS? label? WS? color? WS? ignorecolor? NL;
period : '.' WS? label? WS? color? WS? ignorecolor? NL;
bar : '|' WS? label? WS? color? WS? ignorecolor? NL;

// lab, colors and the nl tag
label : (ID | ID INT | 'p' INT? | 'r' INT? | 'c'INT? | 't' INT? | 's' INT? | 'o' INT? | 'd'INT?  | '>' INT? | '<'INT? ); // labels can also be the same as the glyph command
color : INT;
ignorecolor : 'nl';


arccommands
    :  label WS? arc WS? label NL
     | label WS? arc WS? label'-'label NL
    ;

arc : ('ind' | 'rep');

/*
Lexer Rules
*/

ID  :	('a'..'z'|'A'..'Z'|'_')+ ;
INT :   [0-9]+ ;
SK  :   [ \t\r]+ -> skip ;
WS  :   ' '+;
NL : ( '\r' ? '\n' | '\r' )+;


