import bigInt from './lib/big-integer';

class Grains {
  squareBigInt(number) {
    return bigInt(2).pow(number - 1);
  }

  square(number) {
    return this.squareBigInt(number).toString();
  }

  total() {
    const totalBigInt = [...Array(64).keys()]
        .map(index => index + 1)
        .map(number => this.squareBigInt(number))
        .reduce((accum, count) => accum.add(count), bigInt(0));
    return totalBigInt.toString();
  }
}

export default Grains;