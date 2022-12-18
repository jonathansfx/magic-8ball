// HTML Variables
let btnEl = document.getElementById("btn");
let outputEl = document.getElementById("output");

// Btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
// Input
let question = document.getElementById("input");

//If Statement
let randNum = Math.random();

// Probability
if (randNum < 0.2) {
outputEl.innerHTML ("Without a Doubt.")
  } else if (randNum < 0.4) {
outputEl.innerHTML ("As I see it, yes.")
  } else if (randNum < 0.6) {
outputEl.innerHTML ("Concentrate and ask again.")
  } else if (randNum < 0.8) {
outputEl.innerHTML ("Don't count on it.")
  } else {
outputEl.innerHTML ("Outlook not so good.")
  }


}
