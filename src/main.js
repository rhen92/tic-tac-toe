var board = document.querySelector('#gameBoard');
var mainHeading = document.querySelector('#mainHeading');
var ticTacToe = new Game();

board.addEventListener('click', clickHandler);

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
    return true;
  } else {
    return false;
  }
}

function displayBoard(event) {
  event.target.innerText = `${ticTacToe.turn.token}`;
  ticTacToe.checkForWins();
  //if someone wins don't allow any more clicks
  if (ticTacToe.checkForWins()) {
    changeHeading();
  } else {
    ticTacToe.checkForDraw();
    ticTacToe.whoseTurn();
    changeHeading();
  }
}


// function changeHeading() {
//   if (ticTacToe.checkForWins()) {
//     mainHeading.innerText = `${ticTacToe.turn.token} won!`
//   } else if (!ticTacToe.checkForDraw()) {
//     mainHeading.innerText = 'It\s a draw!'
//   } else {
//     mainHeading.innerText = `It's ${ticTacToe.turn.token}'s turn`;
//   }
// }

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
