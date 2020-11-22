/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  const phrase = new Phrase('Life is like a box of chocolates');
//  console.log(`Phrase - phrase: ${phrase.phrase}`)

//listens on the start button to create the game and start it

let game = undefined;

document.getElementById('btn__reset').addEventListener("click", () => {
  game = new Game()
  game.startGame();
});

//Game event handler for key clicks
function keyClicks() {
  const qwerty = document.getElementById('qwerty');
  qwerty.addEventListener("click", function (e) {
    if (e.target.className === "key") {
      game.handleInteraction(e.target);
    }
  });
}
keyClicks();
