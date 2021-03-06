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
    //could not get this to work
    game.load.image('bg', 'assets/images/background.png')

    game.load.image('paddle', 'assets/images/paddle/paddle-grey.png');
    game.load.image('brick', 'assets/images/bricks/17-Breakout-Tiles.png');
    game.load.image('ball', 'assets/images/ball/ball-gold.png', 20, 20);
    game.load.image('button', 'assets/images/buttons/start.png', 120, 40);

    game.load.audio('break', 'assets/audio/brickbreak.mp3');
    game.load.audio('gameover', 'assets/audio/gameover.mp3');
    game.load.audio('gamestart', 'assets/audio/gamestart.mp3');
    game.load.audio('gamewin', 'assets/audio/win.mp3');
    game.load.audio('lose', 'assets/audio/lose.wav')
}

//adding ball and rendering movement on screen
//loading arcade physics
function create() {
game.physics.startSystem(Phaser.Physics.ARCADE);

var bg = game.add.sprite(0,0, 'bg');
bg.scale.setTo(80, 60);

 //adds start button to game, sets position
 startButton = game.add.button(game.world.width*0.5, game.world.height*0.6, 'button', startGame, this, 1, 0, 2);startButton.scale.setTo(0.5,0.5);
 startButton.anchor.set(0.5);

 //function to start game on button press
 function startGame() {
    gameStart = game.add.audio ('gamestart');

     //removes button after pressed
     var killButton = game.add.tween(startButton.scale);
     killButton.to({x:0,y:0}, 200, Phaser.Easing.Linear.None);

     killButton.onComplete.addOnce(function(){
        startButton.kill();
    }, this);
    killButton.start();     

     gameStart.play();

     //enables velocity
     ball.body.velocity.set(500, -500);

     //playing variable no longer false
     playing = true;

     //adding sound effects
     breakSound = game.add.audio ('break');
     gameOver = game.add.audio ('gameover');
     gameWin = game.add.audio ('gamewin');
     lose = game.add.audio ('lose');

 }
 

     //BALL
         //adding ball sprite to game
        ball = game.add.sprite(game.world.width*0.5, game.world.height-115, 'ball');
        ball.anchor.set(0.5);        
        //enabling arcade physics onto ball
            game.physics.enable(ball, Phaser.Physics.ARCADE);
        //collision physics for ball (creates object boundaries)
            ball.body.collideWorldBounds = true;
        //makes ball bounce off boundaries
            ball.body.bounce.set(1);
        //setting world boundaries as true
            ball.checkWorldBounds = true;
        //setting up variable to handle ball leaving screen
            ball.events.onOutOfBounds.add(ballLeaveScreen, this);

           



    //creating group to connect score with bricks hit
    initBricks() 

            textStyle = { font: '18px Arial', fill: '#ffffff' };

            scoreText = game.add.text(5, 5, '0', textStyle);

            livesText = game.add.text(game.world.width-5, 5, '❤️ '+lives, textStyle);

            livesText.anchor.set(1,0);

            lifeLost = game.add.text(game.world.width*0.5, game.world.height*0.5, 'Click to continue', textStyle);

            // playAgain = game.add.text(game.world.width*0.5, game.world.height*0.5, 'Play again?', textStyle);

            lifeLost.anchor.set(0.5);

            lifeLost.visible = false;
    
            

        //PADDLE
            //adding paddle sprite to game
            paddle = game.add.sprite(game.world.width*0.5, game.world.height-45, 'paddle');
            //sets anchor on paddle from bottom edge
            paddle.anchor.set(0.5,1);
            //enabling physics for paddle
            game.physics.enable(paddle, Phaser.Physics.ARCADE);
            //making paddle immovable
            paddle.body.immovable = true;


    
    //disabling collision detection at bottom of screen
    game.physics.arcade.checkCollision.down = false;
    ball.checkWorldBounds = true;
}


function update() {
    //collision physics for ball/paddle
    game.physics.arcade.collide(ball, paddle, ballHitPaddle);
    game.physics.arcade.collide(ball, bricks, ballHitBrick);

    //moves paddle based on mouse input, sets default position in middle of screen, if statement to make paddle immovable before start button is pressed
    if(playing) {
        paddle.x = game.input.x || game.world.width*0.5;
    }
}

