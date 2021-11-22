let playerScore = 0;
let computerScore = 0;
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

function win() {
  playerScore++;
  console.log("You WIN!");
  console.log(playerScore);
}

function lose() {
  console.log("You LOSE!");
}

function tie() {
  console.log("TIE GAME!");
}

function game(playerSelection) {
  const computerSelection = getComputerSelection();
  switch (playerSelection + computerSelection) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win();
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose();
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie();
      break;
  }
}

function main() {
  rock_input.addEventListener("click", function () {
    game("rock");
  });

  paper_input.addEventListener("click", function () {
    game("paper");
  });

  scissor_input.addEventListener("click", function () {
    game("scissors");
  });
}

main();
