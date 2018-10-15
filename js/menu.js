var menu = {

    create: function () {

        var name = game.add.text(80, 80, 'Brickbreaker', {font: '50px Arial', fill: '#ffffff' });

        var startLabel = game.add.text(80, game.world.height-80, 'press any key to start', {font: '25px Arial', fill: '#ffffff'});

        var key = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        key.onDown.addOnce(this.start, this);

    },

    start: function () {
        game.state.start('brickbreaker');
    },

    };

