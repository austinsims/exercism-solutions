function mapToObj(map) {
  const obj = {};
  for (let pair of map) {
    obj[pair[0]] = pair[1];
  }
  return obj;
}

function transform(scoresToLetterList) {
  const pairs = Object.entries(scoresToLetterList)
      .map(([score, letterList]) =>
          letterList.map(letter => [letter.toLowerCase(), parseInt(score)]))
      .reduce((list, accum) => list.concat(accum), []);
  return mapToObj(new Map(pairs));
}

export default transform;