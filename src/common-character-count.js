const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split("");
  const arr2 = s2.split("");
  let count = 0;

  arr1.forEach((char) => {
    if (arr2.includes(char)) {
      count++;
      deleteFromArray(arr2, char);
    }
  });
  return count;

  function deleteFromArray(arr, item) {
    arr.splice(arr.indexOf(item), 1);
  }
}

module.exports = {
  getCommonCharacterCount
};
