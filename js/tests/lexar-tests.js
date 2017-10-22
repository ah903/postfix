function lexartest(){

    var lex = new lexar();
    console.log(lex.isOperator("+"));
    console.log(lex.isOperator("-"));
    console.log(lex.isOperator("*"));
    console.log(lex.isOperator("/"));
    console.log(lex.isOperator("^"));

    console.log(lex.isOperand("A"));
    console.log(lex.isOperand("1"));
    console.log(lex.isOperand("9"));
    console.log(lex.isOperand("10"));
    console.log(lex.isOperand("12.1"));
    console.log(lex.isOperand("1678.90"));
    console.log(lex.isOperand("-12"));

}