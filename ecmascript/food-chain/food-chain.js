const ANIMALS = [
  {
    name: 'fly',
  },
  {
    name: 'spider',
    ailment: 'wriggled and jiggled and tickled inside her',
  },
  {
    name: 'bird',
    exclamation: 'How absurd to swallow a bird',
  },
  {
    name: 'cat',
    exclamation: 'Imagine that, to swallow a cat',
  },
  {
    name: 'dog',
    exclamation: 'What a hog, to swallow a dog',
  },
  {
    name: 'goat',
    exclamation: 'Just opened her throat and swallowed a goat',
  },
  {
    name: 'cow',
    exclamation: 'I don\'t know how she swallowed a cow',
  },
  {
    name: 'horse',
  }
];

function formatIntroduction(animal) {
  return `I know an old lady who swallowed a ${animal.name}.`;
}

function formatReasonForSwallowing(prey, predator) {
  if (prey.ailment) {
    return `She swallowed the ${predator.name}` +
        ` to catch the ${prey.name}` +
        ` that ${prey.ailment}.`;
  }
  return `She swallowed the ${predator.name} to catch the ${prey.name}.`;
}

function formatConfusionAtSwallowing(animal) {
  return `I don't know why she swallowed the ${animal.name}.` +
      ` Perhaps she'll die.`;
}

function formatAilmentIfPresent(animal) {
  if (animal.ailment) {
    return `It ${animal.ailment}.`;
  }
  return null;
}

function formatExclamationIfPresent(animal) {
  if (animal.exclamation) {
    return `${animal.exclamation}!`;
  }
  return null;
}

function verseWithReasoning(i) {
  const lines = [
    formatIntroduction(ANIMALS[i]),
    formatExclamationIfPresent(ANIMALS[i]),
    formatAilmentIfPresent(ANIMALS[i]),
    ...[...Array(i).keys()]
        .reverse()
        .map(j => formatReasonForSwallowing(ANIMALS[j], ANIMALS[j + 1])),
    formatConfusionAtSwallowing(ANIMALS[0]),
  ].filter(Boolean);
  const verse = lines.join('\n');
  return verse + '\n';
}

class Song {
  verse(number) {
    const i = number - 1;
    if (ANIMALS[i].name === 'horse') {
      return `I know an old lady who swallowed a horse.` +
          `\nShe's dead, of course!` +
          `\n`;
    }
    return verseWithReasoning(i);
  }

  verses(start, end) {
    const verses = [];
    for (let i=start; i<=end; i++) {
      verses.push(this.verse(i));
    }
    verses.push(''); // extra newline at end
    return verses.join('\n');
  }
}

export default Song;