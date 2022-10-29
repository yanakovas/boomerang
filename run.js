// Основной файл.+
// Запускает игру.
const Game = require('./src/Game');
const Model = require('./src/Model');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 50,
});

// Запуск игры.
// async function run() {
//   const username = await game.getName();
//   game.play(username);
// }

game.play('Yasha');
