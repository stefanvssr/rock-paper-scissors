let computerChoice;

// Scores
let userScore = 0;
let computerScore = 0;

// The computer randomly makes a choice between rock, paper or scissors
function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// We will check if the playerSelection (userChoice) beats the computerSelection (computerChoice)
function playRound(playerSelection, computerSelection) {
    // Check if player beats the computer and will return a array with a string and a number. We will use the number in the game() function to check if the player or the computer gets points
    // 0 player lose, 1 player win, 2 draw nobody wins or if you make a typo
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return ["You Win! Rock beats Scissors", 1];

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return ["You Lose! Paper beats Rock", 0];

    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return ["It's a Draw! Nobody wins", 2];

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ["You Win! Paper beats Rock", 1];

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ["You Lose! Scissors beats Paper", 0];

    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return ["It's a Draw! Nobody wins", 2];    

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ["You Win! Scissors beats Paper", 1];

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ["You Lose! Rock beats Scissors", 0];

    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return ["It's a Draw! Nobody wins", 2];

    } else {
        return ["Error! You didn't choose Rock, Paper or Scissors", 2];
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
        
        // Call the playGround function and store the return values in a variable
        let results = playRound(userChoice, computerChoice);
        let resultText = results[0];
        let resultNumber = results[1];

        console.log(resultText);

        if (resultNumber === 1) {
            userScore++
        } else if (resultNumber === 0) {
            computerScore++
        } else {
            i--;
        }

        console.log(userScore);

        if ( i === 4 && userScore > computerScore ) {
            console.log("You Win!");
        } else if ( i === 4 && userScore < computerScore ) {
            console.log("You Lose!");
        }

    }

}

game();