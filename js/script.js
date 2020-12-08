{
    const printMessage = function(msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    }

    const clearMessages = function() {
        const msgDisplay = document.getElementById('messages').innerHTML = '';
    }

    const getMoveName = function(argMoveId) {
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

    let roundCounter = 1;
    let robotCounter = 0;
    let playerCounter = 0;
    let maxCounter = 10;

    const displayCounter = function(argRobotCounter, argPlayerCounter) {

        const robotCSS = "background-image: linear-gradient(90deg, red " + argPlayerCounter * 10 + "%, transparent " + argPlayerCounter * 10 + "%);"
        const playerCSS = "background-image: linear-gradient(90deg, red " + argRobotCounter * 10 + "%, transparent " + argRobotCounter * 10 + "%);"
        const playerCounterDisplay = document.getElementById("playerCounter").style.cssText = playerCSS;
        const robotCounterDisplay = document.getElementById("robotCounter").style.cssText = robotCSS;
        const roundCounterDisplay = document.getElementById("round-count").innerText = "Round: " + roundCounter;

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

    const displayResult = function(argComputerMove, argPlayerMove) {

        if (argComputerMove == 'kamien' && argPlayerMove == 'papier') {

            const btnPaperPlayer = document.getElementById('papier').className += ' win';
            playerCounter++;
            displayCounter(robotCounter, playerCounter);
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce') {

            const btnScisorsPlayer = document.getElementById('nozyce').className += ' win';
            playerCounter++;
            displayCounter(robotCounter, playerCounter);
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamien') {

            const btnRockPlayer = document.getElementById('kamien').className += ' win';
            playerCounter++;
            displayCounter(robotCounter, playerCounter);
        } else if (argComputerMove == argPlayerMove) {

            const drawDisplayRobot = document.getElementById(argComputerMove + "-robot").className += ' draw';
            const drawDisplayPlayer = document.getElementById(argPlayerMove).className += ' draw';
            displayCounter(robotCounter, playerCounter);
        } else {

            document.getElementById(argComputerMove + "-robot").className += ' win';
            robotCounter++;
            displayCounter(robotCounter, playerCounter);
        }
    }
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
        const robotBtns = document.querySelectorAll(".robot-btn");

        for (let i = 0; i < robotBtns.length; i++) {
            robotBtns[i].className = "robot-btn";
        }
        //clear previous player choice
        const playerBtns = document.querySelectorAll(".player-btn");

        for (let i = 0; i < playerBtns.length; i++) {
            playerBtns[i].className = "player-btn";
        }

        //robot move
        const randomNumber = Math.floor(Math.random() * 3 + 1);

        const computerMove = getMoveName(randomNumber);

        const btnMoveRobot = document.getElementById(computerMove + "-robot").className += " picked";
        //player move
        const playerMove = getMoveName(playerInput);
        const btnMovePlayer = document.getElementById(playerMove).className += " picked";
        displayResult(computerMove, playerMove);
    }
}