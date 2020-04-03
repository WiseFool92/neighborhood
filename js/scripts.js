// Backend Buisness Logic


function evaluateRaw(raw) {
	var rawArray = [];
	

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