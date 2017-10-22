function stacktest(){
 
    var expressionStack = new stack();

    expressionStack.push(12);
    expressionStack.push("A");
    console.log(expressionStack.length());
        		
    console.log(expressionStack.pop());
    console.log(expressionStack.length());
        		
    console.log(expressionStack.pop());
    console.log(expressionStack.length());

    console.log(expressionStack.pop());
    console.log(expressionStack.length());

}