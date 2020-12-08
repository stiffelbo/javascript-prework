let roundCounter = 1;
let robotCounter = 0;
let playerCounter = 0;
let maxCounter = 10;


const btnRock = document.getElementById("kamien");
btnRock.addEventListener('click', function() { playGame(1); });
const btnPaper = document.getElementById("papier");
btnPaper.addEventListener('click', function() { playGame(2); });
const btnScisors = document.getElementById("nozyce");
btnScisors.addEventListener('click', function() { playGame(3); });

const playGame = function(playerInput) {
    clearMessages();
    roundCounter++;
    //clear previous robot choice
    let robotBtns = document.querySelectorAll(".robot-btn");

    for (let i = 0; i < robotBtns.length; i++) {
        robotBtns[i].className = "robot-btn";
    }
    //clear previous player choice
    let playerBtns = document.querySelectorAll(".player-btn");

    for (let i = 0; i < playerBtns.length; i++) {
        playerBtns[i].className = "player-btn";
    }

    //robot move
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);
    console.log(computerMove);
    document.getElementById(computerMove + "-robot").className += " picked";
    //player move
    let playerMove = getMoveName(playerInput);
    document.getElementById(playerMove).className += " picked";
    displayResult(computerMove, playerMove);

}