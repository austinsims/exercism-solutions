export default class Year {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    return this.divisibleBy(4) &&
        (!this.divisibleBy(100) || this.divisibleBy(400));
  }

  divisibleBy(divisor) {
    return this.year % divisor === 0;
  }
}
