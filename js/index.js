$(document).ready(function() {
  $("nav  li").mouseover(function() {
    $("nav li").removeClass("Left");

    $("nav  li")
      .not($(this))
      .addClass("navLeft");
  });
  $("nav li ").mouseleave(function() {
    $("nav li").removeClass("navLeft");
  });






});
