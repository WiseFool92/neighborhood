// Backend Buisness Logic


function evaluateRaw(raw) {
	var rawArray = [];
	for (var i = 0; i <= raw; i++) {
		if (i.toString().includes("2")){
			rawArray.push("boop");
	}
		else if (i.toString().includes("1")) {
			rawArray.push("beep");
		}
	}

	return rawArray;
};

// Front End UI logic
$(document).ready(function(){
  $("form#robo").submit(function(event){
    event.preventDefault();
		
		var raw = parseInt($("input#userInput").val());
    $("#output").text(evaluateRaw(raw));
  });
});