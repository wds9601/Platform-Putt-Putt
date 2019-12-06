# Platform-Putt-Putt
Platformer-style Miniature Golf Game

Plat’n’Putt
A 2D platformer-style game heavily influenced by miniature golf – what’s not to like!

Description/Instructions
	Goal:  Reach the flag in Par or under.
	Instructions:
	-Using the Left and Right Arrow keys, rotate the directional arrow to the proper 	angle for your shot.
	-Press Spacebar to “putt” your ball in the direction the arrow is pointing.
	-The ball must remain on the flag, if it rolls or bounces past it, you’ll need to 	try again!

Planning Stages
	Initially, I envisioned a top-down mini-golf game, but when I began to use Phaser I enjoyed playing around with the platformer-style design.  Fond memories of old video games and learning the Phaser physics style eventually led me down the road of combining my mini-golf plan with a side view platformer.  
	I decided to use Phaser 2 to create and design Plat’n’Putt.  While a relatively simple game development framework, it was challenging for me to learn both the syntax and Phaser-specific rules.  I found myself constantly reassessing what would be possible to achieve by the project due date while also creating a simple, fun game that would continue to further my coding skills in a productive way.  
	Some days I would feel as if I should have chosen a game that used more Javascript to continue with what we had been learning in class, but I did find myself applying lessons like proper scoping, function and operator use, and A LOT of debugging while applying different physics to the game.  
	To begin, I sketched out my ideas of the different game screens I would need (title screen, game screen, etc) and the flow of the game as the player made their way through the screens.  Then I began some light pseudo-code to organize the necessary functions and logic I thought I would need to design, and began my game art asset collection.  I spent most of the weekend reading Phaser docs, setting game art and sprites, and applying some game physics to rotate the directional arrow around the ball in a useful manner. 
 
Coding Process 
	 Starting on Monday, I began to apply game world physics and did a lot of reading through Phaser docs and forums to apply the best way to move the ball through the game world in a way that simulated the proper gravity, bounce, and collision effects for a fun golf game.  On Tuesday is when I hit a big blocker while trying to write the code for checking if the ball was in motion – this check would apply to much of my further logic.  After taking all day trying out different physics methods, combinations of code, and debugging, it was recommended to try a different method of measuring motion.  I tried to do so that night and Wednesday morning before stand-up, but to no avail.  Only once I chatted with Gavin and we worked through some errors and console logs did we find a sufficient way to simulate a “resting” position.  YAY! So, after that I needed to refactor some code to apply the new motion check and work on using different game states to show a title screen and have assets preloaded.  
	As I understand now, creating new game states is not super difficult, however because I had made all my code on one JS file, it was a bit of a nightmare separating and properly layering my code into several states.  Once again, I spent a whole night reading through game state docs and getting errors thrown before finally getting the game to work properly again with a title screen.  Thursday is when I tackled designing simple HTML and CSS, and adding game sound assets, as well as spending a few hours getting my SweetAlert pop-ups to reset the game state.  
	While I never really understood what is involved with making a videogame, the idea of being in game development has intrigued me in the past.  After seeing some of the nuts and bolts of simple game design, I am only more interested in furthering my game development skills.
	I was challenged by many aspects of the game development.  Often, I would have an idea that sounded easy to apply in theory then spend several hours researching a technique to accomplish it, only to get bogged down by forum discussions on the topic and finally attempt to hack together some code that would execute the idea.  For example, I needed to find a way to check if the ball was in motion before I could apply other functions (such as arrow visibility, and check-win conditions).  Given my gravity and bounce physics, the ball was constantly in motion on its y-axis and therefor never reached a 0 velocity.  In order to work around that factor, I had to return the Math.floor of the “resting” y-axis motion to simulate a 0 velocity.  Challenges like this, where the original code should have worked as planned, gave me the opportunity to critically think about what is actually occurring in the code and how I can address the issue in a different way.

Stretch goals
Accomplished:
	Directional arrow visibility toggle when ball is in motion
	Creating different game states (preload, start screen, and game)

Remaining:
While these goals would challenge me, I don’t feel they are outside my coding abilities.  I only ran out of time to achieve them:
	Display “Hole in One”, and “Birdie” notifications
	Adding a “Power shot” by holding down the spacebar
	Create several levels, or “holes” to play through
	Create logic for turn-based 2-Player option
	Adding collectible items to the game field (e.g. powerups, coins)
	
Credits
  Game art, icons, background: opengameart.com (kenney.nl, JanaChumi)
  Game sounds: zapsplat.com
  Game font: fonts.google.com (Vernon Adams)


