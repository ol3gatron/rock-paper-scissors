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