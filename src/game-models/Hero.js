// Наш герой.

class Hero {
  constructor(boomerang) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    // this.position = position;
    this.position = 1;
    this.boomerang = boomerang;
    this.hasBoomerang = true;
  }

  catchBoomerang() {
    this.boomerang.stop();
    this.boomerang.position = this.position - 1;
    this.hasBoomerang = true;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
    if (this.hasBoomerang) {
      this.boomerang.position = this.position - 1;
    }
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
    if (this.hasBoomerang) {
      this.boomerang.position = this.position - 1;
    }
  }

  attack() {
    // Атакуем.
    if (this.hasBoomerang) {
      this.boomerang.position = this.position + 1;
      this.boomerang.fly();
      this.hasBoomerang = false;
    } 
  }

  die() {
    this.skin = '💀';
  }
}

module.exports = Hero;
