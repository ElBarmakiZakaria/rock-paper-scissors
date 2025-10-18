


function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissor"];
    return choices[num];
}





function playRound(input, computerChoice){
    if (input === "rock"){
        if (computerChoice === "rock"){
            return "draw";
        }else if(computerChoice === "paper"){
            return "computer";
        }else if(computerChoice === "scissor"){
            return "human";
        }
    }else if (input === "paper"){
        if (computerChoice === "rock"){
            return "human";
        }else if(computerChoice === "paper"){
            return "draw";
        }else if(computerChoice === "scissor"){
            return "computer";
        }
    }else {
        if (computerChoice === "rock"){
            return "computer";
        }else if(computerChoice === "paper"){
            return "human";
        }else if(computerChoice === "scissor"){
            return "draw";
        }
    }
}

function showResult(humanScore, computerScore){
    document.getElementById("message-container").style.visibility = "visible";
    let massageTitle = document.getElementById("message-title");
    let winnerAnnouncement = document.getElementById("winner-announcement");
    let humanResultDisplay = document.getElementById("human-result");
    let computerResultDisplay = document.getElementById("Computer-result");

    if (humanScore > computerScore){
        massageTitle.innerHTML = "Congradulation :)";
        winnerAnnouncement.innerHTML = "YOU WON!";
        humanResultDisplay.innerHTML = humanScore;
        humanResultDisplay.style.color = "green"
        computerResultDisplay.innerHTML = computerScore;
        computerResultDisplay.style.color = "red"

    } else if (humanScore < computerScore) {
        massageTitle.innerHTML = "Hard Luck :(";
        winnerAnnouncement.innerHTML = "YOU LOST!";
        humanResultDisplay.innerHTML = humanScore;
        humanResultDisplay.style.color = "red"
        computerResultDisplay.innerHTML = computerScore;
        computerResultDisplay.style.color = "green"
    } else {
        massageTitle.innerHTML = "Next Time :/";
        winnerAnnouncement.innerHTML = "IT'S A DRAW!";
        humanResultDisplay.innerHTML = humanScore;
        humanResultDisplay.style.color = "black"
        computerResultDisplay.innerHTML = computerScore;
        computerResultDisplay.style.color = "black"
    }

}

let humanScore = 0;
let computerScore = 0;
let tries = 0;

function playGame(){
    tries++
    document.getElementById("roundId").innerHTML = tries;

    var humanInput = document.getElementById("human-choice").value;
    let computerChoice = getComputerChoice();

    document.getElementById("cumputerChoiceId").innerHTML = computerChoice;


    let winner = playRound(humanInput, computerChoice);  

    if (winner === "human"){
        document.getElementById("result").innerHTML = "YOU WON :)";
        humanScore++;
    }else if(winner === "computer"){
        document.getElementById("result").innerHTML = "YOU LOST :)";
        computerScore++;
    }else {
        document.getElementById("result").innerHTML = "IT DRAW!!";
    }

    // console.log(`YOUR SCORE ${humanScore} | COMPUTER SCORE ${computerScore}`);

    document.getElementById("humanScoreId").innerHTML = humanScore;
    document.getElementById("computerScoreId").innerHTML = computerScore;


    if (tries == 5) {
        showResult(humanScore, computerScore);
    }

}



function resetGame(){
    humanScore = 0;
    computerScore = 0;
    tries = 0;
    document.getElementById("humanScoreId").innerHTML = humanScore;
    document.getElementById("computerScoreId").innerHTML = computerScore;
    document.getElementById("cumputerChoiceId").innerHTML = "choising...";
    document.getElementById("result").innerHTML = "result";
    document.getElementById("roundId").innerHTML = tries;
    document.getElementById("message-container").style.visibility = "hidden";

}


