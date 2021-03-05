//on window load see whose turn it is
// window.addEventListener('load', function() {
//
// })

//player 1 clicks somewhere in the 3X3 grid
//switch to player 2's turn (whoseTurn method)
//rewrite heading of whose turn it is at top of page
//player 2 clicks somewhere in the 3X3 grid (trackDataForGame method?)
//check to make sure its a valid click and not overwrite player 1's clicks (trackDataForGame method?)
//check for possible wins (checkForWins method)
//check for possible draws (checkForDraw method)
//keep going with the back and forths until either check for wins comes back true or check for draws comes back true
//reset the Game
var ticTacToe = new Game();

ticTacToe.fillInBoard(0);
ticTacToe.whoseTurn();
ticTacToe.fillInBoard(3);
ticTacToe.whoseTurn();
ticTacToe.fillInBoard(1);
ticTacToe.whoseTurn();
ticTacToe.fillInBoard(8);
ticTacToe.whoseTurn();
ticTacToe.fillInBoard(2);
ticTacToe.whoseTurn();
ticTacToe.checkForWins();
  console.log(ticTacToe);


// ticTacToe.trackDataForGame(0);
// if(ticTacToe.trackDataForGame(0)) {
//   ticTacToe.fillInBoard(0);
//   ticTacToe.whoseTurn();
// } else {
//   console.log('Choose another spot');
// }
