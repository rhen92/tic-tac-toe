var board = document.querySelector('#gameBoard');
var indexZero = document.querySelector('#zero');
var indexOne = document.querySelector('#one');
var indexTwo = document.querySelector('#two');
var indexThree = document.querySelector('#three');
var indexFour = document.querySelector('#four');
var indexFive = document.querySelector('#five');
var indexSix = document.querySelector('#six');
var indexSeven = document.querySelector('#seven');
var indexEight = document.querySelector('#eight');
var mainHeading = document.querySelector('#mainHeading');
var ticTacToe = new Game();
//player 1 clicks somewhere in the 3X3 grid
board.addEventListener('click', clickHandler);

function clickHandler() {
  if (event.target.classList.contains('zero')) {
    seeIfEmpty(0);
  }
}

function seeIfEmpty(value) {
  ticTacToe.trackDataForGame(value);
  if (ticTacToe.trackDataForGame(value)) {
    ticTacToe.fillInBoard(value);
    displayBoard(event);
    return true;
  } else {
    return false;
  }
}

function displayBoard(event) {
  event.target.innerText = `${ticTacToe.turn.token}`;
  ticTacToe.whoseTurn();
  changeHeading();
}

//rewrite heading of whose turn it is at top of page
function changeHeading() {
  mainHeading.innerText = `It's ${ticTacToe.turn.token}'s turn`;
}

//player 2 clicks somewhere in the 3X3 grid (trackDataForGame method?)
//check to make sure its a valid click and not overwrite player 1's clicks (trackDataForGame method?)
//check for possible wins (checkForWins method)
//check for possible draws (checkForDraw method)
//keep going with the back and forths until either check for wins comes back true or check for draws comes back true
//reset the Game




// ticTacToe.checkForWins();
// if(!ticTacToe.checkForWins()) {
//   ticTacToe.checkForDraw();
// }

// ticTacToe.trackDataForGame(0);
// if (ticTacToe.trackDataForGame(0)) {
//   ticTacToe.fillInBoard(0);
// } else {
//   return;
// }
// ticTacToe.whoseTurn();
