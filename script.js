let computerChoice;
// let UserInput = prompt("Make a choice: Rock, Paper or Scissor")

function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

computerChoice = getComputerChoice();

