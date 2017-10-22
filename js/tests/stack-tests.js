require(["stack"],function(stack){
    
    var expressionStack = new stack();

    console.log("Stack Evaluation Tests .................");
    expressionStack.push(12);
    expressionStack.push("A");
    console.log(expressionStack.length()==2);
                
    console.log(expressionStack.pop()=="A");
    console.log(expressionStack.length()==1);
                
    console.log(expressionStack.pop()==12);
    console.log(expressionStack.length()==0);

    console.log(expressionStack.pop()==null);
    console.log(expressionStack.length()==0);

})
