const resultsDiv = document.getElementById('results');

let humanScore = 0;
let computerScore = 0;

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
function updateResult(message) {
    resultsDiv.innerHTML = `
    <p>${message}</p>
    <p>Your score: ${humanScore}</p>
    <p>Computer score: ${computerScore}</p>`

    if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore === 5 ? "Congratulations! You win the game!" : "Sorry, you lose the game.";
    resultsDiv.innerHTML += `<h2>${winner}</h2>`;
    }
}

document.getElementById("rock").addEventListener("click" , () => {
    const result = playRound("rock", getComputerChoice());
    updateResult(result);
});

document.getElementById("paper").addEventListener("click" , () => {
    const result = playRound("paper", getComputerChoice());
    updateResult(result);
});

document.getElementById("scissor").addEventListener("click" , () => {
    const result = playRound("scissor", getComputerChoice());
    updateResult(result);
});

/*console.log(`\nFinal Scores:`);
console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);

if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
} else if (computerScore > humanScore) {
    console.log("Sorry, you lose the game.");
} else {
    console.log("It's a tie overall!");
}*/

