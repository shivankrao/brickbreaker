//initializing the game in phaser
var game = new Phaser.Game(900, 600, Phaser.AUTO, 'gameDiv')

//adding each game state
game.state.add('boot', boot);
game.state.add('load', load);
game.state.add('menu', menu);
game.state.add('brickbreaker', brickbreaker);
// game.state.add('win', win);
game.state.add('gameover', gameover);
game.state.add('game', game);


//starting the game by calling the boot state
game.state.start('boot');