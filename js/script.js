//pure js
//fetch inputs from form
var names=document.getElementById("name").value;
var emails=document.getElementById("email").value;
function inputs(){
  alert(names+"we have received your message. Thank you for reaching out to us.")
};
//jquery
$(document).ready(function() {
  $(".clickable1").click(function() {
    $(".design-hidden").toggle();
    $(".design-showing").toggle();
  });
});
$(document).ready(function() {
  $(".clickable2").click(function() {
    $(".development-hidden").toggle();
    $(".development-showing").toggle();
  });
});
$(document).ready(function() {
  $(".clickable3").click(function() {
    $(".product-hidden").toggle();
    $(".product-showing").toggle();
  });
});
$(document).ready(function{
  $(button[type=submit]).click(
    alert(names +"we have received your message. Thank you for reaching out to us.")
  )
})
