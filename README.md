# Project 1 - Brickbreaker (Breakout Clone)
## Shivank Rao

#### GITHUB:
##### https://github.com/shivankrao/brickbreaker

#### LIVE SITE:
##### https://nervous-wright-0708a0.netlify.com/

#### WIREFRAME:
##### https://www.figma.com/file/HyBDPHjT8rbQAzeiNCmSXB65/basic-brick-breaker-wireframe?node-id=0%3A1

#### TRELLO:
##### https://trello.com/b/2rsaweHX/wdi18-project-1-brickbreaker


## Intro
Breakout is a classic game - one of the first games in fact, based on a modified version of the already popular pong. 

For this project I wanted to recreate a clone of breakout in javascript. I used the phaser library to handle physics and animation.

### How the Game Works
The rules of breakout (brickbreaker) are simple. The player starts off with a set number of lives (the default is set at 5). The player uses the paddle at the bottom of the screen to deflect the ball onto the array of bricks at the top of the screen. When the player has destroyed all of the bricks, they win the game. Each time the player fails to catch the ball with the paddle, they lose a life. When all lives are lost, the player loses the game.

### The Phaser Library
Phaser is a gaming library that uses pre-built functions inside a canvas. For this project I used Phaser V2.11.1. https://phaser.io/ 

### Problems I Ran Into
I'll say I bit off more than I could chew with this project. Not because breakout itself is a hard game to make, the javascript is relatively simple. My biggest mistake was trying to utilize the Phaser library. Going into the project I assumed that, like other libraries such as Bootstrap, Phaser would be simple enough to use and would not require further instruction past regular javascript knowledge. I realized too late during development that the library is so vast, and uses so many of its own functions and syntax, on top of there being so many different versions, each with differing syntax - led to me finding that many of the tutorials I was using to learn Phaser in such a short amount of time would for the most part not work. After a while I realized I could download an older version, which opened up more tutorials for me to piggy back off of. After many attempts of trying to create the game logic on my own, using Phaser syntax and structure, I was forced to give up and use the only tutorial that worked - the Mozilla Developer Network tutorial on 2D Phaser Breakout construction. 

The positive of Phaser is that when the library works, it really works - the fact that it is able to handle things like collision physics, movement physics, and animation with built in functions in the end did save some headache compared to if I had decided to use canvas and create the game engine on my own. In terms of creating dryer code for games that would otherwise require many different functions for different actions, a user well-versed in Phaser syntax and structure would really benefit from its use. I imagine Phaser making more sense for larger gaming projects vs. Canvas. In the future I do want to see if I can learn Phaser because it seems as though after the original learning curve, it can really be a useful library. I do recommend that Phaser organize and clean up its website and tutorials so as to avoid any further confusion and frustration among developers new to their library.

### Added Features
Some features I added were sound effects, background, paddle, ball, and brick sprites, and start button animation.

### Features I want to add
After I teach myself more of the Phaser library, I would like to add more levels, varying levels of difficulty, and different types of bricks that do different things (add lives, bricks that take longer to break, bricks that fall). My Trello board has the complete list of user stories that I created upon starting out that I will eventually get to. 

