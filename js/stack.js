/////////////////////////////////////////////////////////////////////////////////
// Module 		: 		stack.js
// Description	: 		Simple stack data abstratction based on an array
//						Defined as a module using Require AMD syntax
// Date			: 		Oct 2017
// Author		:       Andrew Hall  
/////////////////////////////////////////////////////////////////////////////////
define([], function() {
	
	var stack = function() {
    	
    	/////////////////////////////////////////////////////////////////////////
    	// Local Variables
    	/////////////////////////////////////////////////////////////////////////
    	var expressions = new Array();

    	/////////////////////////////////////////////////////////////////////////
    	// Public Interface (Push)
    	/////////////////////////////////////////////////////////////////////////
    	this.push = function(value){
			expressions.push(value);
		}

		/////////////////////////////////////////////////////////////////////////
    	// Public Interface (Pop)
    	/////////////////////////////////////////////////////////////////////////
		this.pop = function(){
			if(expressions.length==0) return null;
			return expressions.pop();
		}

		/////////////////////////////////////////////////////////////////////////
    	// Public Interface (Length)
    	/////////////////////////////////////////////////////////////////////////
		this.length = function(){
			return expressions.length;
		}

  	}
  	return stack;
});

