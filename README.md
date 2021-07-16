# Boomerang!

## Introduction
It's time to design the world's best games with futuristic graphics and carefully crafted physics! What do you need for this? Emoji! And of course, database skills. You knowledge of OOP will also come in handy.

What will the game look like? The game will have the main character (it will be you). Choose an emoji for yourself :) There will also be enemies in the game. First, make sure that there is only one enemy. Find emoji for him too. You might already know what is gonna happen next, huh? Fight your enemy! There is a distance between you two. You have a boomerang that you can throw and it returns to you. The enemy has nothing but if it touches you, then you instantly lose. Can you picture the game? You can further develop it! You can have lots of enemies, they come with different numbers of lives, different speeds, in different guises and so on. But start with MVP. And do not forget that you should definitely store data in `postgress`!


> You might need the following modules:
>- `sequelize`
>- `keypress` or `readline`
>- `play-sound`

<img src="readme-assets/xena.jpg" alt="drawing" width="700"/>


*Shall we begin?*

## Releases

### Release 0. Оh! What are these files?
Yes, you already have some project structure, template classes and methods. The fact is that really long time ago, in his school years, your old friend (the same farmer Fedor :tractor:), already made such a game but no one taught him how to use `git`. Therefore we asked him to, at least, remember the basic structure of the project and this is what came out of it. You are not required to use the proposed structure but we recommend that you go through it anyway. What if it gives you something to think about?

- `run.js` - script to start the game. All the game settings will be imported here.
- `src/Game.js` - main class of the game. It is a kind of a Controller that binds all the classes. It also checks the current state of the game, calls `View` for rendering.
- `src/View.js` - do you remember about `MVC`? So then this is `V`. This class is responsible for displaying the game in the console.
- `src/keyboard.js` - script that is not yet linked to other project files but can be very useful. It will help you set up controls and learn how to work with keypress events.
- `src/game-models/Hero.js` - this is your hero class. Here you should have all the movement logic, throwing a boomerang and so on.
- `src/game-models/Enemy.js` - this is your enemy class.
- `src/game-models/Boomerang.js` - this is a boomerang class. Instead of boomerang, you can come up with something different, you can make a few kinds of weapons. Don't forget to pass the weapon to your charachter. By the way, you can give your character an option to choose at the beginning of the game.  

### Release 1. Shall we model the logic of the game?

Think about the logic of the game. First, think about what you want to get in the [MVP] (https://en.wikipedia.org/wiki/Minimum_viable_product). You don't need to write any code for this! Get together with your team and just brainstorm! Write down all the ideas on a piece of paper, draw pictures and diagrams! Think about what you want to get by the end of the working day.

- How will you draw yourself and the enemy?
- How will the boomerang fly?
- What happens when the character touches the enemy?
- Will you separate logic and display in the code? (What if you are later asked to rewrite everything to the web version: how to organize the code initially so that moving the game to the web is not so painful?)
- What additional functionality would you like to implement?

This list of questions that have to be discussed with the team should be long enough. Keep going! Keep making it longer!

### Release 2. What is in the data base?

What do you want to store in the database? Nothing? Nope, that won't work. We need to make sure that this game is played all over the world and that the results of all the players can be viewed after 10 years. At least, you need to store: 

- Users who played the game. You can register for the game so that a person first enters his name (you can add other data), and then he or she can play.
- The results of each game. This is necessary to compile player statistics, ratings, etc. The results may include the game time, how many enemies were killed and other parameters - it depends on your implementation of the game.
- Enemies. They can have different parameters: appearance, speed, survivability, maybe even a weapon. Therefore, it will be cool if possible enemies are stored in the database and pulled out from there when the game starts.

You have to prepare schemas for the specified entities. You can store other information in the database if your implementation requires it. The database schema can change during development.

<img src="readme-assets/mem.jpg" alt="drawing" width="500"/>

*So? How is it going?*


### Release 3. MVP

Is the logic thought out and the DB models have already filled your entire hard drive? Excellent. Move on to creating an MVP. It should be uncomplicated. For example, you can implement the following functionality:
- Registration for the game;
- Display of the main character and the enemy;
- Ability to throw a boomerang by pressing a key;
- Saving the results in the database (the user, how many enemies he defeated, how long the game took).

<img src="readme-assets/boomerang-0.gif" alt="drawing" width="500"/>

*MVP example*

Hoewever you can come up with your own version. The most important thing is that you gotta have MVP. Don't complicate things.


### Release 4. Developing the game

You have the basics of the game. Now is the time to make all your wishes come true. What would you like from this game? Think back to your team discussions. Most likely you came up with a lot of interesting features. What functionality do you want to implement in the first place? **You can return to the design stage and discuss everything with your team once again.** Develop the game in any direction, share the features between all the team members and make them each in its own branch. But do not forget that you will need to merge everything together. And try to use the database wherever you can!
If you don't know what you want, we suggest you implement the following functionality:
- The database should store heroes for which you can play. They may have different appearances, weapons and other parameters.
- After registering for the game - the user is given the opportunity to choose a character.
- The user can control the hero: move him left and right.
- Enemies run towards your hero (Zombie mode).
- If the enemy touches the hero, you lose.
- You can throw a boomerang by pressing the throw key.
- If the boomerang touches the enemy, the enemy dies but a new one immediately appears.

<img src="readme-assets/boomerang-1.gif" alt="drawing" width="500"/>

*Example of the game with the suggested functionality*

In this animation above there is no character selection since Fedor couldn't get this information from the database. Luckily, your database is so much better!

### Release 5000. Advanced

Everything is too simple for you? Have you already done everything that was required and more? Well, try adding this functionality:
- The field is now two-dimensional. This means you can also move up and down.
- There are many enemies, they go along different paths. If the enemy has reached the beginning of his path, he returns to its end and accelerates a little.
- When you kill an enemy, then in a second a new, stronger one appears, the speed of which is already higher.
- The boomerang now does not return to your hands but does not reach a little. You need to pick it up so you can throw it again. And if the boomerang just lies, then it cannot influence the enemies in any way, they will simply pass by.
- You can add a game menu. So that at the beginning of the game the user can register or enter, go to the settings, select the difficulty level, select a character, see the rating of the players, play the game.
<img src="readme-assets/boomerang-advanced.gif" alt="drawing" width="500"/>

*Example of Advanced implementation of the game*

If you are done with this too, then you just have to turn on the creativity and develop your game on your own! And then you can safely put it on a CD and sell it :)
### Conclusion
Hopefully you've enjoyed this project because it was the most important goal! It is also important that you have practiced working with the database, designed the application using the OOP approach, thought out the logic of the game, worked with input/output, developed creative thinking and did it all, working in a team ❤