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
    //Resets board
    this.missed = 0;
    const div = document.getElementById('phrase');
    const ul = div.querySelector('ul');
    if (ul.firstChild) {
      const previousChars = ul.querySelectorAll('li');
      for (let i = 0; i < previousChars.length; i++) {
        previousChars[i].remove();
      }
    }
    const tries = document.getElementById('scoreboard').querySelector('ol');
    if (!tries.firstChild) {
      for (let i = 0; i < 5; i++) {
        const heart = document.createElement('li');
          heart.className = "tries";
          heart.innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">'
          tries.appendChild(heart);
      }
    }
    //Starts game
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
      this.gameOver(false);
    }
  }
  //Displays game over message
  gameOver(gameWon) {
    const overlay = document.getElementById('overlay');
    const gameOverMessage = document.getElementById("game-over-message");
    if (gameWon === false) {
      gameOverMessage.textContent = 'Sorry, better luck next time!';
      overlay.style.backgroundColor = '#DD5454';
      overlay.style.display = '';
    } else if (gameWon === true) {
      gameOverMessage.textContent = 'Great job!';
      overlay.style.backgroundColor = '#7BD670';
      overlay.style.display = '';
    }
  }
  //Handles onscreen keyboard button clicks
  //@param (HTMLButtonElement) button - The clicked button element
  handleInteraction(button) {
    if (this.activePhrase.checkLetter(button.textContent) === true) {
      this.activePhrase.showMatchedLetter(button.textContent);
      if (this.checkForWin()) {
        setTimeout( () => this.gameOver(true), 800);
      }
    } else if (this.activePhrase.checkLetter(button.textContent) === false) {
      this.removeLife();
    }
  }
 }

