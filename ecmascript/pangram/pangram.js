const ALPHABET = Array.from('abcdefghijklmnopqrstuvwxyz');

class Pangram {
  constructor(phrase) {
    this.phrase = Array.from(phrase.toLowerCase());
  }

  isPangram() {
    if (!this.phrase.length) {
      return false;
    }
    return ALPHABET
        .map(letter => this.phrase.includes(letter))
        .reduce((hasLetter, result) => hasLetter && result, true);
  }
}

export default Pangram;