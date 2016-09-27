var bootState = {

  preload: function() {
    game.load.image('progressBar', 'assets/progressBar.png');
  },

  create: function() {
    game.stage.backgroundColor = '#3498db';
    game.stage.startSystem(Phaser.Physics.ARCADE);

    game.state.start('load');
  }

};
