let playerSelection = prompt("Rock, paper or scissors?");
let computerSelection = computerPlay();

function computerPlay() {
    let result = Math.floor(Math.random() * 3 + 1);
    if (result === 1) {
        result = "rock"
    } else if (result === 2) {
        result = "paper"
    } else {
        result = "scissors"
    }
    return result;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}.`
    } else {
        return `You lose, ${computerSelection} beats ${playerSelection}.`
    }
}

console.log("Your choise is " + playerSelection);
console.log("Computer choise is " + computerSelection);
console.log(playRound(playerSelection, computerSelection));