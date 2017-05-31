const WHATEVER = 'Whatever.';

class Bob {
  hey(message) {
    if (typeof message !== 'string') {
      return WHATEVER;
    }

    if (!message.length || /^\s+$/.test(message)) {
      return 'Fine. Be that way!';
    }

    const hasLetters = Array.from(message).find(char => /[A-Za-z]/.test(char));
    const isAllUpper = message.toUpperCase() === message;
    if (hasLetters && isAllUpper) {
      return 'Whoa, chill out!';
    }

    if (message.endsWith('?')) {
      return 'Sure.';
    }

    return WHATEVER;
  }
}

export default Bob;

