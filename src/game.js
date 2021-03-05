class Game {
  constructor() {
    this.players = {
      player1: new Player('🌸', 1),
      player2: new Player('🌼', 2)
    };
    this.turn = this.players.player1;
    this.board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ]
  }

  trackDataForGame() {
    // for (var i = 0; i < this.board.length; i++) {
    //   for (var j = 0; j < this.board[i].length; j++) {
    //     if (this.board[i][j] === ' ') {
    //       fillInBoard();
    //     } else {
    //       return false;
    //     }
    //   }
    // }
  }

  fillInBoard() {
    // if(this.turn === this.players.player1) {
    //
    // }
  }

  whoseTurn() {
    // if (this.turn === this.players.player1) {
    //   this.turn = this.players.player2;
    // } else if (this.turn === this.players.player2) {
    //   this.turn = this.players.player1;
    // }
  }

  checkForWins() {

  }

  checkForDraw() {

  }

  saveWinningGame() {

  }

  resetGame() {

  }
}
