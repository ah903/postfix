require(["lexar"],function(lexar){
    
    var exprlexar = new lexar();
    
    console.log("Lexar Basic Tests ......................");
    console.log(exprlexar.isOperator("+") == true);
    console.log(exprlexar.isOperator("-") == true);
    console.log(exprlexar.isOperator("*") == true);
    console.log(exprlexar.isOperator("/") == true);
    console.log(exprlexar.isOperator("^") == true);
    console.log(exprlexar.isOperator("A") == false);
    
    console.log(exprlexar.isOperand("A")       == false);
    console.log(exprlexar.isOperand("1")       == true);
    console.log(exprlexar.isOperand("9")       == true);
    console.log(exprlexar.isOperand("10")      == true);
    console.log(exprlexar.isOperand("12.1")    == true);
    console.log(exprlexar.isOperand("1678.90") == true);
    console.log(exprlexar.isOperand("-12")     == true);

    console.log("Lexar Evaluation Tests .................");
    console.log(exprlexar.evaluate("4 5 +")  == 9);
    console.log(exprlexar.evaluate("4 3 -")  == 1);
    console.log(exprlexar.evaluate("4 2 *")  == 8);
    console.log(exprlexar.evaluate("14 2 /") == 7);
    console.log(exprlexar.evaluate("5 3 ^")  == 125);

})

