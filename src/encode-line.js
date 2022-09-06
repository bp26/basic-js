const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;
  return str
    .split("")
    .reduce((acc, item, index, arr) => {
      if (index === 0) {
        count++;
        if (arr.length === 1) acc = [...acc, arr[index]];
      } else {
        if (arr[index] === arr[index - 1]) {
          count++;
          if (index === arr.length - 1) acc = [...acc, count + arr[index]];
        } else {
          acc = [...acc, (count !== 1 ? count : "") + arr[index - 1]];
          count = 1;
          if (index === arr.length - 1) acc = [...acc, arr[index]];
        }
      }
      return acc;
    }, [])
    .join("");
}

console.log(encodeLine("abbcca"));
module.exports = {
  encodeLine,
};
