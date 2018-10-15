var load  = {

    preload: function () {
        var loading = game.add.text(80, 150, 'loading...',
        {font: '30px Courier', fill: '#ffffff'})

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.load.image('ball', 'assets/images/ball/ball-gold.png');
        game.load.image('paddle', 'assets/images/paddle/paddle-grey.png');
    },

    create: function () {
        game.state.start('menu');
}

};