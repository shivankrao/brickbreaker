// //declaring phaser game 
var game = new Phaser.Game(900, 600, Phaser.AUTO, null, {preload: preload, create: create, update: update});


//declaring global variables
var ball;
var paddle;
var bricks;

var addBrick;
var brickInfo;
var scoreText;

var score = 0;
var lives = 5;

var livesText;
var lifeLost;

var playing = false;
var startButton;

//preloading assets, scaling game
function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
    game.load.image('bg', 'assets/images/background.png')

    game.load.image('paddle', 'assets/images/paddle/paddle-grey.png');
    game.load.image('brick', 'assets/images/bricks/17-Breakout-Tiles.png');
    game.load.image('ball', 'assets/images/ball/ball-gold.png', 20, 20);
    game.load.image('button', 'assets/images/buttons/start.png', 120, 40);

    game.load.audio('break', 'assets/audio/brickbreak.mp3');
    game.load.audio('gameover', 'assets/audio/gameover.mp3');
    game.load.audio('gamestart', 'assets/audio/gamestart.mp3');
    game.load.audio('gamewin', 'assets/audio/win.mp3');
}

var breakSound;
var gameOver;
var gameStart;
var gameWin



      


 



// // gameover: function() {
// //         if (ball.events.onOutOfBounds = true); {
// //         game.state.start('gameover');
// //     }

// // },

// };

// //start game

// //game initializes and player clicks start to begin playing




// //player clicks paddle with ball on it to begin playing




// //when the player clicks the paddle the ball is released






//     ////at the beginning of the game, the paddle starts off big
//     ////the ball moves relatively slow
//     ////as the player advances through levels, the paddle becomes smaller, and the ball moves faster
//     ////I want the number of bricks in each level to remain the same (space constraints), but the positions of the bricks to be randomized with each level. 

// //the ball bounces off the bricks and when it hits the brick, the brick disappears





//     ////I want an animation when the brick is destroyed

// //every time the ball hits a brick, the player gains one point





//     //I want it so that in each level, a few bricks will randomly give the user extra points (color coded by amount of points)

// //each player is given 5 lives
// //if the ball does not land on the brick, the player loses a life 

//     //some bricks will randomly grant the user with an extra life