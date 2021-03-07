var board = document.querySelector('#gameBoard');
var mainHeading = document.querySelector('#mainHeading');
var oneWinStatus = document.querySelector('#oneWinStatus');
var twoWinStatus = document.querySelector('#twoWinStatus');

var ticTacToe = new Game();

board.addEventListener('click', clickHandler);
window.addEventListener('load', showWins);

function clickHandler() {
  if (event.target.classList.contains('zero')) {
    seeIfEmpty(0);
  } else if (event.target.classList.contains('one')) {
    seeIfEmpty(1);
  } else if (event.target.classList.contains('two')) {
    seeIfEmpty(2);
  } else if (event.target.classList.contains('three')) {
    seeIfEmpty(3);
  } else if (event.target.classList.contains('four')) {
    seeIfEmpty(4);
  } else if (event.target.classList.contains('five')) {
    seeIfEmpty(5);
  } else if (event.target.classList.contains('six')) {
    seeIfEmpty(6);
  } else if (event.target.classList.contains('seven')) {
    seeIfEmpty(7);
  } else if (event.target.classList.contains('eight')) {
    seeIfEmpty(8);
  }
}

function seeIfEmpty(value) {
  ticTacToe.trackDataForGame(value);
  if (ticTacToe.trackDataForGame(value)) {
    ticTacToe.fillInBoard(value);
    displayBoard(event);
    return;
  } else {
    return;
  }
}

function displayBoard(event) {
  event.target.innerText = `${ticTacToe.turn.token}`;
  ticTacToe.checkForWins();
  if (ticTacToe.checkForWins()) {
    changeHeading();
    board.removeEventListener('click', clickHandler);
    restartGame();
  } else {
    ticTacToe.checkForDraw();
    ticTacToe.whoseTurn();
    changeHeading();
  }
}

function changeHeading() {
  if (ticTacToe.checkForWins()) {
    mainHeading.innerText = `${ticTacToe.turn.token} won!`;
    changeSideBar();
  } else if (!ticTacToe.checkForDraw()) {
    mainHeading.innerText = 'It\s a draw!';
  } else {
    mainHeading.innerText = `It's ${ticTacToe.turn.token}'s turn`;
  }
}

function changeSideBar() {
  ticTacToe.saveWinningGame();
  if (ticTacToe.turn.id === 1) {
    oneWinStatus.innerText = `${ticTacToe.turn.wins} wins`;
  } else {
    twoWinStatus.innerText = `${ticTacToe.turn.wins} wins`;
  }
}

function showWins() {
  ticTacToe.players.player1.retrieveWinsFromStorage();
  oneWinStatus.innerText = `${ticTacToe.players.player1.wins} wins`;
  ticTacToe.players.player2.retrieveWinsFromStorage();
  twoWinStatus.innerText = `${ticTacToe.players.player2.wins} wins`;
}

function restartGame() {
  ticTacToe.resetGame();
  window.setTimeout(boardCleanUp, 1200);
}

function boardCleanUp() {
  var children = board.childNodes;
  for (var i = 0; i < children.length; i++) {
    children[i].innerText = ' ';
  }
  mainHeading.innerText = `It's ${ticTacToe.turn.token}'s turn`;
  board.addEventListener('click', clickHandler);
}
