class Model {
  #page = 'enter-name';
  #name = '';
  #points = 0;
  #gameDuration;
  #time;

  setTime(time) {
    this.#time = time; 
  }

  getTime() {
    return this.#time;
  }

  getPoints() {
    return this.#points;
  }

  addPoints() {
    this.#points++;
  }

  startGame (name) {
    this.#name = name;
    this.#page = 'game';
  }

  stopGame () {
    this.#page = 'results';
  }
  
  getPage() {
    return this.#page;
  }
}

module.exports = Model;