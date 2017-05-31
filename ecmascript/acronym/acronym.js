/**
 * Insert a space between sub-parts of words in PascalCase.
 * Example: "HelloWorld" becomes "Hello World".
 */
function splitPascalCases(phrase) {
  return phrase.replace(
    /([a-z])([A-Z])/g,
    (_, lower, upper) => lower + ' ' + upper);
}

/**
 * Replace anything that isn't whitespace or letters with whitespace.
 * Example:
 *   "Neo-Bolshevik pancake, surprise!"
 *   becomes
 *   "Neo Bolshevik pancake  surprise "
 */
function removePunctuation(phrase) {
  return phrase.replace(/[^A-Za-z\s]/g, ' ');
}

function parse(phrase) {
  phrase = splitPascalCases(phrase);
  phrase = removePunctuation(phrase);
  const words = phrase.split(/\s+/);
  return words
      .map(word => word[0])
      .map(letter => letter.toUpperCase())
      .join('');
}

export default {parse};