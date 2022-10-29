// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 50;
    this.level = Math.floor(Math.random() * 10);
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    let moveProbability = Math.floor(Math.random() * 20);
    if (moveProbability > this.level) this.position -= 1;
  }

  die() {
    this.skin = '💥';
    this.position = '?';
    //console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
