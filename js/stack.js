function stack(){

	this.expressions = new Array();

	this.push = function(value){
		this.expressions.push(value);
	};

	this.pop = function(){
		if(this.expressions.length==0) return null;
		return this.expressions.pop();
	};

	this.length = function(){
		return this.expressions.length;
	}

}