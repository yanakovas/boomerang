// Враг.
class Enemy {
  constructor() {
    this.skin = this.generateSkin();
  }
  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    return skins[Math.floor(Math.random() * skins.length)];
  }
  moveLeft() {
    // Идём влево.
  }
  die() {
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
