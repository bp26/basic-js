const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  try {
    if (!date) {
      return "Unable to determine the time of year!";
    }
    if (
      Object.prototype.toString.call(date) !== "[object Date]" ||
      isNaN(date)
    ) {
      throw new Error("Invalid date!");
    }

    const month = date.getMonth();
    if (month < 2) {
      return "winter";
    } else if (month < 5) {
      return "spring";
    } else if (month < 8) {
      return "summer";
    } else if (month < 11) {
      return "autumn";
    } else {
      return "winter";
    }
  } catch (error) {
    throw error;
  }
}

const obj = new Date(866, 2, 10, 12, 53, 10, 825);
console.log(getSeason(obj));

module.exports = {
  getSeason,
};
