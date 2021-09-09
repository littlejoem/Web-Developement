
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  playSound("sounds/" + randomChosenColour + ".mp3");

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(50);
  // return randomNumber;
}

function playSound(name) {
  var audio = new Audio(name);
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  console.log($("#" + currentColour).className);
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);

}

$("div .btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound("sounds/" + userChosenColour + ".mp3");
})
