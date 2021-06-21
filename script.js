let playerChoise;
let compChoise;
let random;

function compChoiseMake() {
    if (random == 1) {
        compChoise = "rock";
    } else if (random == 2) {
        compChoise = "paper";
    } else {
        compChoise = "scissors";
    }
}

function playRound(playerChoise, compChoise) {
    random = Math.floor(Math.random() * 3 + 1);
    compChoiseMake();
    if ((playerChoise == "rock"  && compChoise == "scissors") || (playerChoise == "paper"  && compChoise == "rock") || (playerChoise == "scissors"  && compChoise == "paper")) {
        return true;
    } else {
        return false;
    }
}





for (i = 0; i < 5; i++) {
    playerChoise = prompt("Choose and enter a 'Rock', 'Paper' or 'Scissors'");
    playRound(playerChoise, compChoise);
    console.log(compChoise, playerChoise, playRound(playerChoise, compChoise));
}