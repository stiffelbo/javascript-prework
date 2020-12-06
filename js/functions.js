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
        return 'kamien';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nozyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

function displayCounter(argRobotCounter, argPlayerCounter) {
    //console.log(argRobotCounter + "  " + argPlayerCounter);
    let robotCSS = "background-image: linear-gradient(90deg, red " + argPlayerCounter * 10 + "%, transparent " + argPlayerCounter * 10 + "%);"
    let playerCSS = "background-image: linear-gradient(90deg, red " + argRobotCounter * 10 + "%, transparent " + argRobotCounter * 10 + "%);"
    document.getElementById("playerCounter").style.cssText = playerCSS;
    document.getElementById("robotCounter").style.cssText = robotCSS;
    document.getElementById("round-count").innerText = "Round: " + roundCounter;

    if (argRobotCounter == maxCounter) {
        printMessage('<h1>You Loose!</h1>');
        printMessage('<h5>Pick to play again</h5>');
        robotCounter = playerCounter = roundCounter = 0;
    } else if (argPlayerCounter == maxCounter) {
        printMessage('<h1>You Win!</h1>');
        printMessage('<h5>Pick to play again</h5>');
        robotCounter = playerCounter = roundCounter = 0;
    }
}

function displayResult(argComputerMove, argPlayerMove) {

    // printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argComputerMove == 'kamien' && argPlayerMove == 'papier') {
        // printMessage('Ty wygrywasz!');
        document.getElementById('papier').className += ' win';
        playerCounter++;
        displayCounter(robotCounter, playerCounter);
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce') {
        // printMessage('Ty wygrywasz!');
        document.getElementById('nozyce').className += ' win';
        playerCounter++;
        displayCounter(robotCounter, playerCounter);
    } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamien') {
        // printMessage('Ty wygrywasz!');
        document.getElementById('kamien').className += ' win';
        playerCounter++;
        displayCounter(robotCounter, playerCounter);
    } else if (argComputerMove == argPlayerMove) {
        //printMessage('Remis');
        document.getElementById(argComputerMove + "-robot").className += ' draw';
        document.getElementById(argPlayerMove).className += ' draw';
        displayCounter(robotCounter, playerCounter);
    } else {
        // printMessage('Tym razem przegrywasz :(');
        document.getElementById(argComputerMove + "-robot").className += ' win';
        robotCounter++;
        displayCounter(robotCounter, playerCounter);
    }
}