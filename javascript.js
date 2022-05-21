// console.log("MEOWWWW")
// console.log(Math.floor(Math.random(4) * 3) + 1);
// let turtle = "RRKWNWNFW"
// console.log(turtle.toLocaleLowerCase())
// console.log(computerPlay().toUpperCase())

function computerPlay(){
      // gives you a random number from 1 - 3
      let randomNumber = (Math.floor(Math.random(4) * 3) + 1);

    if (randomNumber === 1){
        // console.log("Rock");
        return "Rock";
    } else if ( randomNumber === 2 ){
        // console.log("Paper");
        return "Paper";
    } else if (randomNumber === 3){
        // console.log("Scissors");
        return "Scissors";
    }
}

// let playerSelection;
let playerScore = 0;
let computerScore = 0;
// let computerSelection = computerPlay(); global variable value is not changed from a function. can only be changed in local variable when called



function gameRound(){
    
    let computerSelection = computerPlay();
    let playerChoice = prompt("Please chose rock, paper or scissors").toUpperCase();// player puts in choice
    let computerChoice = computerSelection.toUpperCase();
    // makes case insensitive  and simple to read

    if (playerChoice === "ROCK" && computerChoice=== "ROCK"){
        console.log("YOU BOTH CHOSE ROCK, IT IS A TIE!");
        return "YOU BOTH CHOSE ROCK, IT IS A TIE!";
    } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS"){
        console.log("PLAYER CHOSE ROCK , COMPUTER CHOSE SCISSORS ... PLAYER WINS!!");
        playerScore++;
        return "PLAYER CHOSE ROCK , COMPUTER CHOSE SCISSORS ... PLAYER WINS!!";
    } else if (playerChoice === "ROCK" && computerChoice === "PAPER"){
        console.log("PLAYER CHOSE ROCK, COMPUTER CHOSE PAPER.... PLAYER LOSES") // PLAYER ROCK CHOICES DONE.... NOW DO PAPER
        computerScore++;
        return "PLAYER CHOSE ROCK, COMPUTER CHOSE PAPER.... PLAYER LOSES";

    } else if (playerChoice === "PAPER" && computerChoice === "PAPER"){
        console.log("Both chose paper, it is a tie")
        return "Both chose paper it is a tie";
    } else if (playerChoice === "PAPER" && computerChoice === "ROCK"){
        console.log("Player- Paper.... Computer - Rock...... YOU WIN")
        playerScore++;
        return "Player- Paper.... Computer - Rock...... YOU WIN";
    }else if (playerChoice === "PAPER" && computerChoice === "SCISSORS"){
        console.log("Player- Paper... Computer - Scissors... YOU LOSE")
        computerScore++;
        return "Player- Paper... Computer - Scissors... YOU LOSE";

    }else if (playerChoice === "SCISSORS" && computerChoice === "SCISSORS"){
        console.log("Player - Scissors... Computer- Scissors ... TIE");
        return "Player - Scissors... Computer- Scissors ... TIE" ;
    }else if (playerChoice === "SCISSORS" && computerChoice === "ROCK"){
        console.log("Player- Scissors ... Computer - Rock ... YOU LOSE");
        computerScore++;
        return "Player- Scissors ... Computer - Rock ... YOU LOSE";
    }else if  (playerChoice === "SCISSORS" && computerChoice === "PAPER"){
        console.log("Player - Scissors ... Computer - Paper ... YOU WIN")
        playerScore++;
        return "Player- Scissors ... Computer - PAPER ... YOU WIN";
    }
}


function game(){
    for(let i = 0; i < 5; i++){// for i starts at 0... to run until i is greater than 5... increase while i is less than 5
        gameRound()
    }
    console.log("Computer -- " + computerScore)
    console.log("Player -- " + playerScore)
    if(playerScore > computerScore){
        console.log("YOU WIN!!!!!!!!!!!!")
    }else if(playerScore < computerScore){
        console.log("YOU LOSE!!!!!")
    }else if(playerScore === computerScore){
        console.log("IT IS A TIE!!!!!")
    }
    

}