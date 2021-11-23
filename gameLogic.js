let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scorecard");
const gameMessage_p = document.querySelector(".game-message > p");
const paper_input = document.getElementById("paper");
const rock_input = document.getElementById("rock");
const scissor_input = document.getElementById("scissors");

function getComputerSelection() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function upperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function win(playerSelection, computerSelection) {
  const playerSelection_input = document.getElementById(playerSelection);
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  gameMessage_p.innerHTML = `You WIN! ${upperCase(
    playerSelection
  )} beats ${upperCase(computerSelection)}`;
  playerSelection_input.classList.add("winner-glow");
  setTimeout(() => {
    playerSelection_input.classList.remove("winner-glow");
  }, 300);
}

function lose(playerSelection, computerSelection) {
  const playerSelection_input = document.getElementById(playerSelection);
  computerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  gameMessage_p.innerHTML = `You LOSE! ${upperCase(
    computerSelection
  )} beats ${upperCase(playerSelection)}`;
  playerSelection_input.classList.add("loser-glow");
  setTimeout(() => {
    playerSelection_input.classList.remove("loser-glow");
  }, 300);
}

function tie(playerSelection) {
  const playerSelection_input = document.getElementById(playerSelection);
  gameMessage_p.innerHTML = `TIE GAME! you both chose ${upperCase(
    playerSelection
  )}`;
  playerSelection_input.classList.add("tiegame-glow");
  setTimeout(() => {
    playerSelection_input.classList.remove("tiegame-glow");
  }, 300);
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
