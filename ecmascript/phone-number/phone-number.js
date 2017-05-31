class PhoneNumber {
  constructor(unformatted) {
    this.formatted = PhoneNumber.format(unformatted);
  }

  number() {
    return this.formatted;
  }

  static format(unformatted) {
    const characters = Array.from(unformatted);

    if (characters.find(char => /[A-Za-z]/.test(char))) {
      return null;
    }

    const numbers = characters
        .filter(char => /\d/.test(char))
        .map(char => parseInt(char, 10));

    if (numbers.length < 10) {
      return null;
    }

    if (numbers.length === 11 && numbers[0] !== 1) {
      return null;
    }

    if (numbers.length > 11) {
      return null;
    }

    return numbers.slice(-10).map(String).join('');
  }
}

export default PhoneNumber;