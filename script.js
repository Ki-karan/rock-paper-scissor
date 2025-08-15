function getHumanChoice() {
   let choice = prompt("what is your choice ?");
    return choice;
}



function getComputerChoice() {
    let randomNum = Math.random();

    if ( randomNum < 0.34 ) {
        return "rock";  
    } else if (randomNum > 0.67 ) {
        return "paper";
    } else { 
        return "scissors";
    }
    
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, ComputerChoice) {
    console.log(humanChoice)
    console.log(ComputerChoice)
   
    if (humanChoice === ComputerChoice) {
        return "It's a tie! Both chose " + humanChoice;
    } else if ((humanChoice === "scissors" && ComputerChoice === "paper") ||
            (humanChoice === "rock" && ComputerChoice === "scissors") ||
            (humanChoice === "paper" && ComputerChoice === "rock")) {
        humanScore++;
        return `You Win! ${humanChoice} beats ${ComputerChoice}`;;
    } else {
        computerScore++;
        return `You lose! ${ComputerChoice} beats ${humanChoice}`;
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));
console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);


