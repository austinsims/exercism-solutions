function mapToObject(map) {
  const object = {};
  for (const pair of [...map]) {
    object[pair[0]] = pair[1];
  }
  return object;
}

class Words {
  count(phrase) {
    const counts = new Map();
    const words = phrase
        .trim()
        .toLowerCase()
        .split(/\s+/);
    for (const word of words) {
      const count = counts.get(word) || 0;
      counts.set(word, count + 1);
    }
    return mapToObject(counts);
  }
}

export default Words;