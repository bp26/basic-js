const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  constructor(boolean) {
    this.encryption = boolean;
  }
  encrypt(message, key) {
    try {
      if (message === undefined || key === undefined) {
        throw new Error("Incorrect arguments!");
      }
      const messageChars = message.toUpperCase().split("");
      const keyChars = key.toUpperCase().split("");
      let i = 0;
      const codeArray = messageChars.map((item) => {
        if (this.alphabet.includes(item)) {
          if (i === key.length) i = 0;
          let num = item.charCodeAt(0) + keyChars[i].charCodeAt(0) - 130;
          if (num >= this.alphabet.length) {
            item = [num - this.alphabet.length];
          } else if (num < 0) {
            item = [num + this.alphabet.length];
          } else {
            item = [num];
          }
          i++;
        }
        return item;
      });
      const encryptedArray = codeArray.map((item) => {
        if (!Array.isArray(item)) return item;
        item = String.fromCharCode(item[0] + 65);
        return item;
      });

      return this.encryption === true || this.encryption === undefined
        ? encryptedArray.join("")
        : encryptedArray.reverse().join("");
    } catch (error) {
      throw error;
    }
  }
  decrypt(message, key) {
    try {
      if (message === undefined || key === undefined) {
        throw new Error("Incorrect arguments!");
      }
      const messageChars = message.toUpperCase().split("");
      const keyChars = key.toUpperCase().split("");
      let i = 0;
      const codeArray = messageChars.map((item) => {
        if (this.alphabet.includes(item)) {
          if (i === key.length) i = 0;
          let num = item.charCodeAt(0) - keyChars[i].charCodeAt(0);
          if (num < 0) {
            item = [num + this.alphabet.length];
          } else {
            item = [num];
          }
          i++;
        }
        return item;
      });
      const decryptedArray = codeArray.map((item) => {
        if (!Array.isArray(item)) return item;
        item = String.fromCharCode(item[0] + 65);
        return item;
      });
      return this.encryption === true || this.encryption === undefined
        ? decryptedArray.join("")
        : decryptedArray.reverse().join("");
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
