const playerScore = 0;
const computerScore = 0;
const playerScore_span = document.getElementsByClassName("player-score");
const computerScore_span = document.getElementsByClassName("computer-score");
const scoreBoard_div = document.querySelector(".scorecard");
const gameMessage_div = document.querySelector(".game-message");
const paper_input = document.getElementById("p");
const rock_input = document.getElementById("r");
const scissor_input = document.getElementById("s");

function main() {
  rock_input.addEventListener("click", function () {
    console.log("hey you clicked on rock");
  });

  paper_input.addEventListener("click", function () {
    console.log("hey you clicked on paper");
  });

  scissor_input.addEventListener("click", function () {
    console.log("hey you clicked on scissors");
  });
}
