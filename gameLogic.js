let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scorecard");
const gameMessage_p = document.querySelector(".game-message > p");
const paper_input = document.getElementById("p");
const rock_input = document.getElementById("r");
const scissor_input = document.getElementById("s");

function getComputerSelection() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function upperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function win(playerSelection, computerSelection) {
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  gameMessage_p.innerHTML = `You WIN! ${upperCase(
    playerSelection
  )} beats ${upperCase(computerSelection)}`;
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
      win(playerSelection, computerSelection);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(playerSelection, computerSelection);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie(playerSelection, computerSelection);
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
