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
    const placeholders = div.querySelector('ul');
    for (let i = 0; i < this.phrase.length; i++) {
      const char = this.phrase.charAt(i);
      const li = document.createElement('li');
        if (char !== ' ') {
          li.className = `hide letter ${char}`;
        } else if (char === ' ') {
          li.className = "space";
        }
        li.textContent = char;
      placeholders.appendChild(li);
    }
  }
}