// Сделаем отдельный класс для отображения игры в консоли.
const readlineSync = require('readline-sync');

class View {
  render(track, points, date, name) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n');
    console.log(`C'mon "${name}", show us the ninja-style!`);
    console.log('\n');
    console.log(`Points: ${points}`);
    let time = ((Date.now() - date) / 1000).toFixed(1);
    console.log(`Game time: ${time} s`)
  }

  renderDeadScreen() {
    console.clear();
    console.log('YOU ARE DEAD!💀');
    console.log('Press q to show best results');
  }

  renderStartPage() {
    //const name = readlineSync.question('Choose name: ');
    //console.log('Press space to continue: ');
    //return name;
  }

  renderResults(array) {
    let [scores, results] = array;
    console.clear();
    console.log('Your scores:');
    console.log(`${scores.name} -- ${scores.point} points -- ${scores.timeGame} s\n\n`);
    console.log('Five best ninjas');
    results.forEach((item, i) => {
      console.log(`${i + 1}. ${item.name} -- ${item.point} points -- ${item.timeGame} s`)
    });
    console.log('\n\n\n\n');
  }
}

module.exports = View;
