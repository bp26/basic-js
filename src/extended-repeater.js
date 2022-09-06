const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  function formAddition(addition, additionRepeatTimes, additionSeparator) {
    const array = [addition];
    if (additionRepeatTimes) {
      for (let i = 1; i < additionRepeatTimes; i++) {
        array.push(addition);
      }
    }
    return array.join(`${additionSeparator ?? "|"}`);
  }

  function formString(
    string,
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  ) {
    if (addition !== undefined) {
      string += formAddition(
        addition + "",
        additionRepeatTimes,
        additionSeparator
      );
    }
    const array = [string];
    if (repeatTimes) {
      for (let i = 1; i < repeatTimes; i++) {
        array.push(string);
      }
    }
    return array.join(`${separator ?? "+"}`);
  }

  return formString(
    str,
    options?.["repeatTimes"],
    options?.["separator"],
    options?.["addition"],
    options?.["additionRepeatTimes"],
    options?.["additionSeparator"]
  );
}

module.exports = {
  repeater,
};
