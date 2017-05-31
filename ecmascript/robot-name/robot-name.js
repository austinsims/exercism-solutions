function randOfList(list) {
  const index = Math.round(Math.random() * (list.length - 1));
  return list[index];
}
const randLetter = randOfList.bind(null, [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']);
const randDigit = randOfList.bind(null, [...'0123456789']);

const usedNames = new Set();
function nextName() {
  const makeName = () =>
      [randLetter(), randLetter(),
       randDigit(), randDigit(), randDigit()].join('');
  let name;
  do {
    name = makeName();
  } while (usedNames.has(name));
  usedNames.add(name);
  return name;
}

const robotToName = new WeakMap();
class Robot {
  constructor() {
    this.reset();
  }
  reset() {
    robotToName.set(this, nextName());
  }
  get name() {
    return robotToName.get(this);
  }
}

export default Robot;