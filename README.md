# Platform-Putt-Putt
Platformer-style Miniature Golf Game

Plat’n’Putt
A 2D platformer-style game heavily influenced by miniature golf – what’s not to like!

Description/Instructions
  Goal:  Reach the flag in Par or under.
  Instructions:
	-Using the Left and Right Arrow keys, rotate the directional arrow to the proper 	angle for your shot.
	-Press Spacebar to “putt” your ball in the direction the arrow is pointing.
	-The ball must remain over the flag, if it rolls or bounces past it, you’ll need 	to try again!

Planning Stages, wire frames, notes, drawings, art collection
	Initially top-down mini-golf game, when I began to use Phaser I enjoyed playing around with the platformer-style design.  Fond memories of old video games and learning the Phaser physics style eventually led me down the road of combining my mini-golf plan with a side view platformer.  
	While I never really understood what is involved with making a videogame, the idea of being in game development has intrigued me in the past.  After seeing some of the nuts and bolts of simple game design, I am only more interested in furthering my game development skills.  

Coding Process – languages, phaser involvement, blockers, day-to-day successes and struggles
	I decided to use Phaser 2 to create and design Plat’n’Putt.  While a relatively simple game development framework, it was challenging for me to learn both the syntax and Phaser-specific rules.  I found myself constantly reassessing what would be possible to achieve by the project due date while also creating a simple, fun game that would continue to further my coding skills in a productive way.  
Some days I would feel as if I should have chosen a game that used more Javascript to continue with what we had been learning in class, but I did find myself applying lessons like proper scoping, function and operator use, and A LOT of debugging while applying different physics to the game.  
	I was challenged by many aspects of the game development.  Often, I would have an idea that sounded easy to apply in theory then spend several hours researching a technique to accomplish it, only to get bogged down by forum discussions on the topic and finally attempt to hack together some code that would execute the idea.  For example, I needed to find a way to check if the ball was in motion before I could apply other functions (such as arrow visibility, and check-win conditions).  Given my gravity and bounce physics, the ball was constantly in motion on its y-axis and therefor never reached a 0 velocity.  In order to work around that factor, I had to return the Math.floor of the “resting” y-axis motion to simulate a 0 velocity.  Challenges like this, where the original code should have worked as planned, gave me the opportunity to critically think about what is actually occurring in the code and how I can address the issue in a different way.

Stretch goals – which ones reached and which ones remaining
Accomplished:
  Directional arrow visibility toggle when ball is in motion
  Creating different game states (preload, start screen, and game)

Remaining:
  While these goals would challenge me, I don’t feel they are outside my coding abilities.  I only ran out of time to achieve them:
	-Display “Hole in One”, and “Birdie” notifications
	-Adding a “Power shot” by holding down the spacebar
	-Create several levels, or “holes” to play through
	-Create logic for turn-based 2-Player option
	-Adding collectible items to the game field (e.g. powerups, coins)
	
	

Credits
  Game art, icons, background: opengameart.com (kenney.nl, JanaChumi)
  Game sounds: zapsplat.com
  Fonts: google.com/fonts
