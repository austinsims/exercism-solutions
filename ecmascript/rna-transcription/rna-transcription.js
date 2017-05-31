const DNA_TO_RNA = new Map([
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'U'],
  ['T', 'A'],
]);
const DNA_BASES = [...DNA_TO_RNA.keys()];

class Transcriptor {
  toRna(dna) {
    if (typeof dna !== 'string') {
      throw new Error('Invalid input DNA.')
    }

    const aDna = Array.from(dna);
    
    if (aDna.find(base => !DNA_BASES.includes(base))) {
      throw new Error('Invalid input DNA.')
    }

    return aDna.map(base => DNA_TO_RNA.get(base)).join('');
  }
}


export default Transcriptor;