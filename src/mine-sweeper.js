const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((arr, arrIndex, arrArray) => {
    return arr.map((num, numIndex, numArray) => {
      let count = 0;

      //upper array
      if (arrIndex !== 0) {
        if (arrArray[arrIndex - 1][numIndex] === true) count++;

        if (numIndex !== 0) {
          if (arrArray[arrIndex - 1][numIndex - 1] === true) count++;
        }

        if (numIndex !== numArray.length - 1) {
          if (arrArray[arrIndex - 1][numIndex + 1] === true) count++;
        }
      }

      //lower array
      if (arrIndex !== arrArray.length - 1) {
        if (arrArray[arrIndex + 1][numIndex] === true) count++;

        if (numIndex !== 0) {
          if (arrArray[arrIndex + 1][numIndex - 1] === true) count++;
        }

        if (numIndex !== numArray.length - 1) {
          if (arrArray[arrIndex + 1][numIndex + 1] === true) count++;
        }
      }

      //same array
      if (numIndex !== 0) {
        if (numArray[numIndex - 1] === true) count++;
      }
      if (numIndex !== numArray.length - 1) {
        if (numArray[numIndex + 1] === true) count++;
      }

      num = count;
      return count;
    });
  });
}

module.exports = {
  minesweeper,
};
