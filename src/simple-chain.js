const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  length: 0,
  data: '',

  setLink(value) {
    return `( ${value} )`
  }, 

  getLength() {
    return this.length
  },

  addLink(value) {
    if (this.length !== 0) {this.data += '~~'}
    value === undefined ? this.data += this.setLink(' ') : this.data += this.setLink(value)
  

    this.length++
    console.log(this.data, 'Add link', `value = ${value}`)
    return this
  },

  removeLink(position) {
    if (typeof(position) !== 'number') {return new Error(`You can't remove incorrect link!`)}
    if (position < 1 || position > this.length) {return new Error(`You can't remove incorrect link!`)}
    
    const dataArray = this.data.split('~~')
    dataArray.splice(position - 1, 1)
    this.data = dataArray.join('~~')
    console.log(this.data, 'Remove link', `position = ${position}`)
    return this
  },

  reverseChain() {
    if (this.length === 0) {return this}
    const dataArray = this.data.split('~~')
    this.data = dataArray.reverse().join('~~')
    console.log(this.data, 'Reverse chain')
    return this
  },

  finishChain() {
    let currentChain = this.data
    console.log(currentChain)

    this.data = ''
    this.length = 0

    return currentChain
  }
};


module.exports = {
  chainMaker
};

chainMaker.reverseChain().addLink('DEF').reverseChain().reverseChain().reverseChain().addLink(333).addLink(null).addLink(0).reverseChain().reverseChain().finishChain()



