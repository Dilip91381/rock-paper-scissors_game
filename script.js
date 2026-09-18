let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    const choices = ["rock", "paper", "scissors"];

    // Computer randomly chooses
    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    // Check winner
    if (playerChoice === computerChoice) {
        result = "It's a Draw! 🤝";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win! 🎉";
        playerScore++;
    }
    else {
        result = "Computer Wins! 🤖";
        computerScore++;
    }

    // Display choices
    document.getElementById("player-choice").textContent =
        "You: " + getEmoji(playerChoice) + " " + capitalize(playerChoice);

    document.getElementById("computer-choice").textContent =
        "Computer: " + getEmoji(computerChoice) + " " + capitalize(computerChoice);

    // Display result
    document.getElementById("result").textContent = result;

    // Update scores
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function getEmoji(choice) {
    if (choice === "rock") {
        return "🪨";
    }

    if (choice === "paper") {
        return "📄";
    }

    return "✂️";
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("player-score").textContent = "0";
    document.getElementById("computer-score").textContent = "0";

    document.getElementById("player-choice").textContent = "You: -";
    document.getElementById("computer-choice").textContent = "Computer: -";
    document.getElementById("result").textContent = "Make your choice!";
}