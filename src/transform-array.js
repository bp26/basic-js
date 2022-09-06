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
  try {
    if (!Array.isArray(array)) {
      throw new Error(`'arr' parameter must be an instance of the Array!`);
    }

    return array
      .reduce((acc, item, index, arr) => {
        if (!controlsArray.includes(item)) {
          acc = [...acc, item];
        } else {
          switch (item) {
            case "--discard-next":
              if (arr[index + 1]) arr[index + 1] = null;
              break;
            case "--discard-prev":
              if (arr[index - 1]) acc.pop();
              break;
            case "--double-next":
              if (arr[index + 1]) acc = [...acc, arr[index + 1]];
              break;
            case "--double-prev":
              if (arr[index - 1]) acc = [...acc, arr[index - 1]];
              break;
          }
        }
        return acc;
      }, [])
      .filter((item) => item !== null);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  transform,
};
