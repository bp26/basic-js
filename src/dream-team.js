const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false}
  unsortedTeamName = members.reduce((acc, item) => {
    if (typeof(item) === 'string') {acc += item.trim()[0].toUpperCase()}
    return acc
  }, '')
  return unsortedTeamName.split('').sort((a, b) => a < b ? -1 : 1).join('')
}

module.exports = {
  createDreamTeam
};