//handling brick creation styling (taken directly from mdn tutorial)
function initBricks() {
    brickInfo = {
        width: 50,
        height: 20,
        count: {
            row: 14,
            col: 7
        },
        offset: {
            top: 50,
            left: 60
        },
        padding: 10
    };

    //for loop to handle brick creation (taken directly from mdn tutorial, below is my previous attempt)
    this.bricks = game.add.group();

    //iterating through columns and rows, taking into account brick width, height, and offset, then multiplying by set row and column parameters to create a full array
    for(c=0; c<brickInfo.count.col; c++) {
        for(r=0; r<brickInfo.count.row; r++) {
            var brickX = (r*(brickInfo.width+brickInfo.padding))+brickInfo.offset.left;
            var brickY = (c*(brickInfo.height+brickInfo.padding))+brickInfo.offset.top;
            

            addBrick = game.add.sprite(brickX, brickY, 'brick');
            game.physics.enable(addBrick, Phaser.Physics.ARCADE);
            addBrick.body.immovable = true;
            addBrick.anchor.set(0.5);
            bricks.add(addBrick);

    // this.bricks = game.add.group();
    // this.generateBricks(this.bricks);

    // generateBricks () {
    //     let rows = 5
    //     let columns = 15
    //     let xOffset = 50
    //     let yOffset = 45

    //     for (let y = 0; y < rows; y++) {
    //         for (let x=0; x < columns; x++) {

    //             this.game,
    //             x * xOffset,
    //             y * yOffset

    //             addBrick = game.add.sprite(brickX, brickY, 'brick')

    //     }
    }

        }
    }


//creates animation for brick destroyal
function ballHitBrick(ball, brick) {
    var killBrick = game.add.tween(brick.scale);
    killBrick.to({x:0,y:0}, 200, Phaser.Easing.Linear.None);

    //kills bricks when hit, plays sound
    killBrick.onComplete.addOnce(function(){
        brick.kill();
        breakSound.play();
    }, this);

    //sets score, alert box when player destroys all bricks
    killBrick.start();    
    score += 10;
    scoreText.setText(score);
        if(score === brickInfo.count.row*brickInfo.count.col*10) {
            gameWin.play();
            alert('You won!');
    
    }
}

//function to handle actions when ball leaves screen but player has not lost all lives yet
function ballLeaveScreen() {
    lives--;
    if(lives) {
        livesText.setText('❤️ '+lives);
        lifeLost.visible = true;
        lose.play();

        //resetting assets
        ball.reset(game.world.width*0.5, game.world.height-115);
        ball.anchor.set(0.5);        
        paddle.reset(game.world.width*0.5, game.world.height-45);

        game.input.onDown.addOnce(function(){
            lifeLost.visible = false;
            ball.body.velocity.set(500, -500);
        }, this);
    }
    else {
        livesText.setText('💔 '+lives);
        alert('Game over!');

        gameOver.play();

        ball.reset(game.world.width*0.5, game.world.height-115);
        paddle.reset(game.world.width*0.5, game.world.height-45);
        lifeLost.visible = false;

        
}
}

    function playAgain() {
        if (lives == 0)
        game.input.onDown.addOnce(function(){
            playAgain.visible = true;

          }, this);
        }
    
    

//function to handle collision physics for ball and paddle
function ballHitPaddle(ball, paddle) {
    ball.body.velocity.x = -1*5*(paddle.x-ball.x);
}


      


 



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






     ////at the beginning of the game, the paddle starts off big
     ////the ball moves relatively slow
     ////as the player advances through levels, the paddle becomes smaller, and the ball moves faster
     ////I want the number of bricks in each level to remain the same (space constraints), but the positions of the bricks to be randomized with each level. 

// //the ball bounces off the bricks and when it hits the brick, the brick disappears





     ////I want an animation when the brick is destroyed

 //every time the ball hits a brick, the player gains one point





//I want it so that in each level, a few bricks will randomly give the user extra points (color coded by amount of points)

    //each player is given 5 lives
    //if the ball does not land on the brick, the player loses a life 

     //some bricks will randomly grant the user with an extra life