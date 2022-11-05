let computerChoice;

// The computer randomly makes a choice between rock, paper or scissors
function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// We will check if the playerSelection (userChoice) beats the computerSelection (computerChoice)
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";

    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a Draw! Nobody wins";

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";

    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a Draw! Nobody wins";    

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";

    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a Draw! Nobody wins";

    } else {
        return "Error! You didn't choose Rock, Paper or Scissors";
    }
}


function game() {

    // This loop will play 5 times. So we play a 5 round game
    for(let i = 0; i < 5; i++) {
        // Store the input of the user and make the input of the user lowercase
        let userChoice = prompt("Make your choice: Rock, Paper or Scissor").toLowerCase();

        // Store the selection of the computer
        computerChoice = getComputerChoice();
        // Check what the choice of the computer is
        console.log(computerChoice);
        
        // Call the playGround function
        console.log(playRound(userChoice, computerChoice));
    }

}

game();