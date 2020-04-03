// Backend Logic
var prepareText = function(text) {
	var downcasedText = text.toLowerCase();
	var searchAndRemove = /[,.!?;'":><%$&*@#1234567890 ]/g;
	return downcasedText.replace(searchAndRemove,"");
};

var findColumns = function(string) {
	return Math.ceil(Math.sqrt(string.length));
};

var blocks = function(string) {
	var newString = "";
	for (var index = 0; index < string.length; index += 5) {
		newString += string.slice(index, index + 5) + " ";
	}
	return newString.slice(0, newString.length - 1);
};

var encrypt = function(string) {
	var string = prepareText(string);
	var newSentence = "";
	var columns = findColumns(string);
	for (var index1 = 0; index1 < columns; index1++) {
		for (var index2 = 0; index2 < string.length; index2 += columns) {
			newSentence += string.charAt(index2 + index1);
		}
	}
	return blocks(newSentence);
}

// Front End UI logic
$(document).ready(function(){
  $("form#crypto").submit(function(event){
    event.preventDefault();
    var raw = $('input#raw').val();
    var encrypted = encrypt(raw);
    $("#encrypted").text(encrypted);
    $("#output").show();
  });
});