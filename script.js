let playerSelection = prompt("Enter 'Rock', 'Paper' or 'Scissors'");
let compSelection = "str";
let random =  Math.floor(Math.random() * 3);

function computerPlay() {
    if (random === 0) {
        compSelection = "rock";
    } else if(random === 1) {
        compSelection = "paper";
    } else {
        compSelection = "scissors";
    }
}

computerPlay();

function play(playerSelection, compSelection) {
    if (playerSelection == "rock" && compSelection == "scissors") {
        console.log("You won!");
    } else if (playerSelection == "paper" && compSelection == "rock") {
        console.log("You won!");
    } else if (playerSelection == "scissors" && compSelection == "paper") {
        console.log("You won!");
    } else if (playerSelection == compSelection) {
        console.log("Tie!");
    } else {
        console.log("You lose!");
    }
}

console.log(playerSelection);
console.log(compSelection);


play(playerSelection, compSelection);