class Gigasecond {
  constructor(birthdate) {
    if (!(birthdate instanceof Date)) {
      throw new Error('argument must be Date object');
    }
    this.birthdate = birthdate;
  }

  date() {
    const gigasecondTime = this.birthdate.getTime() + 1e9 * 1000;
    return new Date(gigasecondTime);
  }
}

export default Gigasecond;