// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 1;
    this.direction = 0;
  }

  changeDirection() {
    this.direction = (this.direction === 1) ? -1 : 1;
  }

  fly() {
    this.direction = 1;
  }

  stop() {
    this.direction = 0;
  }

  move() {
    this.position += this.direction;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
