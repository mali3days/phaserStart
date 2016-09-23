var mainState = {
  preload: function() {
    game.load.image('player', 'assets/player.png');
    game.load.image('wallV', 'assets/wallVertical.png');
    game.load.image('wallH', 'assets/wallHorizontal.png');
    game.load.image('coin', 'assets/coin.png');
  },

  create: function() {
    this.createWorld();
    game.stage.backgroundColor = '#3498db';
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.cursor = game.input.keyboard.createCursorKeys();

    this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
    this.player.anchor.setTo(0.5, 0.5);

    this.coin = game.add.sprite(60, 140, 'coin');
    this.coin.anchor.setTo(0.5, 0.5);

    game.physics.arcade.enable(this.player);
    game.physics.arcade.enable(this.coin);

    this.player.body.gravity.y = 500;

    this.scoreLabel = game.add.text(30, 30, 'score: 0', {
      font: '18px Arial', fill: '#fffffff'
    });
    this.score = 0;
  },

  update: function() {
    game.physics.arcade.collide(this.player, this.walls);
    game.physics.arcade.overlap(this.player, this.coin, this.takeCoin, null, this);
    this.movePlayer();

    if (!this.player.inWorld) {
      this.playerDie();
    }
  },

  movePlayer: function() {

    if (this.cursor.left.isDown) {
      this.player.body.velocity.x = -200;
    }
    else if (this.cursor.right.isDown) {
      this.player.body.velocity.x = 200;
    }
    else {
      this.player.body.velocity.x = 0;
    }

    if (this.cursor.up.isDown && this.player.body.touching.down) {
      this.player.body.velocity.y = -320;
    }
  },

  createWorld: function() {
    this.walls = game.add.group();
    this.walls.enableBody = true;

    game.add.sprite(0, 0, 'wallV', 0, this.walls);
    game.add.sprite(480, 0, 'wallV', 0, this.walls);

    game.add.sprite(0, 0, 'wallH', 0, this.walls);
    game.add.sprite(300, 0, 'wallH', 0, this.walls);
    game.add.sprite(0, 320, 'wallH', 0, this.walls);
    game.add.sprite(300, 320, 'wallH', 0, this.walls);

    game.add.sprite(-100, 160, 'wallH', 0, this.walls);
    game.add.sprite(400, 160, 'wallH', 0, this.walls);

    var middleTop = game.add.sprite(100, 80, 'wallH', 0, this.walls);
    middleTop.scale.setTo(1.5, 1);
    var middleBottom = game.add.sprite(100, 240, 'wallH', 0, this.walls);
    middleBottom.scale.setTo(1.5, 1);

    this.walls.setAll('body.immovable', true);
  },

  playerDie: function() {
    game.state.start('main');
  },

  takeCoin: function(player, coin) {
    this.killCoin();
    this.score += 5;
    this.scoreLabel.text = 'score: ' + this.score;
  }
};

var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDIV');

game.state.add('main', mainState);
game.state.start('main');
