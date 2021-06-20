let compPick =  Math.floor(Math.random() * 3);

function computerPlay() {
    if (compPick === 0) {
        return compPick = "Rock";
    } else if(compPick === 1) {
        return compPick = "Paper";
    } else {
        return compPick = "Scissors";
    }
}

console.log(computerPlay());
