export function calculateFib(n, a = 1, b = 0) {
  console.count('nthFib called')
  return n === 0
      ? b
      : calculateFib(n - 1, b, a + b)
}

export function suffixOf(i) {
  let j = i % 10
  let k = i % 100

  if (j === 1 && k !== 11) {
      return i + "st"
  }
  if (j === 2 && k !== 12) {
      return i + "nd"
  }
  if (j === 3 && k !== 13) {
      return i + "rd"
  }
  return i + "th"
}

const isPrime = (n) => {
  if (n === 1) return false

  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false
  }
  return true
}

export function calculatePrime(n) {
  console.count('nthPrime called')
  const primes = []
  let i = 2
  while (primes.length < n) {
      if (isPrime(i)) {
          primes.push(i)
      }
      i++
  }
  return primes[n - 1]
}