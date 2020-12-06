document.getElementById("kamien").addEventListener('click', function() { playGame(1); });
document.getElementById("papier").addEventListener('click', function() { playGame(2); });
document.getElementById("nozyce").addEventListener('click', function() { playGame(3); });

function playGame(playerInput) {
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);

    let playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);

}

/* Listnery nie działąją u mnie, w opcji z dodaniem onClick w HTMl wszytko chodzi. Może coś w przeglądarce blokuje */