class Hamming {
  compute(left, right) {
    if (typeof left !== 'string' ||
        typeof right !== 'string') {
      throw new Error('Must provide two strings');
    }

    const aLeft = Array.from(left);
    const aRight = Array.from(right);
    if (aLeft.length !== aRight.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    const distance = aLeft.filter((l, idx) => aRight[idx] !== l).length;
    return distance;
  }
}

export default Hamming;