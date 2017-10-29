var number = "";
var code = "1234";

var addAster = function() {
	if (document.getElementById("asterisk").innerHTML.length != 4) {
		document.getElementById("asterisk").innerHTML += "*";
	}
}

var enter = function(thing) {
	number += thing;
	console.log(number);
}

var check = function() {
	if (number == code) {
		document.getElementById("checkComp").innerHTML = "Nice Job!";
		
	} else {
		
		document.getElementById("checkComp").innerHTML += "Try Again."
		
		if (number[0] == code[0]) {
			document.getElementById("checkOne").innerHTML = code[0];
		}
	
		if (number[1] == code[1]) {
			document.getElementById("checkTwo").innerHTML = code[1];
		}
	
		if (number[2] == code[2]) {
			document.getElementById("checkThree").innerHTML = code[2];
		}
	
		if (number[3] == code[3]) {
			document.getElementById("checkFour").innerHTML = code[3];
		}
	}
}

var restart = function() {
		number = "";
		console.log(number);
}
