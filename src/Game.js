// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
// const keypress = require('keypress');
const { Input } = require('enquirer');
const keypress = require('keypress');

const runInteractiveConsole = require('./keyboard');

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Model = require('./Model');

class Game {
  constructor({ trackLength }) {
    this.view = new View();
    this.model = new Model();

    this.trackLength = trackLength;
    this.boomerang = new Boomerang();
    this.hero = new Hero(this.boomerang);
    this.enemy = new Enemy();
    
    this.track = [];
    this.regenerateTrack();
    this.gameCycle = null;
  }

  async getName() {
    const prompt = new Input({
      name: 'username',
      message: 'What is your username?',
    });
  
    const username = await prompt.run();
    return username;
  }
  
  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    // Put hero
    this.track[this.hero.position] = this.hero.skin;
    // Put enemy
    this.track[this.enemy.position] = this.enemy.skin;
    // Boomerang
    this.track[this.boomerang.position] = this.boomerang.skin;
  }

  check() {
    let heroDied = this.hero.position === this.enemy.position;
    if (heroDied) {
      this.hero.die();
      this.stop();
    }

    let enemyHit = this.boomerang.position === this.enemy.position ||
    this.boomerang.position === this.enemy.position + 1|| 
    this.boomerang.position === this.enemy.position - 1;
    if (enemyHit) {
      this.enemy.die();
      this.boomerang.getBack();
      this.model.addPoints(Math.floor(this.hero.position / (this.trackLength / 10)) + 1);
      this.enemy = new Enemy();
    }

    let caughtBoomerang = this.boomerang.position === this.hero.position;
    if (caughtBoomerang) {
      this.hero.catchBoomerang();
    }
  }

  moveGameObjects() {
    this.enemy.moveLeft();
    this.boomerang.move();
  }

  async stop() {
    clearInterval(this.gameCycle); 
    this.view.renderDeadScreen();
    
    const results = await this.model.pushResults();
    this.view.renderResults(results);

    process.exit();
  }

  play(username) {
    this.model.setTime(Date.now());
    this.model.setName(username);

    runInteractiveConsole(this.hero);

    this.gameCycle = setInterval(() => {
      this.view.render(this.track, this.model.getPoints(), this.model.getTime(), this.model.getName());
      this.regenerateTrack();
      this.moveGameObjects();
      this.check();
    }, 30);
  }

  run() {
    switch (this.model.getPage()) {
      case 'enter-name': {
        const name = this.view.renderStartPage();
        this.model.startGame();
        return this.run();
      }
      case 'game': {
        return this.play();
      }
      case 'results': {
        console.log('Wheeeeeeee');
        return this.view.renderResults();
      }
    }
  }
}

module.exports = Game;
