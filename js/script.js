// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example: 
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6

let diceRoll = 1;
const getRandomDiceRoll = function(sides=6) {
  diceRoll = Math.floor( Math.random() * sides ) + 1
}

// Here's a test roll, check the console!
function rollTheDice(){
  getRandomDiceRoll();
  showImage();
}

const showImage = function() {
  var img = document.createElement("img");
  img.src = "./img/dice"+ diceRoll + ".svg";
  document.querySelector("#dice").innerHTML = '<img src="'+img.src+'" height=150 width=150/>';
  document.querySelector("#caption").textContent = "You Rolled: "+ diceRoll;
  return null;
}

// 1) Call getRandomDiceRoll() and store the result as a variable named "diceRoll"

// 2) Update user interface (document), showing the diceface (svg image) that matches the roll number
const roleDiceButton = document.querySelector(`#roll_dice`)
roleDiceButton.addEventListener(`click`, rollTheDice)
window.addEventListener(`load`, rollTheDice)
// 3) Use `diceRoll` to update the label "You rolled: #" (replacing # with the roll)

// 4) Wrap the dice roll procedure in a function named rollTheDice(), call it from the console to test
