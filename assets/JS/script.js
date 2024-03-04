
//variabless

let playerName="Player";
let playerScore=0;
let computerScore=0;

// update name in game area after player entered a name 

function updatePlayerName() {
    playerName = document.getElementById("playerName").value || "Player";
    document.getElementById("playerNameScore").innerText = playerName;
    }


 //  create random choice made by computer 

    function getComputerChoice(){
        const choices=["rock","paper","scissors", "lizard", "spock"];
        return choices [Math.floor (Math.random() * choices.length)];
   }
   
   // choice made by player 

   function play(playerChoice) {
       updatePlayerName();
       const computerChoice=getComputerChoice();
   
       document.getElementById("playerNameChoice").innerText = `${playerName} chose ${playerChoice}`;
       document.getElementById("computerChoice").innerText = `Computer chose ${computerChoice}`;
   
   // update score area based on results

       const result = getResult(playerChoice, computerChoice);
       document.getElementById("result").innerText = result;
   
       if(result ==="You win!") {
        playerScore++;
       }else if (result === "Computer wins!") {
          computerScore++;
       }
   
       document.getElementById("playerNameScore").innerHTML = `${playerScore}`;
       document.getElementById("computerScore").innerHTML = `${computerScore}`;
   }
   
   // results based on player versus computer choice

   function getResult (player, computer) {
       if (player === computer) {
           return "It's a tie";
       } else if (
           (player === "rock" && (computer === "scissors" || computer === "lizard")) ||
           (player === "paper" && (computer === "rock" || computer === "spock")) ||
           (player === "scissors" && (computer === "paper" || computer === "lizard")) ||
           (player === "lizard" && (computer === "paper" || computer === "spock")) ||
           (player === "spock" && (computer === "rock" || computer === "scissors")) 
       ) {
           return "You win!";
       } else {
           return "Computer wins!";
       }
       }
   
   
   