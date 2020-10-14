/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(missed = 0, phrases = [], activePhrase = 'null') {
      this.missed = missed;
      this.phrases = phrases;
      this.activePhrase = activePhrase;
   }
   createPhrases(phrase1, phrase2, phrase3, phrase4, phrase5) {
     this.phrases = [
      {phrase: phrase1}, 
      {phrase: phrase2}, 
      {phrase: phrase3}, 
      {phrase: phrase4}, 
      {phrase: phrase5}
    ];
     return this.phrases;
   }
   getRandomPhrase(){
    const randNum = Math.floor(Math.random() * Math.floor(5));
    const randomPhrase = new Phrase(this.phrases[randNum].phrase);
    return randomPhrase;
   }
 }

