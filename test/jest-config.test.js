const assert = require('assert');
const fs = require('fs');
const path = require('path');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed++;
  } catch (e) {
    console.error(`FAIL: ${name} — ${e.message}`);
    failed++;
  }
}

test('jest is installed at v28', () => {
  const pkg = require('jest/package.json');
  assert(pkg.version.startsWith('28.'));
});

test('jest.config.js exists', () => {
  assert(fs.existsSync(path.join(__dirname, '..', 'jest.config.js')));
});

test('jest config has testEnvironment', () => {
  const config = require('../jest.config');
  assert(config.testEnvironment === 'node');
});

test('jest config has fake timers', () => {
  const config = require('../jest.config');
  assert(config.timers === 'fake');
});

test('jest config has snapshotFormat', () => {
  const config = require('../jest.config');
  assert(config.snapshotFormat);
});

test('jest config has moduleNameMapper', () => {
  const config = require('../jest.config');
  assert(config.moduleNameMapper);
  assert(config.moduleNameMapper['^@/(.*)$']);
});

test('jest config has coverageThresholds', () => {
  const config = require('../jest.config');
  assert(config.coverageThresholds);
  assert(config.coverageThresholds.global);
});

// Math module tests
test('math add', () => {
  const { add } = require('../src/math');
  assert(add(2, 3) === 5);
});

test('math divide by zero throws', () => {
  const { divide } = require('../src/math');
  try { divide(1, 0); assert(false); } catch (e) { assert(e.message === 'Division by zero'); }
});

test('math factorial', () => {
  const { factorial } = require('../src/math');
  assert(factorial(5) === 120);
  assert(factorial(0) === 1);
});

test('math fibonacci', () => {
  const { fibonacci } = require('../src/math');
  assert(fibonacci(10) === 55);
});

test('math isPrime', () => {
  const { isPrime } = require('../src/math');
  assert(isPrime(7) === true);
  assert(isPrime(4) === false);
});

test('math clamp', () => {
  const { clamp } = require('../src/math');
  assert(clamp(5, 0, 10) === 5);
  assert(clamp(-1, 0, 10) === 0);
  assert(clamp(15, 0, 10) === 10);
});

// String module tests
test('string capitalize', () => {
  const { capitalize } = require('../src/string');
  assert(capitalize('hello') === 'Hello');
});

test('string camelCase', () => {
  const { camelCase } = require('../src/string');
  assert(camelCase('hello-world') === 'helloWorld');
});

test('string truncate', () => {
  const { truncate } = require('../src/string');
  assert(truncate('Hello World', 5) === 'Hello...');
  assert(truncate('Hi', 5) === 'Hi');
});

test('string isPalindrome', () => {
  const { isPalindrome } = require('../src/string');
  assert(isPalindrome('racecar') === true);
  assert(isPalindrome('hello') === false);
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
