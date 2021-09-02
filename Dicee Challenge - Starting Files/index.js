var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageRandom1 ="images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageRandom2 ="images/dice" + randomNumber2 + ".png";

var image = document.querySelector(".img1");
image.setAttribute("src", imageRandom1);
var image = document.querySelector(".img2");
image.setAttribute("src", imageRandom2);

var message = "";
if (randomNumber1 > randomNumber2) {
  message = "🚩Player 1 won";
} else if (randomNumber1 < randomNumber2) {
  message = "Player 2 won🚩";
} else if (randomNumber1 === randomNumber2) {
  message = "Draw!";
}

var image = document.querySelector("h1");
image.innerHTML = message;
