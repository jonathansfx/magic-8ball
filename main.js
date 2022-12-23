// Btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // HTML Var
  let input = document.getElementById("inputEl").value.toLowerCase();
  let output = document.getElementById("outputEl");

  // If Statement
  if (input === "does a magic 8ball actually work?") {
    output.innerHTML = "How dare you doubt me?!";
  } else if (input === "is javascript awesome?") {
    output.innerHTML = "Of Course!";
  } else if (input === "hello") {
    output.innerHTML = "Hi!";
  } else {
    let rand = Math.random();
    if (rand <= 0.2) {
      output.innerHTML = "Without a Doubt";
    } else if (rand <= 0.4) {
      output.innerHTML = "As I see it, yes.";
    } else if (rand <= 0.6) {
      output.innerHTML = "Don't count on it.";
    }
  }
}
