var loadState = {

  preload: function() {
    var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', {
      font: '30px Arial', fill: '#ffffff'
    });
    loadingLabel.anchor.setTo(0.5, 0.5);

    var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
    progressBar.anchor.setTo(0.5, 0.5);
    game.load.setPreoadSprite(progressBar);

    game.load.image('player', 'assets/player.png');
    game.load.image('player', 'assets/player.png');
    game.load.image('coin', 'assets/coin.png');
    game.load.image('wasllV', 'assets/wallVertical.png');
    game.load.image('wasllH', 'assets/wallHorizontal.png');
    game.load.image('background', 'assets/background.png');
  },

  create: function() {
    game.state.start('menu');
  }

};
