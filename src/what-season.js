const { NotImplementedError } = require('../extensions/index.js');

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
 if (!date) {return 'Unable to determine the time of year!'}
  if (Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)) {
    const month = date.getMonth()
    console.log(month)
   
      if (month < 3) {
        return 'winter'
      } else if (month < 6) {
        return 'spring'
      } else if (month < 9) {
        return 'summer'
      } else if (month < 12) {
        return 'autumn'
      } else {return 'winter'}

  } else {
    return new Error('Invalid date')
  }
}

const obj = new Date(866, 2, 10, 12, 53, 10, 825)
console.log(getSeason(obj))

/*console.log(obj.getFullYear(), 'year')
console.log(obj.getMonth(), 'month')
console.log(obj.getDate(), 'day')
console.log(obj.getHours(), 'hours')
console.log(obj.getMinutes(), 'minutes')
console.log(obj.getSeconds(), 'seconds')
console.log(obj.getMilliseconds(), 'milliseconds')*/

module.exports = {
  getSeason
};
