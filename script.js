let playerScore = 0;
let computerScore = 0;
let draws = 0;
const SELECTION = ["rock", "paper", "scissors"];
// variables with the winning messages
const playerWinsRound = "You win this round!"
const computerWinsRound = "Computer wins this round!"
const draw = "It's a draw! No one wins!"
const playerWins = "You win the game! Hard fought victory!"
const computerWins = "Computer takes the win! Better luck next time!"

// A function that will be the computers play, that will  return rock, paper, or scissors
function computerInput() {
    return SELECTION[Math.floor(Math.random() * 3)];
}

// Function that plays a single round of Rock, paper, scissors. 
function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;

    //Compares Players answer with Computers
    // Refractor of the if / else statements
    if (player === computer) {
        return draw;
    } else if (player === "rock" && computer === "scissors") {
        return playerWinsRound;
    } else if (player === "paper" && computer === "rock") {
        return playerWinsRound;
    } else if (player === "scissors" && computer === "paper") {
        return playerWinsRound;
    } else {
        return computerWinsRound;
    }
}

// Score keeping function and logs winning messages based on score
function gameScore(result) {
    if (result === playerWinsRound) {
        playerScore++;
    } else if (result === draw) {
        draws++;
    } else {
        computerScore++;
    }
    if (playerScore === 5) {
        console.log(playerWins);
    }
    if (computerScore === 5) {
        console.log(computerWins);
    }
}

// Play again function
function playAgain() {
    let playAgain = confirm("Play Again?");
    if (playAgain) {
        location.reload();
    } else {
        window.alert("Game Over");
    }
}

// Function that makes the game 5 rounds and keeps score and reports the winner at the end
// for (i = 0; i <= 1000; i++) {
//     const playerSelection = prompt("Choose! Rock, Paper, or Scissors?").toLowerCase();
//     const computerSelection = computerInput();
//     const roundResult = playRound(playerSelection, computerSelection);
//     console.log("You: " + playerSelection + " | " + "Computer: " + computerSelection);
//     console.log(roundResult);
//     gameScore(roundResult);
//     console.log("Score: " + playerScore + " | " + "Computer: " + computerScore);

//     if (playerScore === 5 || computerScore === 5) {
//         playAgain();
//         break;
//     }
// }