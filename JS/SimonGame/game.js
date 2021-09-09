
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  playSound("sounds/" + randomChosenColour + ".mp3");

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(50);
  level++;
  levelText(level);
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

function levelText(level) {
  if (level === 0) {
    $("#level-title").text("Press A Key to Start");
  } else {
    $("#level-title").text("Level " + level);
  }
}

$(document).keydown(function(event){
  if ($("#level-title").text() == "Press A Key to Start") {
    nextSequence();
  }
})

$("div .btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound("sounds/" + userChosenColour + ".mp3");
})
