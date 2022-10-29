const { Statistic, sequelize } = require('../db/models');

class Model {
  #page = 'enter-name';
  #name = '';
  #points = 0;
  #time;

  async pushResults() {
    const gameDuration = ((Date.now() - this.#time) / 1000).toFixed(1);
    const points = this.#points;

    let scores = {
      name: this.#name, 
      enemieKilled: points, 
      point: points, 
      timeGame: gameDuration,
    }
    
    await Statistic.create(scores);

    const results = await Statistic.findAll({
      raw: true,
      attributes: { 
        exclude: ['id', 'createdAt', 'updatedAt'] 
      },
      order: [
        ['point', 'DESC'],
      ],
      limit: 5,
    });
    
    return [scores, results];
  }

  setName(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
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
  
  getPage() {
    return this.#page;
  }
}

module.exports = Model;