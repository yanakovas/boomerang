// Какое-то абстрактное оружие.
class Weapon {
  constructor() {
    this.skin = 'X';
  }

  fly() {
    throw Error('Not implemented');
  }
}

// Бумеранг является оружием.
// Воспользуемся наследованием.
class Boomerang extends Weapon {
  constructor() {
    super();
    this.skin = '🌀';
  }

  moveLeft() {
    // Идём влево.
  }

  moveRight() {
    // Идём вправо.
  }
}

module.exports = Boomerang;
