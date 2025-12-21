const getComputerChoise = () => {
    let randomNumber = Math.round(Math.random() * 2);
    switch (randomNumber) {
        case 0:
            return "Rock";
            break
        case 1:
            return "Paper";
            break
        case 2:
            return "Scissors";
            break
    }
}

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, getComputerChoise) => {
    switch (humanChoice) {
        case "Rock":
            if (getComputerChoise == "Paper") {
                computerScore += 1;
                return false;
            } else {
                if (getComputerChoise == "Scissors") {
                    humanScore += 1;
                    return true;
                }
            }
            break
        case "Paper":
            if (getComputerChoise == "Scissors") {
                computerScore += 1;
                return false;
            } else {
                if (getComputerChoise == "Rock") {
                    humanScore += 1;
                    return true;
                }
            }
            break
        case "Scissors":
            if (getComputerChoise == "Rock") {
                computerScore += 1;
                return false;
            } else {
                if (getComputerChoise == "Paper") {
                    humanScore += 1;
                    return true;
                }
            }
            break
    }
    return "tie"
}

let roundNum = 1;

const roundCounter = document.querySelector("#round");
const scoreCounter = document.querySelector("#score");
const websiteContent = document.querySelector(".website_content")
const trashTalker = document.createElement("p");
let trashTalk = "Begin if you dare .............";
trashTalker.textContent = trashTalk;
trashTalker.setAttribute("id","trashTalk")
websiteContent.append(trashTalker);

let roundOver = false;

const update = (humanWinState) => {
    if (roundOver === false) {
        const newScoreString = humanScore.toString() + ":" + computerScore.toString();
        scoreCounter.textContent = newScoreString
        if (humanWinState===true) {
            trashTalk = "1 point to the HUMANSSSSSSSSSSSSSSSSSSSS.";
            trashTalker.textContent = trashTalk;
        } else {
            if (humanWinState===false) {
                trashTalk = "1 point to the the robots that will kill us all.";
                trashTalker.textContent = trashTalk;
            } else {
                if (humanWinState === 'tie') {
                    trashTalk = "Nada.";
                    trashTalker.textContent = trashTalk;
                }
            }
        }
        if (roundNum != 5) {
            roundNum +=1;
            
        } else {
            roundOver = true;
            if (humanScore < computerScore) {
                trashTalk = "We have lost, the end is near.";
                trashTalker.textContent = trashTalk;
            } else {
                if (computerScore < humanScore) {
                    trashTalk = "Humans for the win, our inate concious ability to think still rains superior over any sillicon based state machine.";
                    trashTalker.textContent = trashTalk;
                } else {
                    trashTalk = "It appears that humans are at the verge of losing dominance or rock paper scissors to machines.";
                    trashTalker.textContent = trashTalk;
                }
            }
            
        }
        console.log(roundNum);
        const updatedRoundString = "(Round " + roundNum.toString() + "/5)";
        roundCounter.textContent = updatedRoundString;
    }
}

let resultHumanWin = false;
let compChoice = "none"

const buttons = document.querySelectorAll(".theChoiceButtons button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
        let compChoice = getComputerChoise()
        console.log(compChoice)
        resultHumanWin = playRound(button.id,compChoice);
        update(resultHumanWin);
        button.style["border-color"] = "black";
        setTimeout(() => {
            button.style["border-color"] = "transparent";
        }, 200);
         
    })
})