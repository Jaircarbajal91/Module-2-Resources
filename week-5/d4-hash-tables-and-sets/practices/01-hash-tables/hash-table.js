const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    const hash = sha256(key).substring(0, 8);
    // const numBuckets = hash % this.capacity;
    return parseInt(`0x${hash}`);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    const index = this.hashMod(key);
    if (this.data[index]) {
      throw new Error('hash collision or same key/value pair already exists!')
    }
    this.data[index] = new KeyValuePair(key, value);
    this.count++
  }

  insertWithHashCollisions(key, value) {
    const index = this.hashMod(key);
    const pear = new KeyValuePair(key, value);

    if (this.data[index]) pear.next = this.data[index];
    this.data[index] = pear;
    this.count++;
  }

  insert(key, value) {
    const index = this.hashMod(key);
    let curr = this.data[index]

    while (curr && curr.key !== key) {
      curr = curr.next;
    }

    if (curr) {
      curr.value = value;
    } else {
      const pear = new KeyValuePair(key, value);
      if (this.data[index]) pear.next = this.data[index];
      this.data[index] = pear;
      this.count++;
    }
  }
}


module.exports = HashTable;
