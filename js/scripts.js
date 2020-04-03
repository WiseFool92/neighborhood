// Backend Buisness Logic

function evaluateRaw(raw) {
	var rawArray = [];
	for (var i = 0; i <= raw; i++) {
		if (i.toString().includes("3")) {
			rawArray.push("won't you be my neighbor?");
	}
		else if (i.toString().includes("2")) {
			rawArray.push("boop");
	}
		else if (i.toString().includes("1")) {
			rawArray.push("beep");
	}
		else {
			rawArray.push(" " + i);
		}
	}
	return rawArray.join(" ");
};

// Front End UI logic

$(document).ready(function(){
  $("form#robo").submit(function(event){
		event.preventDefault();
		var raw = parseInt($("input#userInput").val());
    $("#output").text(evaluateRaw(raw));
	});
	
	$("#reverse").click(function(event) {
		event.preventDefault();
		var raw = parseInt($("#input#userInput").val());
		var rawReverse = evaluateRaw(raw).split();
		var revArr = rawReverse.reverse();
		var revOut = revArr.join();
		$("#output").text(revOut);
		console.log(revOut);
	})
});

