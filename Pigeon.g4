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
    |  bar
    |  three
    |  five
    |  gene
    |  fseq
    |  zring
    |  xbar
    |  box
    ;


promoter : (invert 'p' | 'p') WS? label? WS? color? WS? ignorecolor? NL+ ;
repressor : (invert 'r' | 'r') WS? label? WS? color? WS? ignorecolor? NL+ ;
codingseq : (invert 'c' | 'c') WS? label?  WS? color? WS? ignorecolor? NL+ ;
transcription : (invert 't' | 't') WS? label?  WS? color? WS? ignorecolor? NL+ ;
gene : (invert 'g' | 'g') WS? label?  WS? color? WS? ignorecolor? NL+ ;
fseq : (invert 'f' | 'f') WS? label?  WS? color? WS? ignorecolor? NL+ ;



stop : 's' WS? label?  WS? color? WS? ignorecolor? NL+;
operator : 'o' WS? label?  WS? color? WS? ignorecolor? NL+;
degredationtag : 'd' WS? label?  WS? color? WS? ignorecolor? NL+;
righttriangle : '>' WS? label? color? WS? ignorecolor? NL+ ; // not sure this need labels
lefttriangle : '<' WS? label? WS? color? WS? ignorecolor? NL+ ; // not sure this needs labels
bar : '|' WS? label? WS? color? WS? ignorecolor? NL+ ;
three : '3' WS? label? WS? color? WS? ignorecolor? NL+ ;
five : '5' WS? label? WS? color? WS? ignorecolor? NL+ ;
zring : 'z' WS? label? WS? color? WS? ignorecolor? NL+ ;
xbar : 'x' WS? label? WS? color? WS? ignorecolor? NL+ ;
box : '?' WS? label? WS? color? WS? ignorecolor? NL+ ;



invert : '<';

label: (ID INT? ID?  | commands INT? | commands '3' | commands '5');

//color:('1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|'14');
color: (INT | '3' | '5');

ignorecolor : 'nl';

commands : ('?'|'3'|'5'|'p'|'<p'|'r'|'<r'|'c'|'<c'|'g'|'<g'|'f'|'<f'
            |'t'|'<t'|'s'|'o'|'>'|'<'|'|'|'z'|'x'|'d');


arccommands
    :  label WS? arc WS? label NL+
    ;

arc : ('ind' | 'rep');

/*
Lexer Rules
*/

ID  :	('a'..'z'|'A'..'Z'|'_' | '[' | ']')+ ;
INT :   [0-9]+ ;
//SK  :   [ \t\r]+ -> skip ;
LINE_COMMENT : '#' ~[\r\n]* -> skip;
WS  :   ' '+;
NL : ( '\r' ? '\n' | '\r' )+;


