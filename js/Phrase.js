/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  // Display phrase on game board
  addPhraseToDisplay() {
    const div = document.getElementById('phrase');
    const ul = div.querySelector('ul');
    for (let i = 0; i < this.phrase.length; i++) {
      const char = this.phrase.charAt(i);
      const li = document.createElement('li');
        if (char !== ' ') {
          li.className = `hide letter ${char}`;
        } else if (char === ' ') {
          li.className = "space";
        }
        li.textContent = char;
      ul.appendChild(li);
    }
  }
//Checks if passed letter is in phrase
  checkLetter(letter) {
    for (let i = 0; i <= this.phrase.length; i++) {
      if (letter === this.phrase.charAt(i)) {
        return true;
      }
      else if (i >= this.phrase.length) {
        return false;
      }
    }
  }
  //Displays passed letter on screen after a match is found
  showMatchedLetter(letter) {
    const characters = document.getElementById('phrase').querySelector('ul').querySelectorAll('li');
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].innerText === letter) {
        characters[i].style.color = 'black';
        characters[i].style.backgroundColor = '#7BD670';
        characters[i].classList = `hide letter ${letter} matched`;
      }
    }
  }
}