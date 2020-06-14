// create a new scene
let gameOverScene = new Phaser.Scene('Game Over');

gameOverScene.create = function(){
  // game background, with active input
  let bg = this.add.sprite(0, 0, 'backyard').setInteractive();
  bg.setOrigin(0, 0);

  // welcome text
  let gameW = this.sys.game.config.width;
  let gameH = this.sys.game.config.height;
  let gameOverText = this.add.text(gameW/2, gameH/2 + 100, '◔_◔ Game Over', {
    font: '40px Arial',
    fill: '#ffffff'
  });
  console.log(gameScene);
  let scoreText =  this.add.text(gameW/2, gameH/2 - 100, 'Your score is: ', {
      font: '40px Arial',
      fill: '#ffffff'
  });

  let scoreValue =  this.add.text(gameW/2, gameH/2 - 25, Math.floor(gameScene.stats.score), {
      font: '40px Arial',
      fill: '#ffffff'
  });

    scoreValue.setOrigin(0.5, 0.5);
    scoreValue.depth = 1;


    scoreText.setOrigin(0.5, 0.5);
  scoreText.depth = 1;

  gameOverText.setOrigin(0.5, 0.5);
  gameOverText.depth = 1;

  // gameOverText background
  let gameOverTextBg = this.add.graphics();
  gameOverTextBg.fillStyle(0x000000, 0.7);
  gameOverTextBg.fillRect(gameW/2 - gameOverText.width/2 - 10, gameH/2 - gameOverText.height/2 - 10 + 100, gameOverText.width + 20, gameOverText.height + 20);

    // gameOverText background
    let scoreTextBg = this.add.graphics();
    scoreTextBg.fillStyle(0x000000, 0.7);
    scoreTextBg.fillRect(gameW/2 - scoreText.width/2 - 10, gameH/2 - scoreText.height/2 - 110, scoreText.width + 20, scoreText.height + 20);

    // gameOverText background
    let scoreValueBg = this.add.graphics();
    scoreValueBg.fillStyle(0x000000, 0.7);
    scoreValueBg.fillRect(gameW/2 - scoreValue.width/2 - 10, gameH/2 - scoreValue.height/2 - 35, scoreValue.width + 20, scoreValue.height + 20);

  this.time.addEvent({
      delay: 2000,
          repeat: 0,
          callback: function(){
            this.scene.start('Home');
      },
      callbackScope: this
  }, this);
};
