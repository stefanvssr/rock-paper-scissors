let computerChoice;

// Store the input of the user and make the input of the user lowercase
let userChoice = prompt("Make your choice: Rock, Paper or Scissor").toLowerCase();

// The computer randomly makes a choice between rock, paper or scissors
function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// Store the selection of the computer
computerChoice = getComputerChoice();
console.log(computerChoice);

// We will check if the playerSelection (userChoice) beats the computerSelection (computerChoice)
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    } else {
        return "Error! You didn't choose Rock, Paper or Scissors";
    }
}

console.log(playRound(userChoice, computerChoice));