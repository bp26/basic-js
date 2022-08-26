const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    const arr = email.split('')
    return arr.includes('@') ? arr.slice(arr.lastIndexOf('@') + 1).join('') : false
    
}


module.exports = {
  getEmailDomain
};
