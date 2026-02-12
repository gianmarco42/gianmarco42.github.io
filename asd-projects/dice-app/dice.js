$(document).ready(function () {
  // Your code goes here
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", 50)
    .css("left", 50)
    .appendTo("#die");
    function makeDot(top, left, elementId) {
$("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", top)
    .css("left", left)
    .css("border-radius", "50%")
    .appendTo(elementID);
    }
makeDot(50, 50, "#die"); // middle middle
makeDot(25, 25, "#die"); // top left
makeDot(75, 75, "#die"); // bottom right
function rollDie(dieId) {
  console.log("clicked");
  var randomNum = Math.ceil(Math.random() * 6);
  console.log(randomNum);
}

function handleClick() {
  rollDie("#die");
}

$("#die").on("click", handleClick);
});