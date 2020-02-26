// Импортируем всё необходимое.
const Hero = require('./gameModels/Hero');
const Enemy = require('./gameModels/Enemy');
const Boomerang = require('./gameModels/Boomerang');
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.
class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero();
    this.enemy = new Enemy();
    this.view = new View(this);
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }

  play() {
    setInterval(() => {
      // Let's play! 
    });
  }
}

module.exports = Game;
