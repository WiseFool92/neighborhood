// Backend Logic


// Front End UI logic
$(document).ready(function(){
  $("form#crypto").submit(function(event){
    event.preventDefault();
    
    $("#output").show();
  });
});