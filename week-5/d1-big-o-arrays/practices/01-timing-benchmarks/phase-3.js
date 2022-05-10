const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  let result = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    console.time(`i=${i}`)
    result.push(addNums(i));
    console.timeEnd(`i=${i}`)
  }
  return result;
}


function addManyNums10Timing(increment) {
  const sums = [];

  for (let i = increment; i <= 10 * increment; i += increment) {
    console.time(`i=${i}`)
    sums.push(addManyNums(i));
    console.timeEnd(`i=${i}`)
  }

  return sums;
}


// n = 1000000
// console.log(`addNums(${n}): `);
// addNums10Timing(1000000);

// console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
