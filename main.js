const game = new Phaser.Game(512, 650, Phaser.AUTO, 'game', {
    preload: preload,
    create: create,
    update: update
})

let arrow
let player
let cursors
let score = 0
let scoreText
let platforms
let gems
let ledge
let flag


function preload () {
    //set game phsyics
    game.physics.startSystem(Phaser.Physics.ARCADE)
    // game.physics.arcade.gravity.y = 300

    //Load game images
    game.load.image('bg', 'assets/img/hills_bg.png' )
    game.load.image('tile57', 'assets/img/57.png')
    game.load.image('player_1', 'assets/img/player_1.png')
    game.load.image('gemYellow', 'assets/img/gemYellow.png')
    game.load.image('arrow', 'assets/img/arrowUp.png')
    game.load.image('flag', 'assets/img/flagRed2.png')

    //Load game spritesheets

    //Load game sounds

}

function create () {
    //create background
    game.add.tileSprite(0, 0, 512, 650, 'bg')

    //create platforms group and add game physics to group
    platforms = game.add.group()
    platforms.enableBody = true

    //create ground platform and scale image to fit game size
    let ground = platforms.create(0, game.world.height -40, 'tile57')
    ground.scale.setTo(7, 1)
    ground.body.immovable = true

    //create ledges 
    ledge = platforms.create(10, 450, 'tile57')
    ledge.body.immovable = true

    ledge = platforms.create(200, 500, 'tile57' )
    ledge.body.immovable = true

    ledge = platforms.create(400, 550, 'tile57')
    ledge.body.immovable = true

    //create flag and place on top ledge
    flag = game.add.sprite(30, 380, 'flag')
    game.physics.arcade.enable(flag)
    flag.enableBody = true


    //create player and add physics, gravity, and bounce
    player = game.add.sprite(300, game.world.height - 200, 'player_1')
    game.physics.arcade.enable(player)
    player.scale.setTo(0.8, 0.8)
    player.body.bounce.y = 0.5
    player.body.bounce.x = 0.3
    player.body.gravity.y = 500
    player.body.collideWorldBounds = true

    console.log(player.body.x, player.body.y)
    

    //create arrow, place above player location, follow player movement
    arrow = game.add.sprite(25, 25, 'arrow')
    game.physics.arcade.enable(arrow)
    player.addChild(arrow)
    arrow.pivot.y = 30
    arrow.anchor.set(0.5)
    
    console.log(arrow.x, arrow.y)
    

    //create gems group and add physics to group
    gems = game.add.group()
    gems.enableBody = true

    // //create 10 gems, space evenly and add gravity, bounce
    // for (let i = 0; i < 10; i++) {
    //     let gem = gems.create(i * 50, 0, 'gemYellow')
    //     gem.body.gravity.y = 1000
    //     gem.body.bounce.y = 0.3 + (Math.random() * 0.2)
    // }

    //create Score text and place on screen
    scoreText = game.add.text(20, 20, 'Score: ', { fontSize: '40px', fill: '#000'})

    //Add keyboard input 'listeners'
    cursors = game.input.keyboard.createCursorKeys()
    game.input.keyboard.addKey([Phaser.Keyboard.SPACEBAR])

    timer = game.time.create(false)
    //design html page with buttons and titles and instructions
}

function update () {
    //win conditions
        //make it to flag w/in par shots, and collect as many gems as possible to add to score?
        game.physics.arcade.overlap(player, flag, startTimer)

    //set player velocity drag to keep from moving endlessly after a shot
    player.body.drag.set(50)

    game.physics.arcade.collide(player, platforms)
    game.physics.arcade.collide(gems, platforms)   
    game.physics.arcade.overlap(player, gems, collectGems)

    //pointer movement logic
    if (cursors.left.isDown) {
        arrow.rotation -= 0.2
        console.log('new x position: ', arrow.body.x)
        console.log("new y postition: ", arrow.body.y)
    }
    else if (cursors.right.isDown) {
        arrow.rotation +=0.2
    }

    
    //Shoot player ball when SPACEBAR pressed
    if (game.input.keyboard.isDown([Phaser.Keyboard.SPACEBAR]) && player.body.touching.down) {
        console.log("SPACEBAR DOWN")
        game.physics.arcade.moveToXY(player, arrow.body.x + 5, arrow.body.y, 500)
        // checkArrow()
    }
    
    
    
}

// //Helper Functions
//create function for collecting gems = remove from game,  and add to players score
function collectGems(player, gem) {
    gem.kill()
    score += 1
    scoreText.text = 'Score: ' + score
}

function startTimer () {
    game.time.events.add(Phaser.Timer.SECOND * 2, levelWin)
}

function levelWin() {
    console.log('You Win!')
    
}

// function checkArrow() {
//     hideArrow()
//     showArrow()
// }

// function hideArrow() {
//     if (player.body.velocity.y < 0 || player.body.velocity.y > 0) {
//         arrow.alpha = 0
//     }
// }

// function showArrow() {
//     if (player.body.velocity.y = 0) {
//         arrow.alpha = 1
//     }
// }
