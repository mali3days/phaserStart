var bootState = {

  preload: function() {
    game.load.image('progressBar', 'assets/progressBar.png');
  },

  create: function() {
    game.stage.backgroundColor = '#3498db';
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // If the device is not a sesktop, so it's a mobile device
    if (!game.device.desktop) {
      // Set thetype of scaling to 'show all'
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;


      // Add a blue color to the page, to hide the white borders we might have
      document.body.style.backgroundColor = '#3498db';

      // Set the min and max width/height of the game
      game.scale.minWidth = 250;
      game.scale.minHeight = 170;
      game.scale.maxWidth = 1000;
      game.scale.maxHeight = 320;

      // Center the gameon the screen
      game.scale.pageAlignHorizontally = true;
      game.scale.pageAlignVertically = true;

      // Apply the scale changes
      game.scale.updateLayout();
    }

    game.state.start('load');
  }

};
