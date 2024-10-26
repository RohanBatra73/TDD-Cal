// calculator.test.js
const stringCalculator = require('./cal');

test('returns 0 for an empty string', () => {
  expect(stringCalculator("")).toBe(0);
});

test('returns the number itself for a single number', () => {
  expect(stringCalculator("5")).toBe(5);
  expect(stringCalculator("10")).toBe(10);
});

test('returns the sum of two comma-separated numbers', () => {
  expect(stringCalculator("1,2")).toBe(3);
  expect(stringCalculator("4,5")).toBe(9);
});

test('returns the sum of multiple comma-separated numbers', () => {
  expect(stringCalculator("1,2,3")).toBe(6);
});
// new
test('handles newlines as delimiters', () => {
    expect(stringCalculator("1\n2,3")).toBe(6);
  });
  