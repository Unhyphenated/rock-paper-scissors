// Declaring variables
let playerSelection2;
let computerSelection2;
let computerScore = 0;
let playerScore = 0;

// Revised version of computerPlay
//Creating an array of possible options 
const choices = ["Rock", "Paper", "Scissors"];

// ~~ is the same as Math.floor() for positive indices
function computerPlay2() {
    return choices[~~(Math.random() * choices.length)]
}

// Revised version of playRound
playerSelection2 = window.prompt("Rock, Paper or Scissors?").toLowerCase();
function playRound2(playerSelection2, computerSelection2) {
    computerSelection2 = computerPlay2().toLowerCase();

    if (computerSelection2 == playerSelection2) {
        console.log("It's a tie")
    }   else if (
        (computerSelection2 == "rock" && playerSelection2 == "scissors") || 
        (computerSelection2 == "paper" && playerSelection2 == "rock") ||
        (computerSelection2 == "scissors" && playerSelection2 == "paper")
    ) {
        computerScore = ++computerScore;
        if (computerScore > 0) {
            `${computerSelection2} beats ${playerSelection2}.`;
        }   
    }   else {
        playerScore == ++playerScore;
        if (playerScore > 0) {
            `${playerSelection2} beats ${computerSelection2}.`
        }
    }
    
}
