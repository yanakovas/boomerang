// СДелаем отдельный класс для отображения игры в консоли.
class View {
  constructor(game) {
    this.game = game;
  }
  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие) 
    // в единую структуру данных
  }
  render() {
    // Тут всё рисуем.
    this.regenerateTrack()
    console.clear();
    console.log(this.track.join(''));
    console.log('\n'.repeat(2));
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
