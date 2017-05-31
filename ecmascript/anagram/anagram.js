function sortWord(word) {
  return [...word].sort().join('');
}

class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  matches(...words) {
    const wordList = Array.isArray(words[0]) ? words[0] : words;
    return wordList.filter(word => this.isAnagram(word));
  }

  isAnagram(candidate) {
    candidate = candidate.toLowerCase();
    if (candidate === this.word) {
      return false;
    }
    return sortWord(candidate) === sortWord(this.word);
  }
}

export default Anagram;