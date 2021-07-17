// Boomerang is a weapon.
// In the future, you can add another weapon.
// Then you can create a new class Weapon and use inheritance!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 0;
  }

  fly() {
    this.moveRight();
    this.moveLeft();
  }

  moveLeft() {
    // Moving to the left.
    this.position -= 1;
  }

  moveRight() {
    // Moving to the right.
    this.position += 1;
  }
}

module.exports = Boomerang;
