// Can you work with keypress? Try to figure out what is going on in this file.
// You can use good old readline instead of keypress.
// But do not use them all together!

const keypress = require('keypress');

// Management.
// Let's set up the correspondence between keystrokes and actions in the game.

const keyboard = {
  q: () => console.log('q'),
  w: () => console.log('w'),
  e: () => console.log('e'),
  r: () => console.log('r'),
  t: () => console.log('t'),
  y: () => console.log('y'),
};

// Some function.

function runInteractiveConsole() {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // it calls a method that corresponds to the pressed button.
      if (key.name in keyboard) {
        keyboard[key.name]();
      }
      // program interruption.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// Let's try to run this script!

runInteractiveConsole();
