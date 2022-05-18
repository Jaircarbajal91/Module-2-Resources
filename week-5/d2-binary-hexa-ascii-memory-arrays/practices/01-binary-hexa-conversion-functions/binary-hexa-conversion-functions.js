/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
*/

/* Base 10 to base 2 */
function decimalToBinary(blob) {
  // Your code here
  let outcome = "";
  while (blob >= 2){
    let temp = blob % 2;
    outcome = temp.toString() + outcome
    blob = blob - temp;
    blob = blob / 2
  }
  outcome = blob.toString() + outcome
  return "0b" + outcome
}

/* Base 10 to base 16 */
function decimalToHexadecimal(blob) {
  // Your code here
  let outcome = "";
  let index = ['a', 'b', 'c', 'd', 'e', 'f'];
  while (blob >= 16) {
    let temp = blob % 16;
    let temp2 = temp
    if (temp >= 10) {
      temp = index[temp - 10]
    }
    outcome = temp.toString() + outcome
    blob = blob - temp2;
    blob = blob / 16
  }
  if (blob >= 10) {
    blob = index[blob - 10]
  }
  outcome = blob.toString() + outcome
  return '0x' + outcome
}
// return `0x${blob.toString(16)}`


/* Base 2 to base 10 */
function binaryToDecimal(blob) {
  blob = blob.substring(2);
  return parseInt(blob, 2)
}

/* Base 16 to base 10 */
function hexadecimalToDecimal(blob) {
  return parseInt(blob, 16)
}


// console.log('Decimal to binary:')
// console.log(decimalToBinary(13))  // '0b1101'
// console.log(decimalToBinary(72))  // '0b1001000'
// console.log('')

// console.log('Decimal to hexadecimal:')
// console.log(decimalToHexadecimal(9))   // '0x9'
// console.log(decimalToHexadecimal(32))  // '0x20'
// console.log('')

// console.log('Binary to decimal:')
// console.log(binaryToDecimal('0b0101'))      // 5
// console.log(binaryToDecimal('0b10001000'))  // 136
// console.log('')

// console.log('Hexadecimal to decimal:')
// console.log(hexadecimalToDecimal('0x51'))    // 81
// console.log(hexadecimalToDecimal('0x10ff'))  // 4351


module.exports = {
  decimalToBinary,
  decimalToHexadecimal,
  binaryToDecimal,
  hexadecimalToDecimal
}
