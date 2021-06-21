let playerSelection = prompt("Choose and enter 'Rock', 'Paper' or 'Scissors'");
let computerSelection = computerPlay();

function computerPlay() {
    let rndm = Math.floor(Math.random() * 3 + 1);
    if (rndm == 1) {
        return "rock";
    } else if (rndm == 2) {
        return "paper";
    } else if (rndm == 3) {
        return "scissors";
    } else {
        return ""
    }
}

console.log(computerSelection, playerSelection);