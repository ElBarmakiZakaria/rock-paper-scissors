


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

let humanScore = 0;
let computerScore = 0;
let tries = 0;

function playGame(){
    tries++;
    document.getElementById("roundId").innerHTML = tries;

    var input = document.getElementById("inputtext").value;
    let computerChoice = getComputerChoice();

    document.getElementById("humanChoiceId").innerHTML = input;
    document.getElementById("cumputerChoiceId").innerHTML = computerChoice;


    let winner = playRound(input, computerChoice);  

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
            
    

}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    tries = 0;
    document.getElementById("humanScoreId").innerHTML = humanScore;
    document.getElementById("computerScoreId").innerHTML = computerScore;
    document.getElementById("humanChoiceId").innerHTML = "choising...";
    document.getElementById("cumputerChoiceId").innerHTML = "choising...";
    document.getElementById("result").innerHTML = " ";
    document.getElementById("roundId").innerHTML = tries;

}


