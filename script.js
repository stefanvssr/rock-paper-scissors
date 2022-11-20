let playerPoints = 0;
let computerPoints = 0;

const computerPointsNode = document.querySelector(".computer-points");
const playerPointsNode = document.querySelector(".player-points");
const resultTextNode = document.querySelector(".result");
const resetButton = document.querySelector(".reset");
const buttons = document.querySelectorAll(".btn-rps");

buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
        let playerChoice = e.target.value;
        let computerChoice = getComputerChoice();
        let results = playRound(playerChoice, computerChoice);

        game(playerChoice, computerChoice, results);
    });
});

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

function endGame() {
    if (playerPoints === 5 || computerPoints === 5 ) {
        buttons.forEach( (button) => {
            button.disabled = true;
        });

        resetButton.style.display = "inline-block";
    }

    if ( playerPoints === 5 ) {
        playerPointsNode.textContent = `${playerPoints} (You win!)`;
    } else if ( computerPoints === 5 ) {
        playerPointsNode.textContent = `${playerPoints} (You lose!)`;
    }
}

function resetGame() {
    resetButton.addEventListener('click', () => {
        resetButton.style.display = "none";

        playerPoints = 0;
        computerPoints = 0;
        playerPointsNode.textContent = 0;
        computerPointsNode.textContent = 0;
        resultTextNode.textContent = "";

        buttons.forEach( (button) => {
            button.disabled = false;
        });


    });
}

function game(user, computer, result) {
    let resultText = result[0];
    let resultNumber = result[1];

    if (resultNumber === 1) {
        playerPoints++
    } else if (resultNumber === 0) {
        computerPoints++
    }

    resultTextNode.textContent = resultText;
    playerPointsNode.textContent = playerPoints;
    computerPointsNode.textContent = computerPoints;

    endGame();
    resetGame();
}