function others(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

function sum(array) {
  return array.reduce((accum, next) => accum + next, 0);
}

function satisfiesTriangleInequality(sides) {
  return sides.every((x, i) => x <= sum(others(sides, i)));
}

class Triangle {
  constructor(a, b, c) {
    const sides = [a, b, c];
    if (sides.every(x => x === 0)) {
      throw new Error('triangles with no size are illegal');
    }
    if (sides.some(x => x < 0)) {
      throw new Error('triangles with negative sides are illegal');
    }
    if (!satisfiesTriangleInequality(sides)) {
      throw new Error('triangles violating triangle inequality are illegal');
    }
    this.sides = sides;
  }

  kind() {
    const {sides} = this;
    if (sides.every(x => x === sides[0])) {
      return 'equilateral';
    }
    if (sides.some(x => sides.filter(y => y === x).length === 2)) {
      return 'isosceles';
    }
    if (sides.every(x => sides.filter(y => y === x).length === 1)) {
      return 'scalene';
    }
  }
}

export default Triangle;  