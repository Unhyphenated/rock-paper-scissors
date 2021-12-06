// Capitalizes first letter of a string
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
let playerScore = 0;
let computerScore = 0;
// Pseudocode
// Rock, Paper, Scissors Game
// 1. Create a function that randomly chooses an option from rock, paper and scissors and call it computerPlay()
    // Create an array that contains all possible options
    // Create a random number generator that outputs a number limited by the array's length
function computerPlay() {
    let myArray = ["rock", "paper", "scissors"]
    return myArray[Math.floor(Math.random() * myArray.length)];
}

// 2. Create a function that takes the playerSelection and computerSelection and output the playerScore and call it playRound()
    // Create conditions that evaluate all possible outcomes: loss, win, draw
    // Declare a variable that stores the player's score and have the function return that value

function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection == computerSelection) {
        result = `It's a tie! You both chose ${playerSelection}`
    }   
        else if(
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock") 
    ) {
        result = (`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore += 1;
        if (computerScore == 5) {
            result += "<br><br>I've won! Like you had a chance. Reload the page to match again." 
            disableButtons();
        }
    }   
        else {
            result = (`You win! ${playerSelection} beats ${computerSelection}`);
            playerScore += 1;
            if (playerScore == 5) {
                result += "<br><br>Darn! You've bested me, reload the page to match again."
                disableButtons();
            }
        }
    document.getElementById('results').innerHTML = result + 
    (`<br><br>Computer Score: ${computerScore}<br><br>Player Score: ${playerScore}`)
}




// Monday, December 6 2021: Add JavaScript for Button Portion

// Causes buttons to return the choices they represent (Example = Press 'rock' -> Returns 'rock' in console)
const buttons = document.querySelectorAll("button");

buttons.forEach(button => { 
    button.addEventListener('click', function(){
        playRound(button.className, computerPlay());
    })
})

// Disables buttons
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}