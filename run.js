// Основной файл.+
// Запускает игру.
const Game = require('./src/Game');
const Model = require('./src/Model');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 50,
});

const model = new Model();

// Запуск игры.


game.play();
