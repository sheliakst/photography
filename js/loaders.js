$(document).ready(function() {

    $("nav li").click(function(){
        $(".wrapper").addClass("hide");

    });
  setTimeout(function() {
    $(".preload").removeClass("addPreload");
    $(".wrapper").removeClass("shadow");
    $(".wrapper").addClass("show");
  }, 1000);
  $(".wrapper").remove("show");
});
