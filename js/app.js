/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  const phrase = new Phrase('Life is like a box of chocolates');
//  console.log(`Phrase - phrase: ${phrase.phrase}`)

const game = new Game()
game.createPhrases('Get cracking', 'meow meow', 'IDK what Im doing', `pee pee poo poo was a good pig`, `is math related to science`)
game.getRandomPhrase().addPhraseToDisplay();