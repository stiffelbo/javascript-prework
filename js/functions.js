function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

function displayCounter(argRobotCounter, argPlayerCounter) {
    console.log(argRobotCounter + "  " + argPlayerCounter);
    let playerCSS = "background-image: linear-gradient(90deg, red " + argPlayerCounter * 10 + "%, transparent " + argPlayerCounter * 10 + "%);"
    let robotCSS = "background-image: linear-gradient(90deg, red " + argRobotCounter * 10 + "%, transparent " + argRobotCounter * 10 + "%);"
    document.getElementById("playerCounter").style.cssText = playerCSS;
    document.getElementById("robotCounter").style.cssText = robotCSS;

    printMessage("robot: " + argRobotCounter);
    printMessage("player: " + argPlayerCounter);
}

function displayResult(argComputerMove, argPlayerMove) {

    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
        playerCounter++;
        displayCounter(robotCounter, playerCounter);
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
        playerCounter++;
        displayCounter(robotCounter, playerCounter);
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
        playerCounter++;
        displayCounter(robotCounter, playerCounter);
    } else if (argComputerMove == argPlayerMove) {
        printMessage('Remis');
        displayCounter(robotCounter, playerCounter);
    } else {
        printMessage('Tym razem przegrywasz :(');
        robotCounter++;
        displayCounter(robotCounter, playerCounter);
    }
}