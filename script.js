function getHumanChoice() {
   let choice = prompt("what is your choice ?").toLowerCase();
    return choice;
}



function getComputerChoice() {
    let randomNum = Math.random();

    if ( randomNum < 0.34 ) {
        return "rock";  
    } else if (randomNum > 0.67 ) {
        return "paper";
    } else { 
        return "scissor";
    }
    
}

function playGame( ) {
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, ComputerChoice) {
    console.log(humanChoice)
    console.log(ComputerChoice)
   
    if (humanChoice === ComputerChoice) {
        return "It's a tie! Both chose " + humanChoice;
    } else if ((humanChoice === "scissor" && ComputerChoice === "paper") ||
            (humanChoice === "rock" && ComputerChoice === "scissor") ||
            (humanChoice === "paper" && ComputerChoice === "rock")) {
        humanScore++;
        return `You Win! ${humanChoice} beats ${ComputerChoice}`;;
    } else {
        computerScore++;
        return `You lose! ${ComputerChoice} beats ${humanChoice}`;
    }

}
for (let round = 1; round <= 5; round++) {
    console.log(`\nRound ${round}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}
console.log(`\nFinal Scores:`);
console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);

if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
} else if (computerScore > humanScore) {
    console.log("Sorry, you lose the game.");
} else {
    console.log("It's a tie overall!");
}
}
playGame();