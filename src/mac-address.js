const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (typeof(n) !== 'string') {return false} // check type
  const arr = n.split('')

  if (arr.length > 17) {return false} // check length

  for (let i = 2; i < arr.length; i += 3) { // check hyphens
    if (arr[i] !== '-') {return false}
  }

  for (let char of n.split('-').join('').split('')) { // check letters
    if (isNaN(char)) {
      if (char > 'F') {return false} 
    }
  }
  return true
}


module.exports = {
  isMAC48Address
};
