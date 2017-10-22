/////////////////////////////////////////////////////////////////////////////////
// Module 		: 		main.js
// Description	: 		Main entry point for the progran. Loads Required modules
//                      Handles page events via jquery and calls processing 
//  					routines
// Date			: 		Oct 2017
// Author		:       Andrew Hall  
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Require JS Module Configuration
/////////////////////////////////////////////////////////////////////////////////
require.config({
 	paths: {
    	"jquery": "https://code.jquery.com/jquery-3.2.1.slim.min",
    	"popper": "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min",
    	"bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min",
    	"lexar": "js/lexar",
    	"stack": "js/stack",
        "stack-tests": "js/tests/stack-tests",
        "lexar-tests": "js/tests/lexar-tests",


  	}
});

require(["jquery", "stack-tests", "lexar-tests"],function($, stack, lexar){
    
 
})

/////////////////////////////////////////////////////////////////////////////////
// Event Handlers for the Page Using JQuery Dependency Injected via RequireJS
/////////////////////////////////////////////////////////////////////////////////
require(["jquery", "lexar"],function($, lexar){
	
	var exprLexar = new lexar();

	$("#infixtopostfix").click(function(){
    	$("#result").text("Infix Clicked");        	 
	});

	$("#postfixtoinfix").click(function(){
		var postfix = $("#postfix").val();
    	var result = exprLexar.evaluate(postfix);
    	var explain = exprLexar.explainer();
    	$("#result").text(result);  
    	$("#explain").text(explain);      	 
	});

})


