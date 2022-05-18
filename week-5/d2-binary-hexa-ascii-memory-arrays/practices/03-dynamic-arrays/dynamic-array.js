class DynamicArray {

    constructor(defaultSize=4) {

      this.length = 0;
      this.capacity = defaultSize;
      this.data = new Array(defaultSize);

    }

    read(index) {
      if (index >= this.length) return undefined
      return this.data[index]
      // Fill this out
      // You may not use any built-in JS array functions
    }

    unshift(val) {
      this.length += 1;
      for (let i = this.capacity - 1; i >= 0; i--) {
        this.data[i + 1] = this.data[i];
      }
      this.data[0] = val;
    }

  }


  module.exports = DynamicArray;
