let humanScore = 0;
let computerScore = 0;

const button = document.querySelectorAll('button').forEach(button => 
    button.addEventListener('click', () =>{
        const finalResult = document.createElement('div');
        if (humanScore === 5){
            resultCont.textContent = '';
            finalResult.textContent = "YOU WIN THE GAMEEEEEEE!!!!!"
            resultCont.appendChild(finalResult);
        }else if (computerScore === 5){
            resultCont.textContent = '';
            finalResult.textContent = "YOU LOSE THE GAMEEEEEEE!!!!!"
            resultCont.appendChild(finalResult); 
        }else{
            playRound(button.innerHTML);
        }
    })
);
const resultCont = document.querySelector('.result');
resultCont.style.paddingTop = '21px';
function playRound(userChoice){
    let computerChoice = Math.floor(Math.random()*(3-1+1)+1);
    const result = document.createElement('div');
    const UserScore = document.createElement('div');
    const compScore = document.createElement('div');
    result.textContent = "Result: "
    UserScore.textContent = "User Score: "
    compScore.textContent = "Computer Score: "
    if ((computerChoice === 1 && userChoice.toString().toLowerCase() === "rock") || (computerChoice === 2 && userChoice.toString().toLowerCase()==="paper") || (computerChoice=== 3 && userChoice.toString().toLowerCase() === "scissor")){
        result.textContent += "DRAW!!!";
    }else if ((computerChoice === 1 && userChoice.toString().toLowerCase()==="paper") || (computerChoice === 2 && userChoice.toString().toLowerCase() ==="scissor") || (computerChoice === 3 && userChoice.toString().toLowerCase() === "rock")){
        result.textContent += "YOU WINNNNNNN!!!!!!!";
        humanScore++;
    }else{
        result.textContent += "YOU LOSE";
        computerScore++;
    }

    UserScore.textContent += humanScore;
    compScore.textContent += computerScore;
    resultCont.textContent = '';
    resultCont.appendChild(result);
    resultCont.appendChild(UserScore);
    resultCont.appendChild(compScore);
}


