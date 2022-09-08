const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsArray = [];
  return domains
    .map((item) => {
      item = item.split(".").reverse();
      return item;
    })
    .reduce((acc, item) => {
      let prev = "";
      item.forEach((newItem) => {
        prev += `.${newItem}`;
        if (!domainsArray.includes(prev)) {
          acc[prev] = 1;
          domainsArray.push(prev);
        } else {
          acc[prev] += 1;
        }
      });
      return acc;
    }, {});
}

module.exports = {
  getDNSStats,
};
