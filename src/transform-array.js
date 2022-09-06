const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {
  const controlsArray = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  return array.slice().reduce((acc, item, index, arr) => {
    if (!controlsArray.includes(item)) {
      if (item) acc = [...acc, item];
    } else {
      switch (item) {
        case "--discard-prev":
          acc.pop();
          break;
        case "--double-next":
          acc = [...acc, arr[index + 1]];
          break;
        case "--double-prev":
          acc = [...acc, arr[index - 1]];
          break;
        case "--discard-next":
          arr[index + 1] = null;
      }
    }
    return acc;
  }, []);
}

const arr = [1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5];
console.log(transform(arr));

module.exports = {
  transform,
};
