console.log("working");
var images = $("img");
var message = "Hover over an image below."
images.each(function (){
  images.mouseover(function(){
    $('#image').css("backgroundImage", 'url(' +this.src+')');
    $('#image').html(this.alt);
  })
  images.mouseout(function(){
    $('#image').css("backgroundImage", 'url()');
    $('#image').html(msg);
  })
  images.focus(function(){
    $('#image').css("backgroundImage", 'url(' +this.src+')');
    $('#image').html(this.alt);
  })
  images.blur(function(){
    $('#image').css("backgroundImage", 'url()');
    $('#image').html(message);
  })
})
