function playerPlay() {
    let input = prompt("Rock, paper or scissors?").toLowerCase();
    return input;
}

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
        result = "Tie!🤝";
        return result;
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        result = `You win! ${playerSelection} beats ${computerSelection}.🎉`;
        return result;
    } else {
        result  = `You lose, ${computerSelection} beats ${playerSelection}.😥`;
        return result;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        console.log("Your choise is " + playerSelection + " and " + "computer choise is " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("----------------------------------------------------");
    }
}

game();