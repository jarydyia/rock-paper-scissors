console.log("MEOWWWW")
console.log(Math.floor(Math.random(4) * 3) + 1);

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
