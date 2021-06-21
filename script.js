function playGame() {
    for (i = 0; i < 5; i++) {
        let playerSelection =  playerPlay().toLowerCase();
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

        function playerPlay() {
            return prompt("Choose and enter 'Rock', 'Paper' or 'Scissors'");
        }

        function playRound(playerSelection, computerSelection) {
            if (playerSelection == computerSelection) {
                return "Tie"
            } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
                return "You win!";
            } else {
                return "You loose :("
            }
        }

        console.log(playRound(playerSelection, computerSelection));
        console.log("You choosed", playerSelection, "and computer choosed", computerSelection);
    }
}   
playGame(); 