
function mainMenu () {}

mainMenu.prototype = {
    preload: function () {
        WebFontConfig = {
            custom: {
                families: ['Damion', 'cursive'],
                urls: ['https://fonts.googleapis.com/css?family=Damion&display=swap']
            }
        }

    },

    create: function() {
        //background tile
        this.game.add.tileSprite(0,0, 512, 650, 'bg')

        //add title text on game screen and format
        titleStyle = {font: '60px Damion', fill: '#000', align: 'center'}
        text = this.game.add.text(this.game.world.centerX, 100, "Plat'n'Putt ", titleStyle)
        text.anchor.set(0.5)

        //add clickable text to start game, and format
        optionStyle = {font: '30px Damion', fill: '#000', align: 'center'}
        txt = this.game.add.text(this.game.world.centerX - 110, 400, 'Click Here to Begin', optionStyle)
        txt.inputEnabled = true
        txt.events.onInputOver.add(function (target) {
            target.fill = "#FEFFD5"
        })
        txt.events.onInputOut.add(function (target) {
            target.fill = "#000"
        })

        music.play()
    },

    update: function() {

        if(this.game.input.activePointer.justPressed()) {
        swing.play()
        this.game.state.start('Game')
        }
    }
}