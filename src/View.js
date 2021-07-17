// Let's create a separate class for displaying the game in the console.

class View {
  render() {
    const yourTeamName = 'Elbrus';

    // Here we are drawing everything.
    console.clear();
    console.log(this.game.track.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
