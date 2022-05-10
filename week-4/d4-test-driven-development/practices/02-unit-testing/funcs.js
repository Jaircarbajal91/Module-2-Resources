function isFive(num) {
  if (num === 5) return true;
  return false;
}

function isOdd(number) {
  if (typeof number !== 'number') throw TypeError('Must be a number type');
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  let result = [];
  for (let i = min; i <= max; i += step) {
    result.push(i);
  }
  return result;
}

module.exports = { isFive, isOdd, myRange };
