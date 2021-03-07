class Game {
  constructor() {
    this.players = {
      player1: new Player('🌸', 1),
      player2: new Player('🌼', 2)
    };
    this.turn = this.players.player1;
    this.board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  }

  trackDataForGame(value) {
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[value] === ' ') {
        return true;
      } else {
        return false;
      }
    }
  }

  fillInBoard(value) {
    if (this.turn === this.players.player1) {
      this.board[value] = '🌸';
    } else if (this.turn === this.players.player2) {
      this.board[value] = '🌼';
    }
  }

  whoseTurn() {
    if (this.turn === this.players.player1) {
      this.turn = this.players.player2;
    } else if (this.turn === this.players.player2) {
      this.turn = this.players.player1;
    }
  }

  checkForWins() {
    if (this.board[0] === '🌸' && this.board[1] === '🌸' && this.board[2] === '🌸' ||
      this.board[3] === '🌸' && this.board[4] === '🌸' && this.board[5] === '🌸' ||
      this.board[6] === '🌸' && this.board[7] === '🌸' && this.board[8] === '🌸' ||
      this.board[0] === '🌸' && this.board[3] === '🌸' && this.board[6] === '🌸' ||
      this.board[1] === '🌸' && this.board[4] === '🌸' && this.board[7] === '🌸' ||
      this.board[2] === '🌸' && this.board[5] === '🌸' && this.board[8] === '🌸' ||
      this.board[0] === '🌸' && this.board[4] === '🌸' && this.board[8] === '🌸' ||
      this.board[2] === '🌸' && this.board[4] === '🌸' && this.board[6] === '🌸') {
      return true;
    } else if (this.board[0] === '🌼' && this.board[1] === '🌼' && this.board[2] === '🌼' ||
      this.board[3] === '🌼' && this.board[4] === '🌼' && this.board[5] === '🌼' ||
      this.board[6] === '🌼' && this.board[7] === '🌼' && this.board[8] === '🌼' ||
      this.board[0] === '🌼' && this.board[3] === '🌼' && this.board[6] === '🌼' ||
      this.board[1] === '🌼' && this.board[4] === '🌼' && this.board[7] === '🌼' ||
      this.board[2] === '🌼' && this.board[5] === '🌼' && this.board[8] === '🌼' ||
      this.board[0] === '🌼' && this.board[4] === '🌼' && this.board[8] === '🌼' ||
      this.board[2] === '🌼' && this.board[4] === '🌼' && this.board[6] === '🌼') {
      return true;
    } else {
      return false;
    }
  }

  checkForDraw() {
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i] === ' ') {
         return true;
        }
      }
      return false;
    }

  saveWinningGame() {
    this.turn.saveWinsToStorage();
  }

  resetGame() {
    this.board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  }
}
