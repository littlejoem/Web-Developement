$("h1").addClass("big-title");

$("h1").click(function() {
  $("h1").css("color", "yellow")
});

$("input").keydown(function(event) {
  console.log(event.key);
});
