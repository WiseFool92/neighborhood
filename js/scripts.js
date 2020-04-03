// Backend Logic
function evaluateRaw(raw) {
	if (raw)
}

function evaluateRaw(raw) {
	var rawArray = raw.split("");
	for (let index = 0; < rawArray.)

	return rawArray;
}

// Front End UI logic
$(document).ready(function(){
  $("form#robo").submit(function(event){
    event.preventDefault();
		
		var raw = $("#input").val();
    $("#output").text(evaluateRaw(raw));
  });
});