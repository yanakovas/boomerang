// Сделаем отдельный класс для отображения игры в консоли.
const readlineSync = require('readline-sync');

class View {
  render(track) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }

  renderStartPage() {
    const name = readlineSync.question('Choose name: ');
    //console.log('Press space to continue: ');
    return name;
  }

  renderResults() {
    console.log('Game Over');
  }
}

module.exports = View;
