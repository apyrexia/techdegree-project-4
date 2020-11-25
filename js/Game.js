/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(missed = 0, phrases = [], activePhrase = null) {
    this.missed = missed;
    this.phrases = this.createPhrases();
    this.activePhrase = activePhrase;
  }
  createPhrases() {
    this.phrases = [
    new Phrase('Actions speak louder than words'),  
    new Phrase('A watched pot never boils'), 
    new Phrase('Beggars cant be choosers'), 
    new Phrase(`Dont judge a book by its cover`), 
    new Phrase(`Fortune favors the bold`)
  ];
    return this.phrases;
  }
  getRandomPhrase() {
    const randNum = Math.floor(Math.random() * Math.floor(5));
    const randomPhrase = this.phrases[randNum];
    return randomPhrase;
  }
  //Begins game by selecting a random phrase and displaying it to the user
  startGame() {
    //Resets board
    this.missed = 0;
    const div = document.getElementById('phrase'); //Removes any remaining characters from previous game
    const ul = div.querySelector('ul');
    if (ul.firstChild) {
      const previousChars = ul.querySelectorAll('li');
      for (let i = 0; i < previousChars.length; i++) {
        previousChars[i].remove();
      }
    }
    const tries = document.getElementById('scoreboard').querySelector('ol').querySelectorAll('li'); //Restores hearts if they're missing
    for (let i = 0; i < tries.length; i++) {
        tries[i].innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">';
    }
    
    const keys = document.getElementById('qwerty').querySelectorAll('button'); // re-enables keys and resets background colors
    for (let i = 0; i < keys.length; i++) {
      keys[i].disabled = false;
      keys[i].className = "key";
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
    const tries = document.getElementById('scoreboard').querySelector('ol').querySelectorAll('li');
    for (let i = 0; i < this.missed; i++) {
      tries[i].innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></img>';
      tries[i].className = "lost";
    }
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
      overlay.className = "lose";
      overlay.style.display = '';
    } else if (gameWon === true) {
      gameOverMessage.textContent = 'Great job!';
      overlay.className = "win";
      overlay.style.display = '';
    }
  }
  //Handles onscreen keyboard button clicks
  //@param (HTMLButtonElement) button - The clicked button element
  handleInteraction(button) {
    button.disabled = true;
    if (this.activePhrase.checkLetter(button.textContent) === true) {
      this.activePhrase.showMatchedLetter(button.textContent);
      button.className = "chosen";
      if (this.checkForWin()) {
        setTimeout( () => this.gameOver(true), 500);
      }
    } else if (this.activePhrase.checkLetter(button.textContent) === false) {
      this.removeLife();
      button.className = "wrong";
    }
  }
 }

