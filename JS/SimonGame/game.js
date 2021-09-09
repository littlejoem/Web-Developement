
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

$("div .btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound("sounds/" + userChosenColour + ".mp3");
})
