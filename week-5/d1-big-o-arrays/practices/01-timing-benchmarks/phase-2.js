const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let result = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    result.push(addNums(i));
  }
  return result;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  const sums = [];

  for (let i = increment; i <= 10 * increment; i += increment) {
    sums.push(addManyNums(i));
  }

  return sums;
}

module.exports = [addNums10, addManyNums10];
