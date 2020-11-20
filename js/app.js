/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  const phrase = new Phrase('Life is like a box of chocolates');
//  console.log(`Phrase - phrase: ${phrase.phrase}`)

//listens on the start button to create the game and start it

let game = undefined;
document.getElementById('btn__reset').addEventListener("click", () => {
  game = new Game()
  game.createPhrases('Hear hear', 'Dont Count Your Chickens Before They Hatch', 'IDK what Im doing', `par for the course`, `is math related to science`);
  game.startGame();
});
