
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  level++;
  levelText(level);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(50);
  playSound("sounds/" + randomChosenColour + ".mp3");

  gamePattern.push(randomChosenColour);
  console.log(gamePattern);

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
  console.log(gamePattern);
  console.log(userClickedPattern);
}

function checkAnswer() {
  for (var i = 0; i < userClickedPattern.length; i++) {
    if (gamePattern[i] != userClickedPattern[i]) {
      level = 0;
      console.log(userClickedPattern + "wrong");
      return("wrong");
    } else {
      // console.log(userClickedPattern + "success");
      if (userClickedPattern.length === gamePattern.length) {
        console.log("rowEnd");
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
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  levelText(level);
}

$(document).keydown(function(event){
  if ($("#level-title").text() == "Press A Key to Start") {
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
      setTimeout(function() {
        nextSequence();
      }, 1000);
    } else if (result === "wrong") {
      gameOver();
    }
  }
})
