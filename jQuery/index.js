$("h1").addClass("big-title");

$("h1").click(function() {
  $("h1").css("color", "yellow")
});

$("button").on("click", function() {
  $("h1").fadeOut("fast");
});
