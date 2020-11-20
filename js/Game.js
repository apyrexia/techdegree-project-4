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
  getRandomPhrase() {
    const randNum = Math.floor(Math.random() * Math.floor(5));
    const randomPhrase = new Phrase(this.phrases[randNum].phrase);
    return randomPhrase;
  }
  //Begins game by selecting a random phrase and displaying it to the user
  startGame() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  //Checks for winning move
  checkForWin() {
    const letters = document.getElementById('phrase').querySelector('ul').querySelectorAll('li');
    let result = true;
    for (let i = 0; i < letters.length; i++) {
      if (!letters[i].classList.contains("matched") && !letters[i].classList.contains("space")) {
        result = false;
      }
    }
    return result;
  }
  //Increases the value of the missed property
  //Removes a life from the scoreboard
  //Checks if player has remaining lives and ends game if player is out
  removeLife() {
    this.missed += 1;
    const tries = document.getElementById('scoreboard').querySelector('ol');
    tries.removeChild(tries.lastElementChild);
    if (this.missed >= 5) {
      this.gameOver();
    }
  }
  //Displays game over message
  gameOver() {
    const overlay = document.getElementById('overlay');
    const gameOverMessage = document.createElement('h1');
    gameOverMessage.textContent = 'GAME OVER';
    gameOverMessage.style.color = 'red';
    overlay.appendChild(gameOverMessage);
    const tryAgain = document.getElementById('btn__reset');
    tryAgain.textContent = 'Try Again';
    overlay.style.display = '';
  }
  handleInteraction() {

  }
 }

