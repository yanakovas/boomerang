// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
// const keypress = require('keypress');
const readlineSync = require('readline-sync');
const keypress = require('keypress');

const runInteractiveConsole = require('./keyboard');

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Model = require('./Model');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.view = new View();
    this.model = new Model();

    this.trackLength = trackLength;
    this.boomerang = new Boomerang();
    this.hero = new Hero(this.boomerang); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    
    this.track = [];
    this.regenerateTrack();
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
    this.boomerang.move();
    this.track[this.boomerang.position] = this.boomerang.skin;
  }

  check() {
    // Hero die
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
      this.model.stopGame();
      this.model.pushResults();
    }

    if (this.boomerang.position === this.enemy.position ||
      this.boomerang.position === this.enemy.position + 1|| 
      this.boomerang.position === this.enemy.position - 1) {
      this.enemy.die();
      this.model.addPoints();
      this.boomerang.changeDirection();
      this.enemy = new Enemy();
    }

    if (this.boomerang.position === this.hero.position) {
      this.hero.catchBoomerang();
    }

  }

  enemiesMove() {
    this.enemy.moveLeft();
  }

  keyboardCheck() {
    
    // keypress(process.stdin);
    // process.stdin.on('keypress', (ch, key) => {
      
    //   if (key) {
    //     console.log(key.name)
    //     if (key.name === 'd') {
    //       console.log(key.name);
    //       this.hero.moveRight();
    //     }
    //     if (key.name === 'a') {
    //       console.log(key.name);
    //       this.hero.moveLeft();
    //     }
    //   }
    // });
    // process.stdin.setRawMode(true);
    // let key = readlineSync.keyIn('', {hideEchoBack: true});
    // console.log(key);
    // if (key === 'd') this.hero.moveRight();
    // if (key === 'a') this.hero.moveLeft();
    //if (key === ' ') {this.boomerang.fly()};
  }

  play() {
    this.model.setTime(Date.now());
    runInteractiveConsole(this.hero);
    setInterval(() => {
      // Let's play!
      this.regenerateTrack();
      this.enemiesMove();
      this.check();
      // this.keyboardCheck();
      this.view.render(this.track, this.model.getPoints(), this.model.getTime());
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
        this.view.renderResults();
      }
    }
  }
}

module.exports = Game;
