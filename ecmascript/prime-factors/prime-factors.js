const isPrime = (() => {
  const memo = new Map();

  return function (number) {
    if (memo.has(number)) return memo.get(number);

    const hasDivisor = [...Array(number).keys()]
        .filter(n => n > 1)
        .find(divisor => number % divisor === 0);
    const decision = !hasDivisor;
    
    memo.set(decision);
    return decision;
  }
})();

const nthPrime = (() => {
  const memo = new Map();

  return function (n) {
    if (memo.has(n)) return memo.get(n);

    if (n === 0) return 1;
    if (n === 1) return 2;

    const lastPrime = nthPrime(n - 1);
    let candidate = lastPrime + 1;
    while (!isPrime(candidate)) {
      candidate++;
    }

    memo.set(n, candidate);
    return candidate;
  };
})();

function largestPrimeFactor(number) {
  let candidate = number - 1;
  while (!isPrime(candidate) || number % candidate !== 0) {
    candidate--;
  }
  return candidate;
}

function primeFactorization(number) {
  if (isPrime(number)) {
    return [number];
  }

  const factor = largestPrimeFactor(number);
  const quotient = number / factor;
  return [factor, ...primeFactorization(quotient)];
}

function without(array, element) {
  return array.filter(x => x !== element);
}

class PrimeFactors {
  for(number) {
    let factors = primeFactorization(number);
    factors = without(factors, 1);
    factors.sort();
    return factors;
  }
}

export default PrimeFactors;