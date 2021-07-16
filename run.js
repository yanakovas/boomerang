// Main file.
// Starts the game.
const Game = require('./src/Game');

// Initializing the game with the settings.
const game = new Game({
  trackLength: 30,
});


// Starting the game.
game.play();
