// Capitalizes first letter of a string
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

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
    let playerPoint = 0;
    if (playerSelection == computerSelection) {
        console.log(`It's a tie! You both chose ${playerSelection}`)
    }   else if(
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock") 
    ) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }   else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerPoint = 1;
    }
        return playerPoint;
}

// 3. Create a function that that plays a best of 5 rounds and call it game()
    // Declare a variable such as roundsTotal = 5
    // Declare a variable of the number of rounds played (roundsPlayed)
    // Create a while loop that evaluates the condition (roundsPlayed < roundsTotal)
        // Declare a variable that requires input from user 
            // Create a condition that evaluates the user's input
                // If user's input is invalid
                    // Reiterate previous condition 
                // If user's input is valid 
                    // Win
                        // Player score increments by 1
                    // roundsPlayed increments by 1 
    // Create an if statement that evaluates the score and displays win or lose 

function game(roundsTotal = 5) {
    let roundsPlayed = 0;
    let playerScore = 0;

    while(roundsPlayed < roundsTotal) {
        playerSelection = window.prompt("What'll it be? Rock, paper or scissors?").toLowerCase();
        
        if (
            (playerSelection != "rock") &&
            (playerSelection != "paper") &&
            (playerSelection != "scissors")
        )   {
            console.log("Please input a valid option.")
            continue
        }   
            let computerSelection = computerPlay().toLowerCase();
            if (playerSelection == computerSelection) {
                console.log("You tied!");
                continue;
        }   
            else {
                playerScore += playRound(playerSelection, computerSelection);
                ++roundsPlayed;      
        }
        
    }
    if (playerScore > roundsTotal/2) {
            console.log(`You won ${playerScore} out of ${roundsTotal} games!`);
        }   else {
                console.log(`You lost ${roundsTotal - playerScore} out of ${roundsTotal} games!`);
            }
        }
