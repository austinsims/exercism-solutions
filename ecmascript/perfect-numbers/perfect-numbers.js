function factors(number) {
  return [...Array(number).keys()].filter(smaller => number % smaller === 0);
}

function sum(numbers) {
  return numbers.reduce((n, accum) => n + accum, 0);
}

function aliquotSum(number) {
  return sum(factors(number));
}

class PerfectNumbers {
  classify(number) {
    if (number < 1 || Math.round(number !== number)) {
      throw new Error('Classification is only possible for natural numbers.')
    }

    const sum = aliquotSum(number);
    if (sum === number) {
      return 'perfect';
    } else if (sum > number) {
      return 'abundant';
    } else {
      return 'deficient';
    }
  }
}

export default PerfectNumbers;