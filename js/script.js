// computer move 


let computerMove = Math.floor(Math.random() * 3 + 1);

if (computerMove == 1) {
    computerMove = 'kamień';
} else if (computerMove == 2) {
    computerMove = 'papier';
} else if (computerMove == 3) {
    computerMove = 'nożyce';
}

console.log('Komputer zagrał : ' + computerMove);


// player move 
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
}

//getting result

let result = 'Komputer wygrywa!';

if (playerMove == 'nieznany ruch') {
    result = 'Podałeś ' + playerMove + ', przegrywasz ;-P';
} else if (computerMove == 'kamień' && playerMove == 'papier') {
    result = 'Wygrywasz!';
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    result = 'Wygrywasz!';
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    result = 'Wygrywasz!';
} else if (computerMove == playerMove) {
    result = 'Remis!';
}

printMessage('Twój ruch to: ' + playerMove + '<br> Ruch komputera: ' + computerMove + '<br> Wynik rundy: ' + result);