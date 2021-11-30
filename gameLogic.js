let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scorecard");
const gameMessage_div = document.querySelector(".game-message");
const gameMessage_p = document.querySelector(".game-message > p");
const paper_input = document.getElementById("paper");
const rock_input = document.getElementById("rock");
const scissor_input = document.getElementById("scissors");

// function turns images from hidded to visible once the player selects a choice
function showResult() {
  const results = document.querySelectorAll(".result");
  for (let i = 0; i < results.length; i++) {
    results[i].style.visibility = "visible";
  }
}

// checks playerSection & cpu's. Then assigns correct image in .result depending on choice
function displayImgResult(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      document.getElementById("player-result").src =
        "./rps-images/rock-icon.png";
      break;
    case "paper":
      document.getElementById("player-result").src =
        "./rps-images/paper-icon.png";
      break;
    case "scissors":
      document.getElementById("player-result").src =
        "./rps-images/scissor-icon.png";
      break;
  }
  switch (computerSelection) {
    case "rock":
      document.getElementById("cpu-result").src = "./rps-images/rock-icon.png";
      break;
    case "paper":
      document.getElementById("cpu-result").src = "./rps-images/paper-icon.png";
      break;
    case "scissors":
      document.getElementById("cpu-result").src =
        "./rps-images/scissor-icon.png";
      break;
  }
}

// calculates computers choice
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
  setTimeout(() => playerSelection_input.classList.remove("winner-glow"), 300);
  checkScores(playerScore, computerScore);
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
  setTimeout(() => playerSelection_input.classList.remove("loser-glow"), 300);
  checkScores(playerScore, computerScore);
}

function tie(playerSelection) {
  const playerSelection_input = document.getElementById(playerSelection);
  gameMessage_p.innerHTML = `TIE GAME! you both chose ${upperCase(
    playerSelection
  )}`;
  playerSelection_input.classList.add("tiegame-glow");
  setTimeout(() => playerSelection_input.classList.remove("tiegame-glow"), 300);
}

// compares players choice against cpu choice and executes correct function
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
  displayImgResult(playerSelection, computerSelection);
  showResult();
}

function main() {
  // rock_input.addEventListener("click", () => game("rock"));

  // paper_input.addEventListener("click", () => game("paper"));

  // scissor_input.addEventListener("click", () => game("scissors"));

  rock_input.onclick = function () {
    game("rock");
  };

  paper_input.onclick = function () {
    game("paper");
  };

  scissor_input.onclick = function () {
    game("scissors");
  };
}

function checkScores(playerScore, computerScore) {
  if (playerScore === 5 || computerScore === 5) {
    playAgain();
    disableInput();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  location.reload();
}

function disableInput() {
  const player_input = document.querySelectorAll("input");
  for (let i = 0; i < player_input.length; i++) {
    player_input[i].disabled = true;
  }
}

function playAgain() {
  let gameMessage_button = document.createElement("button");
  gameMessage_button.innerHTML = "Play again?";
  gameMessage_button.classList.add("play-again");
  gameMessage_div.appendChild(gameMessage_button);
  gameMessage_button.onclick = function () {
    resetGame();
  };
}

main();
