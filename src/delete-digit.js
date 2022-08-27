const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrNum = (n + '').split('')
  let maxNum = 0
  for (let i = 0; i < arrNum.length; i++) {
    const newNum = Number(arrNum.filter((num, index) => index !== i).join(''))
    if (newNum > maxNum) {maxNum = newNum} 
  }
  return maxNum
}


module.exports = {
  deleteDigit
};

