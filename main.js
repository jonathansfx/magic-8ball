// Btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // HTML Var
  question = document.getElementById("input").value.toLowerCase();

  checkQuestion();
  randomResponse();

  // Functions
  function checkQuestion(question) {
    if (question == "") {
      output.innerHTML = "Please ask a question...";
    } else if (question == "does a magic 8 ball actually work?") {
      output.innerHTML = "How dare you doubt me! ";
    }
  }

  function randomResponse() {
    let rand = Math.random();
    if (rand <= 0.2) {
      output.innerHTML = "Without a Doubt.";
    } else if (rand <= 0.4) {
      output.innerHTML = "As I see it, yes.";
    } else if (rand <= 0.6) {
      output.innerHTML = "Concentrate and ask again.";
    } else if (rand <= 0.8) {
      output.innerHTML = "Don't count on it";
    } else output.innerHTML = "Outlook not so good.";
  }
}
