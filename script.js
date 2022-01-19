const rpsButtons = document.querySelectorAll("button")
const choiseDiv = document.querySelector(".choise")
const resultDiv = document.querySelector(".result")
const totalResult = document.querySelector(".total-result")
const score = document.querySelector(".current-score")

let userCounter = 0;
let compCounter = 0;

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
        result = `You win! ${playerSelection} beats ${computerSelection}🎉`;
        return result;
    } else {
        result  = `You lose, ${computerSelection} beats ${playerSelection}😥`;
        return result;
    }
}

function counter(a, b) {
    if (playRound(a, b) === `You win! ${a} beats ${b}🎉`) {
        userCounter++;
    } else if (playRound(a,b) === `You lose, ${b} beats ${a}😥`) {
        compCounter++;
    }
}

function getResult(a, b) {
    if (a === 5) {
        totalResult.textContent = "Win! 😎";
        a = 0;
    } else if (b === 5) {
        totalResult.textContent = "Lose 😩"
    }
}

function endGame(a, b) {
    if ((a === 5) || (b === 5)) {
        userCounter = 0;
        compCounter = 0;
        totalResult.textContent = ""
    }
}

rpsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        endGame(userCounter, compCounter)
        let computerSelection = computerPlay();
        choiseDiv.textContent = "Your choise is " + button.className + " and " + "computer choise is " + computerSelection;
        resultDiv.textContent = playRound(button.className, computerSelection)
        counter(button.className, computerSelection)
        score.textContent = "👧" + userCounter + " - " + compCounter + "🤖"
        getResult(userCounter, compCounter)
    })
});

