let humanScore = 0;
let computerScore = 0;

function playRound(){
    let computerChoice = Math.floor(Math.random()*(3-1+1)+1);
    let userChoice = prompt("Type Rock, Paper or Scissor");
    if ((computerChoice === 1 && userChoice.toLowerCase() === "rock") || (computerChoice === 2 && userChoice.toLowerCase()==="paper") || (computerChoice=== 3 && userChoice.toLowerCase() === "scissor")){
        console.log("DRAW!!!");
    }else if ((computerChoice === 1 && userChoice.toLowerCase()==="paper") || (computerChoice === 2 && userChoice.toLowerCase() ==="scissor") || (computerChoice === 3 && userChoice.toLowerCase() === "rock")){
        console.log("YOU WINNNNNNN!!!!!!!");
        humanScore++;
    }else{
        console.log("YOU LOSE");
        computerScore++;
    }
}

function playGame(){
    for (i = 0; i<5; i++){
        playRound();
        console.log("Your Score:" +humanScore);
        console.log("Computer Score:" +computerScore);
    }
    if (humanScore>computerScore){
        console.log("YOU ARE THE WINNERRRRRRR!!!!!!!");
    }else{
        console.log("YOU ARE THE LOSEERRRRRRR!!!!!!!"); 
    }
}

playGame();