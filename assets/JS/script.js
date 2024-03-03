//variables//

let playerName="Player";

// update name  in score area after player entered a name //

function updatePlayerName() {
    playerName = document.getElementById("playerName").value || "Player";
    document.getElementById("playerNameScore").innerText = playerName;
    }

// choice made by player //

    function play(playerChoice) {
        updatePlayerName();
        const computerChoice=getComputerChoice();


 //  random choice made by computer //

function getComputerChoice() {
    const choices=["rock","paper","scissors", "lizard", "spock"];
    return choices [Math.floor (Math.random() * choices.length)];
}


   document.getElementById("playerNameChoice").innerText = `${playerName} chose ${playerChoice}`;
   document.getElementById("computerChoice").innerText = `Computer chose ${computerChoice}`;
}