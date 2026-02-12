function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}
function factorial(n) {
  if (n < 0) throw new Error('Negative number');
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

module.exports = { add, subtract, multiply, divide, factorial, fibonacci, isPrime, clamp };
