// Our hero.

class Hero {
  constructor({ position }) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
  }

  moveLeft() {
    // Going left.
    this.position -= 1;
  }

  moveRight() {
    // Going right.
    this.position += 1;
  }

  attack() {
    // Attacking the enemy.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
