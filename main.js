
function game () {}

game.prototype = {
    create: function() {
    
        //create background
        this.game.add.tileSprite(0, 0, 512, 650, 'bg')
    
        //create platforms group and add game physics to group
        platforms = this.game.add.group()
        platforms.enableBody = true
    
        //create ground platform and scale image to fit game size
        let ground = platforms.create(0, this.game.world.height -40, 'tile57')
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
        flag = this.game.add.sprite(30, 380, 'flag')
        this.game.physics.arcade.enable(flag)
        flag.enableBody = true
    
    
        //create player and add physics, gravity, and bounce
        player = this.game.add.sprite(300, this.game.world.height - 200, 'player_1')
        this.game.physics.arcade.enable(player)
        player.scale.setTo(0.8, 0.8)
        player.body.bounce.set(0.5)
        player.body.gravity.y = 500
        player.body.collideWorldBounds = true
        
    
        //create arrow, place above player location, follow player movement, set pivot properties
        arrow = this.game.add.sprite(25, 25, 'arrow')
        this.game.physics.arcade.enable(arrow)
        player.addChild(arrow)
        arrow.pivot.y = 30
        arrow.anchor.set(0.5)
    
        //create Par/Stroke/Score text and place on screen
        parText = this.game.add.text(20, 20, 'Par: ' + par, { fontSize: '40px', fill: '#000'})
        strokeText = this.game.add.text(20, 50, 'Strokes: ' + strokes, { fontSize: '40px', fill: '#000'})
    
    
        //Add keyboard input 'listeners'
        cursors = this.game.input.keyboard.createCursorKeys()
        this.game.input.keyboard.addKey([Phaser.Keyboard.SPACEBAR])    
    },
    
    update: function() {

        //hide arrow while ball is moving, show arrow when ball stops
        function hideArrow() {
            if (Math.floor(player.body.velocity.y) !== -3 || player.body.velocity.x !== 0) {
                arrow.alpha = 0
            }
            else {
                arrow.alpha = 1
            }
        }

        

        //set game physics
        this.game.physics.arcade.collide(player, platforms)
        this.game.physics.arcade.overlap(player, flag, checkWin)
    
        //set player velocity drag to keep from moving endlessly after a shot
        player.body.drag.set(50)
    
        //pointer movement logic
        if (cursors.left.isDown) {
            arrow.rotation -= 0.1
        }
        else if (cursors.right.isDown) {
            arrow.rotation += 0.1
        }

        //update strokeText after each shot
        function updateStrokes () {
        strokeText.text = 'Strokes: ' + strokes
        }
    
        
        //Shoot player ball when SPACEBAR pressed and add to strokes count
        if (this.game.input.keyboard.isDown([Phaser.Keyboard.SPACEBAR]) && player.body.touching.down) {
            swing.play()
            strokes ++
            this.game.physics.arcade.moveToXY(player, arrow.body.x + 5, arrow.body.y, 600)
            updateStrokes()
            score = (strokes - par)
        }

        hideArrow()

        //once win condition achieved, remove player from game screen, stop music, show alert with score and button to play again
        function gameOver() {
            music.pause()
            player.kill()
            cheer.play()
            
            swal ({
                title: "Nice Shot, Tiger!",
                text: "Your final score is " + score,
                button: "Play Again"
            })
            .then ((value) => {
                if (value) {
                    // this.game.state.restart()
                    window.location.reload()
                }
                // else {
                //     this.game.state.restart()
                // }
            })
        }

        //check if player has landed on flag and stopped moving
        function checkWin() {
            if (player.body.velocity.x === 0 && Math.floor(player.body.velocity.y) === -3) {
            gameOver()
            }
        }
            
    }
    
}






