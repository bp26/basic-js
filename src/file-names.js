const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const noeditStack = []
  const stack = []
  names.forEach(name => {
    if (!noeditStack.includes(name)) {
      noeditStack.push(name)
      stack.includes(name) ? stack.push(name + `(${noeditStack.filter(item => item === name).length})`) : stack.push(name)
    } else {
      noeditStack.push(name)
      stack.push(name + `(${noeditStack.filter(item => item === name).length - 1})`)
    }
  })
  return stack
}


module.exports = {
  renameFiles
};
