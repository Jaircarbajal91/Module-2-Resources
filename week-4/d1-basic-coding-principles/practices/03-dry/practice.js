let getLargerNum = (num1, num2) => num1 > num2 ? num1 : num2;

function multiplyBiggerNumByTwo(num1, num2) {
  return getLargerNum(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return getLargerNum(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${getLargerNum(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = getLargerNum(weight1, weight2) === weight1 ? weight2 : weight1
  return `I adopted a dog that weighs ${smallDog} pounds.`
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
