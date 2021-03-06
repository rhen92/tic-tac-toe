class Player {
  constructor(token, id) {
    this.token = token;
    this.id = id;
    this.wins = 0;
  }

  saveWinsToStorage() {
    this.wins++;
    localStorage.setItem(`${this.id}winAmount`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    var storage = JSON.parse(localStorage.getItem(`${this.id}winAmount`));
    if (!storage) {
      return;
    } else {
      this.wins = `${storage}`;
    }
  }
}
