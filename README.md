Simple HTML5 Game Library Example

This repository shows how to build a very simple JavaScript game library
using the HTML5 <canvas> element.
The library provides functions to create objects, move them, detect
collisions, and display text.

------------------------------------------------------------------------

📂 Project Structure

/my-game/ ├─ index.html # main game file ├─ gameLib.js # the library
with helper functions ├─ player.png # example sprite for the player

------------------------------------------------------------------------

🕹️ Usage

Create Objects

const player = createObject(“player”, 50, 50, 40, 40, null,
“player.png”);

const bloco = createObject(“bloco”, 200, 150, 60, 60,
“blue”);

-   id → unique name for the object
-   x, y → position
-   width, height → size
-   color → fill color (optional)
-   image → sprite (optional)

------------------------------------------------------------------------

Clear Screen

clear();

Erases the entire canvas.

------------------------------------------------------------------------

Draw Objects

drawObjects();

Renders all created objects.

------------------------------------------------------------------------

Keyboard Input

if (keys[“ArrowRight”]) player.x += 2;

if (keys[“ArrowLeft”]) player.x -= 2;

if (keys[“ArrowUp”]) player.y -= 2;

if (keys[“ArrowDown”]) player.y += 2;

keys stores pressed keys.

------------------------------------------------------------------------

Collision Detection

if (isColliding(player, bloco)) {
text(“COLLIDED WITH BLOCK!”, 10, 30,
“green”, 20); removeObject(“bloco”); }

-   isColliding(obj1, obj2) → returns true if overlapping
-   removeObject(id) → removes object

------------------------------------------------------------------------

Draw Text

text(“Hello!”, 10, 30, “black”, 20);

(message, x, y, color, fontSize)

------------------------------------------------------------------------

Game Loop

function loop() { clear(); // game logic drawObjects();
requestAnimationFrame(loop); } loop();

Runs continuously at screen refresh rate.

------------------------------------------------------------------------

🚀 Features

-   Create and draw objects
-   Support for sprites or colors
-   Movement with keyboard input
-   Collision detection
-   Dynamic object removal
-   Text rendering

------------------------------------------------------------------------

📖 Example Game

-   Player moves with arrow keys
-   Collision with the blue block shows a message and removes it
-   Collision with the yellow block removes it

------------------------------------------------------------------------

🔧 Run

1.  Clone/download the repository
2.  Open index.html in a browser
3.  Play using the arrow keys
