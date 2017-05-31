function capitalize(phrase) {
  return phrase[0].toUpperCase() + phrase.slice(1);
}

function bottlePhrase(n) {
  if (n === 0) {
    return `no more bottles`;
  } else if (n === 1) {
    return `1 bottle`;
  } else {
    return `${n} bottles`;
  }
}

function firstLine(n) {
  return `${capitalize(bottlePhrase(n))} of beer on the wall, ` +
      `${bottlePhrase(n)} of beer.`;
}

function secondLine(n) {
  let firstClause;
  if (n > 0) {
    const quantityWord = n > 1 ? 'one' : 'it';
    firstClause = `Take ${quantityWord} down and pass it around`;
  } else {
    firstClause = `Go to the store and buy some more`;
  }

  const secondClause = n > 0 ?
      `${bottlePhrase(n - 1)} of beer on the wall` :
      `99 bottles of beer on the wall`;

  return `${firstClause}, ${secondClause}.`;
}

function verse(n) {
  return `${firstLine(n)}\n${secondLine(n)}\n`;
}

function sing(max = 99, min = 0) {
  return [...Array(100).keys()]
    .filter(n => n <= max)
    .filter(n => n >= min)
    .map(n => verse(n))
    .reverse()
    .join('\n');
}

export default {verse, sing};