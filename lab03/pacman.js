// Global vars
const game = [];
var pac = 0;
var ghost = 0;
var score = 0;
var numPellets = 0;
var level = 0;
var mid = 0;
var bounds = 0;
var lives = 3;
var win = false;
var ghostMoving = false;

// HTML Functions
function buildTag (tagName, innerHTML) {
    return "<" + tagName + ">" + innerHTML + "</" + tagName + ">";
}

function printGame() {
    document.body.innerHTML = "";
    let output = "[";   
    for (let i = 0; i < game.length; i++) {
        if (ghost == i) {
            output += "^";
        } else if (pac == i) {
            output += "C";
        } else {
            output += game[i];
        }
    }
    output += "] score: " + score + " level: " + level + " lives: " + lives;
    document.write(buildTag("p", output));
}

// Game Functions
function createGame(n) {
    if (n < 4) {
        alert("Warning: The game must be at least 4 bits long to work properly!")
    }

    level++;
    bounds = n;
    numPellets = n - 2
    ghost = 0;
    win = false;

    let fruit = false;

    if (n % 2 == 0) {
        mid = n / 2;
    } else {
        mid = (n / 2) - 0.5;
    }
    pac = mid;

    for (let i = 0; i < n; i++) {
        if (i == pac) {
            game[i] = "_";
        } else if (!fruit && (i == n-1 || (Math.random() >= 0.80))) {
            game[i] = "@";
            fruit = true;
        } else {
            game[i] = ".";
        }
    }
}

function moveLeft() {
    pac--;
    if (pac < 0) {
        pac = bounds - 1;
    }
}
function moveRight() {
    pac++;
    if (pac >= bounds) {
        pac = 0;
    }
}

function getInput(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
        // left arrow
        moveLeft();
    }
    else if (e.keyCode == '39') {
        // right arrow
        moveRight();
    }
}

function moveGhost() {
    if (Math.random() >= 0.49) {
        // Ghost moves left
        ghost--;
        if (ghost < 0) {
            ghost = bounds - 1;
        }
    } else {
        // Ghost moves right
        ghost++;
        if (ghost >= bounds) {
            ghost = 0;
        }
    }

    ghostMoving = false;
}

function updateGame() {
    document.onkeydown = getInput;
    if (!ghostMoving) {
        setTimeout(moveGhost, 2000);
        ghostMoving = true;
    }
    printGame();

    if (pac == ghost) {
        lives--;
        pac = mid;
        ghost = 0;
    }

    if (game[pac] == ".") {
        score += 1;
        game[pac] = "_";
        numPellets--;
    } else if (game[pac] == "@") {
        score += 5;
        game[pac] = "_";
    }

    if (numPellets <= 0) {
        win = true;
    }
}

function runGame() {
    updateGame();
    if (lives <= 0) {
        clearInterval(run);
        alert("Game over!")
        printGame();
    } else if (win) {
        alert("You win!")
        createGame(bounds + 5);
    }
}

// Running the Game
document.writeln(buildTag("p", "Welcome!"));
createGame(10);
const run = setInterval(runGame, 10);