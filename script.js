let computerChoice;

// Store the input of the user and make the input of the user lowercase
let UserChoice = prompt("Make your choice: Rock, Paper or Scissor").toLowerCase();
console.log(UserChoice);

// The computer randomly makes a choice between rock, paper or scissors
function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// Store the selection of the computer
computerChoice = getComputerChoice();