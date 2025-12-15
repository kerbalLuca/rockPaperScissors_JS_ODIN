const getComputerChoise = () => {
    let randomNumber = Math.round(Math.random() * 2);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}
const getHumanChoice = () => {
    let humanNumber = Math.round(prompt("Please enter a exact number bettween 1-3 inclusive:"));
    switch (humanNumber) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            console.log("You input a number I can't process.");
    }
}

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, getComputerChoise) => {
    switch (humanChoice) {
        case "Rock":
            if (getComputerChoise == "Paper") {
                computerScore += 1;
                console.log("The robot plays " + getComputerChoise + " and destroys you.");
            } else {
                if (getComputerChoise == "Scissors") {
                    humanScore += 1;
                    console.log("The robot plays " + getComputerChoise + " and you destroy it.");
                }
            }
        case "Paper":
            if (getComputerChoise == "Scissor") {
                computerScore += 1;
                console.log("The robot plays " + getComputerChoise + " and destroys you.");
            } else {
                if (getComputerChoise == "Rock") {
                    humanScore += 1;
                    console.log("The robot plays " + getComputerChoise + " and you destroy it.");
                }
            }
        case "Scissor":
            if (getComputerChoise == "Rock") {
                computerScore += 1;
                console.log("The robot plays " + getComputerChoise + " and destroys you.");
            } else {
                if (getComputerChoise == "Paper") {
                    humanScore += 1;
                    console.log("The robot plays " + getComputerChoise + " and you destroy it.");
                }
            }
    }
}

function playGame () {
    humanScore = 0;
    computerScore = 0;
    playRound(getHumanChoice(),getComputerChoise());
    playRound(getHumanChoice(),getComputerChoise());
    playRound(getHumanChoice(),getComputerChoise());
    playRound(getHumanChoice(),getComputerChoise());
    playRound(getHumanChoice(),getComputerChoise());
}
playGame()
console.log("The final score is " + computerScore + " points for the computer and " + humanScore + " points for you.")