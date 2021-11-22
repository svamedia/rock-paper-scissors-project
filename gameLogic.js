const playerScore = 0;
const computerScore = 0;
const playerScore_span = document.getElementsByClassName("player-score");
const computerScore_span = document.getElementsByClassName("computer-score");
const scoreBoard_div = document.querySelector(".scorecard");
const gameMessage_div = document.querySelector(".game-message");
const paper_input = document.getElementById("p");
const rock_input = document.getElementById("r");
const scissor_input = document.getElementById("s");

function getComputerSelection() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(playerSelection) {
  console.log("$$$ " + playerSelection);
}

function main() {
  rock_input.addEventListener("click", function () {
    game("rock");
  });

  paper_input.addEventListener("click", function () {
    game("paper");
  });

  scissor_input.addEventListener("click", function () {
    game("scissor");
  });
}

main();
