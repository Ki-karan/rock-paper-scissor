function getHumanChoice() {
   let choice = prompt("what is your choice ?");
    return choice;
}

console.log(getHumanChoice())

function getComputerChoice() {
    let randomNum = Math.random();

    if ( randomNum < 0.34 ) {
        return "rock";  
    } else if (randomNum > 0.59 ) {
        return "paper";
    } else { 
        return "scissors";
    }
    
}
console.log(getComputerChoice());


