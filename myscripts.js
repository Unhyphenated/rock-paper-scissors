// 1. Create a function that returns rock, paper or scissors.
function computerPlay() {
    let randomMove = Math.floor((Math.random() * 3));

    // Display the move performed by the computer
    // For Rock
    if (randomMove == 0) {
        console.log("The computer chose Rock.")
        return 0;
        
    } // For Paper
    else if (randomMove == 1) {
        console.log("The computer chose Paper.")
        return 1;
    } // For Scissors
        else {
        console.log("The computer chose Scissors.")
        return 2;
    }
}

// 2. Create a function that plays out a round
// a. Assign value to a variable 'playerSelection' and 'computerSelection'
const playerSelection = window.prompt("Rock, Paper or Scissors?").toUpperCase();
const computerSelection = computerPlay();

// Win states = 1
// Draw states = 0
// Lose states = -1

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "ROCK") {
        if (computerSelection == 0) {
            console.log("It's a Draw! Let's go again.");
            return 0;

        } else if (computerSelection == 1) {
            console.log("You Lose! Paper beats Rock.");
            return (-1);

        } else {
            console.log("You Win!, Rock beats Scissors.");
            return 1;
        }
    }   else if (playerSelection == "PAPER") {
            if (computerSelection == 0) {
                console.log("You Win! Paper beats Rock."); 
                return 1;

            } else if (computerSelection == 1) {
                console.log("It's a Draw! Let's go again.");
                return 0;

            } else {
                console.log("You Lose!, Scissors beats Paper.");
                return (-1);
        } 
    }   else if (playerSelection == "SCISSORS") {
            if (computerSelection == 0) {
                console.log("You Lose! Rock beats Paper."); 
                return (-1);

            } else if (computerSelection == 1) {
                console.log("You Win! Scissors beats Paper.");
                return 1;

            } else {
                console.log("It's a Draw! Let's go again.");
                return 0;
            }
        } else {
            return console.log("Please choose between rock, paper or scissors.")
        }
    }   


// Revised version of playRound
// Capitalizes first letter of a string
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Displays user's choice
console.log("You chose " + capitalize(playerSelection) + ".");
console.log(playRound(playerSelection, computerSelection));

// 3. Create a function that plays out 5 rounds and declares a winner!
