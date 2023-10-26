let playGame = confirm("Shall we play stone,paper and scissor?");

if(playGame){
    let playerChoice = prompt("Please enter stone, paper and scissor.");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase()        
        if(playerOne === 'stone' ||
           playerOne === 'paper' || 
            playerOne === 'scissor'
        ){
            let computerChoice = Math.floor(Math.random() * 3 +1);
            let computer = computerChoice === 1 ? "stone"
                    : computerChoice === 2 ? "paper"
                    : "scissor";

                    let result = playerOne === computer ? "Tie Game!"
                                : playerOne === "stone" && computer === 'paper'
                                ? `playerOne:${playerOne}\nComputer: ${computer}\nComputer Wins!`
                                :playerOne === 'paper' && computer === 'scissor'
                                ? `playerOne:${playerOne}\nComputer: ${computer}\nComputer Wins!`
                                :playerOne === 'scissor' && computer === "stone"
                                ? `playerOne:${playerOne}\nComputer: ${computer}\nComputer Wins!`
                                :`playerOne:${playerOne}\nComputer:${computer}\nPlayerOne wins!`
                                alert(result);
                                let playAgain = confirm("play Again");
                               playAgain ? location.reload() :alert("okay, thanks for playing")

        }else {
            alert("You didn't enter stone, paper,and scissor")
        }
    }else {
        alert("I guess change your mind. Maybe next time")
    }
}else {
    alert("OK, maybe next time")
}


// condition ? "ifTrue" : "else"

const age = 15;
const person = age >=18 ? "adult" : "child"
console.log(person)

// const age = 20;
// if(age >=18) {
//     console.log("Adult")
// }else {
//     console.log("Child")
// }