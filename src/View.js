// Сделаем отдельный класс для отображения игры в консоли.
const readlineSync = require('readline-sync');

class View {
  render(track, points, date) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n');
    console.log(`Created by "${yourTeamName}" with love`);
    console.log('\n');
    console.log(`Points: ${points}`);
    let time = ((Date.now() - date) / 1000).toFixed(1);
    console.log(`Game time: ${time}`)
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
