class School {
  constructor() {
    /**
     * Maps grade number to array of student names.
     * @type {Map<number, Array<string>}
     */
    this.map = new Map();
  }

  add(name, number) {
    const oldNames = this.map.get(number) || [];
    const newNames = oldNames.concat(name).sort();
    this.map.set(number, newNames);
  }

  roster() {
    const obj = {};
    for (let number of this.map.keys()) {
      obj[number] = this.grade(number);
    }
    return obj;
  }

  grade(number) {
    return Array.from(this.map.get(number) || []);
  }
}

export default School;