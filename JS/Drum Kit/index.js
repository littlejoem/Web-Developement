var buttons = document.querySelectorAll(".drum")
for (var key of buttons) {
  key.addEventListener("click", handleClick);
}

function handleClick() {
  alert('"' + key.className + '"' + " got clicked!");
}
