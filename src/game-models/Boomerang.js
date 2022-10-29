// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 0;
    this.direction = 0;
  }

  getBack() {
    this.direction = -1;
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
}

module.exports = Boomerang;
