/////////////////////////////////////////////////////////////////////////////////
// Module 		: 		lexar.js
// Description	: 		Simple postfix expression parser and evaluator
//						Requires stack datatype as a dependnency which is
//						injected in as the stack variable thourgh Require
// Date			: 		Oct 2017
// Author		:       Andrew Hall  
/////////////////////////////////////////////////////////////////////////////////
define(["stack"], function(stack) {
	
	var lexar = function(){

		////////////////////////////////////////////////////////////////////////
		// Private Member variables
		////////////////////////////////////////////////////////////////////////
		 var explainer = new Array();


		////////////////////////////////////////////////////////////////////////
		// Public Interface Evaluate
		// Tokenises a postfix string and evaluates 
		////////////////////////////////////////////////////////////////////////
		this.evaluate = function(value){
			var expressionStack = new stack();
			var tokens = value.split(" "); 
			explainer = [];

			for(i=0; i < tokens.length; i++){
				if(this.isOperand(tokens[i])) {
					expressionStack.push(tokens[i]);
				}
				else if(this.isOperator(tokens[i])){
					if(expressionStack.length() >= 2){
						var v2 = expressionStack.pop();
						var v1 = expressionStack.pop();
						var ev = v1 + tokens[i] + v2;
						if(tokens[i]=="^") ev = "Math.pow(v1,v2)"
						var result = eval(ev);
						logEval(ev,result);
						expressionStack.push(result);
					}
				}
			}
			return expressionStack.pop();
		}


		////////////////////////////////////////////////////////////////////////
		// Public Interface IsOperator
		// Tests whether an expression is a valid operator
		////////////////////////////////////////////////////////////////////////
		this.isOperator = function(value){
			return ("+-*/^".indexOf(value) >= 0);
		}

		////////////////////////////////////////////////////////////////////////
		// Public Interface IsOperand
		// Tests whether an expression is a valid operand
		////////////////////////////////////////////////////////////////////////
		this.isOperand = function(value){
			return !(isNaN(value));
		}

		////////////////////////////////////////////////////////////////////////
		// Public Interface IsOperand
		// Tests whether an expression is a valid operand
		////////////////////////////////////////////////////////////////////////
		this.explainer = function(){
			return explainer;
		}		


		function logEval(expression, result){
			var logItem = expression + "=" + result;
			explainer.push(logItem);
		}

	}	

	return lexar;
});

