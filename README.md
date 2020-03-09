## Plat'n'Putt
https://wds9601.github.io/Platform-Putt-Putt/
Platformer-style Miniature Golf Game
Plat’n’Putt A 2D platformer-style game heavily influenced by miniature golf – what’s not to like! 
    
## Technologies used
* HTML/CSS
* JavaScript
* Phaser.IO

## Directions
- Description/Instructions Goal: Reach the flag in Par or under. 
- Instructions: 
    - Using the Left and Right Arrow keys, rotate the directional arrow to the proper angle for your shot. 
    - Press Spacebar to “putt” your ball in the direction the arrow is pointing. 
    - The ball must remain on the flag, if it rolls or bounces past it, you’ll need to shoot again!

## Initial Planning
- Originally, I envisioned a top-down mini-golf game, but when I began to use Phaser I enjoyed playing around with the platformer-style design. Fond memories of old video games and learning the Phaser physics style eventually led me down the road of combining my mini-golf plan with a side view platformer.
- To begin, I sketched out my ideas of the different game screens I would need (title screen, game screen, etc) and the flow of the game as the player made their way through the screens. Then I began some light pseudo-code to organize the necessary functions and logic I thought I would need to design, and began my game art asset collection. I spent most of the weekend reading Phaser docs, setting game art and sprites, and applying some game physics to rotate the directional arrow around the ball in a useful manner.
- I decided to use Phaser 2 to create and design Plat’n’Putt. While a relatively simple game development framework, it was challenging for me to learn both the syntax and Phaser-specific rules. I found myself constantly reassessing what would be possible to achieve by the project due date while also creating a simple, fun game that would continue to further my coding skills in a productive way. I applied lessons like proper scoping, function and operator use, and A LOT of debugging while implementing different physics to the game.

## Development process
   - Nov 25, 2019
        - Began to apply game-world physics
        - Researched simulating proper gravity, bounce, and collision effects for a fun golf game.
   - Nov 26, 2019
        - I hit a big blocker while trying to write the code for checking if the ball was in motion. 
        - After taking all day trying out different physics methods, combinations of code, and debugging, it was recommended to try a different method of measuring motion.
   - Nov 27, 2019
        - After 24 hours, was able to find solution to motion-check function and began to implement this logic into further game elements.
        - Began to research using game states to create start screen and preload.
   - Nov 28, 2019
        - Desinged remaining screens and website with simple HTML and CSS, and added game sound assets
        - Spent a few hours getting my SweetAlert pop-ups to reset the game state.
        - Added difficulty to the game field by adding more obstacles
        - Deployed on Github Pages
## If I had another week...
    - Display "Hole in One" and "Birdie" notifications
    - Add a "Power Shot" by holding down the spacebar
    - Create several more levels, or "holes" to through
    - Create logic for turn-based 2-Player option
    - Add collectible items to the game field (e.g. power-ups, coins)
Collapse

