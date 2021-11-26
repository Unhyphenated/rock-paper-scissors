// Pseudocode

// 1. Create a function that returns rock, paper or scissors.
function computerPlay() {
    let randomMove = Math.floor((Math.random() * 3));

    // Display the move performed by the computer
    if (randomMove == 0) {
        return console.log("Rock");
    } else if (randomMove == 1) {
        return console.log("Paper");
    } else {
        return console.log("Scissors");
    }
}