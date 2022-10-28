const { Statistic } = require('../db/models');

class Model {
  #page = 'enter-name';
  #name = '';
  #points = 0;
  #time;


  async pushResults() {
    const gameDuration = ((Date.now() - this.#time) / 1000).toFixed(1);
    // const name = readlineSync.question('Choose name: ');
    const points = this.#points;

    await Statistic.create({ name: "XXX", enemieKilled: points, point: points, timeGame: gameDuration });
    // console.log(name);
    process.exit();
  }

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