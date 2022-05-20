// console.log("MEOWWWW")
// console.log(Math.floor(Math.random(4) * 3) + 1);
// let turtle = "RRKWNWNFW"
// console.log(turtle.toLocaleLowerCase())
// console.log(computerPlay().toUpperCase())
function computerPlay(){
      // gives you a random number from 1 - 3
      let randomNumber = (Math.floor(Math.random(4) * 3) + 1);

    if (randomNumber === 1){
        console.log("Rock");
        return "Rock";
    } else if ( randomNumber === 2 ){
        console.log("Paper");
        return "Paper";
    } else if (randomNumber === 3){
        console.log("Scissors");
        return "Scissors";
    }
}

function gameRound(playerSelection, computerSelection){

    let playerChoice = playerSelection.toUpperCase();
    let computerChoice = computerSelection.toUpperCase();
    // makes case insensitive  and simple to read

    if (playerChoice === "ROCK" && computerChoice=== "ROCK"){
        console.log("YOU BOTH CHOSE ROCK, IT IS A TIE!");
        return "YOU BOTH CHOSE ROCK, IT IS A TIE!";
    } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS"){
        console.log("PLAYER CHOSE ROCK , COMPUTER CHOSE SCISSORS ... PLAYER WINS!!");
        return "PLAYER CHOSE ROCK , COMPUTER CHOSE SCISSORS ... PLAYER WINS!!";
    } else if (playerChoice === "ROCK" && computerChoice === "PAPER"){
        console.log("PLAYER CHOSE ROCK, COMPUTER CHOSE PAPER.... PLAYER LOSES") // PLAYER ROCK CHOICES DONE.... NOW DO PAPER
        return "PLAYER CHOSE ROCK, COMPUTER CHOSE PAPER.... PLAYER LOSES";


    } else if (playerChoice === "PAPER" && computerChoice === "PAPER"){
        console.log("Both chose paper, it is a tie")
        return "Both chose paper it is a tie";
    } else if (playerChoice === "PAPER" && computerChoice === "ROCK"){
        console.log("Player- Paper.... Computer - Rock...... YOU WIN")
        return "Player- Paper.... Computer - Rock...... YOU WIN";
    }else if (playerChoice === "PAPER" && computerChoice === "SCISSORS"){
        console.log("Player- Paper... Computer - Scissors... YOU LOSE")
        return "Player- Paper... Computer - Scissors... YOU LOSE";
    }

    
}