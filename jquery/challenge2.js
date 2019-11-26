// Challenge 2/5
$(document).ready(function(){
  $("#useBilling").click(function(){
    if ($(this).is(":checked")){
      $("#home").prop('disabled', true);
      $('#home').val($('#billing').val());
    }
    else{
      $('#home').val(" ");
      $("#home").prop('disabled',false);
    }
  })
  })