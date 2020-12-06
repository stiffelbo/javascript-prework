var roundCounter = 1;
var robotCounter = 0;
var playerCounter = 0;
var maxCounter = 10;


document.getElementById("kamien").addEventListener('click', function() { playGame(1); });
document.getElementById("papier").addEventListener('click', function() { playGame(2); });
document.getElementById("nozyce").addEventListener('click', function() { playGame(3); });

function playGame(playerInput) {
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

/* Listnery nie działąją u mnie, w opcji z dodaniem onClick w HTMl wszytko chodzi. Może coś w przeglądarce blokuje */