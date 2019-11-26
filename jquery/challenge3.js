// Challenge 3/5
$(document).ready(function(){
	$("form").submit(function(onsubmit){
		var f = $('input[name="fruit"]');
		var y = $('input[name="standing"]');
		if((f.is(":checked")) && (y.is(":checked"))){
			return true;
		}
		alert("Pick a fruit and a year!");
		return false;
	})
})