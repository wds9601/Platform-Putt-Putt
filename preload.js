game = new Phaser.Game(512, 650, Phaser.AUTO, 'game', {
    preload: preload,
    create: create,
    // update: update
})




let arrow
let player
let cursors
let scoreText, parText, strokeText
let platforms
let par = 3
let strokes = 0
let ledge
let flag



function preload() {
    //set game physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    //Load game images
    this.game.load.image('bg', 'assets/img/hills_bg.png' )
    this.game.load.image('tile57', 'assets/img/57.png')
    this.game.load.image('player_1', 'assets/img/player_1.png')
    this.game.load.image('arrow', 'assets/img/arrowUp.png')
    this.game.load.image('flag', 'assets/img/flagRed2.png')

    //Load game sounds
    this.game.load.audio('music', 'assets/sounds/bluegrass_instr.mp3')
    this.game.load.audio('swing', 'assets/sounds/golf_shot_01.mp3')
    this.game.load.audio('hole', 'assets/sounds/golf_ball_in_hole.mp3')
    this.game.load.audio('cheer', 'assets/sounds/short_cheer.mp3')

    //Load game states
    this.game.load.script('MainMenu', 'mainmenu.js')
    this.game.load.script('Game', 'main.js')

    //Add game states
    this.game.state.add('MainMenu', mainMenu)
    this.game.state.add('Game', game)

}

function create() {

    music = this.game.add.audio('music', 0.5)
    swing = this.game.add.audio('swing')
    hole = this.game.add.audio('hole')
    cheer = this.game.add.audio('cheer')

    this.state.start('MainMenu')
}