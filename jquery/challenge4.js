// Challenge 4/5
$(document).ready(function(){
  $("form").submit(function(event){
    var validInput = true;
    var name = $("#fullname").val();
    var address = $("#streetaddr").val();
    console.log(name);
    if (name == 0){
      $("#nameerrormsg").css("display", "block");
      event.preventDefault();
      validInput = false;
    } else {
      $("#nameerrormsg").css("display", "none");
    }
    if (address == 0){
      $("#addrerrormsg").css("display", "block");
      event.preventDefault();
      validInput = false;
    } else {
      $("#addrerrormsg").css("display", "none");
    }
  return validInput;
})
})