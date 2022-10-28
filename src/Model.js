class Model {
  #page = 'enter-name';
  #name = '';


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