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
    this.ecryption = boolean;
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
          if (num > this.alphabet.length) {
            item = num - this.alphabet.length;
          } else if (num < 0) {
            item = num + this.alphabet.length;
          } else {
            item = num;
          }
          i++;
        }
        return item;
      });
      const encryptedArray = codeArray.map((item) => {
        if (item === " ") return item;
        let element = String.fromCharCode(item + 65);
        if (this.alphabet.includes(element)) {
          item = element;
        }
        return item;
      });

      return this.ecryption === true
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
    } catch (error) {
      throw error;
    }
  }
}

const vigenereCipheringMachine = new VigenereCipheringMachine(true);
console.log(vigenereCipheringMachine.encrypt("attack at dawn!", "alphonse"));

module.exports = {
  VigenereCipheringMachine,
};
