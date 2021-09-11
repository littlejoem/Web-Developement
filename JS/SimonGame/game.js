
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  level++;
  setTimeout(function() {
    levelText(level);
  }, 400);
  setTimeout(function() {
    $("#" + randomChosenColour).fadeOut(100).fadeIn(50);
    playSound("sounds/" + randomChosenColour + ".mp3");
  }, 1000);
  gamePattern.push(randomChosenColour);
  // console.log(gamePattern);

}

function playSound(name) {
  var audio = new Audio(name);
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function levelText(level) {
  if (level < 0) {
    $("#level-title").text("Game over, Press A Key to Start");
  }
  if (level === 0) {
    $("#level-title").text("Press A Key to Start");
  }
  if (level > 0) {
    $("#level-title").text("Level " + level);
  }

}

function checkAnswer() {
  for (var i = 0; i < userClickedPattern.length; i++) {
    if (gamePattern[i] != userClickedPattern[i]) {
      level = 0;
      // console.log(userClickedPattern + "wrong");
      return("wrong");
    } else {
      // console.log(userClickedPattern + "success");
      if (i === userClickedPattern.length - 1 &&
         userClickedPattern.length === gamePattern.length) {
        // console.log("rowEnd");
        // console.log(gamePattern);
        // console.log(userClickedPattern);
        userClickedPattern = [];
        return("rowEnd");
      }
    }
  }
}

function gameOver() {
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
  playSound("sounds/wrong.mp3");
  level = -1;
  gamePattern = [];
  userClickedPattern = [];
  levelText(level);
  level = 0;
}

$(document).keydown(function(event){
  if (level < 1) {
    nextSequence();
  }
})

$("div .btn").click(function() {
  if (level > 0) {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound("sounds/" + userChosenColour + ".mp3");

    var result = checkAnswer();
    if (result === "rowEnd") {
      nextSequence();
    } else if (result === "wrong") {
      gameOver();
    }
  }
})
