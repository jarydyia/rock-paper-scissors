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
    } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS"){
        console.log("PLAYER CHOSE ROCK , COMPUTER CHOSE SCISSORS ... PLAYER WINS!!");
    } else if (playerChoice === "ROCK" && computerChoice === "PAPER"){
        console.log("PLAYER CHOSE ROCK, COMPUTER CHOSE PAPER.... PLAYER LOSES") // PLAYER ROCK CHOICES DONE.... NOW DO PAPER
    } 
}