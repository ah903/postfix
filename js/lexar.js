
function lexar(){


	this.isOperator = function(value){
		return ("+-*/^".indexOf(value) >= 0);
	}

	this.isOperand = function(value){
		return !(isNaN(value))	
	}
}