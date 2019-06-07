class Hero {
    constructor() {
        this.skin = '🦔';
    }
    attack(weapon = 'boomerang') {
        return Promise((resolve, reject) => {

        });
    }
}

class Boomerang {
    constructor(position = 0) {
        this.position = position;
        this.skin = '🌀';
    }
}


class Enemy {
    constructor() {
        this.skin = '👾';
    }
    die() {
        this.skin = '💀';
    }
}