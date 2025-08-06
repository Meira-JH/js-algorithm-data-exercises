// Hash Tables:
// Store key-value pairs
// Like arrays, but keys are not ordered
// fast for: finding values, adding new values and removing values
// very similar to objects
// hash function is responsible for the index. It has to be:
// a. fast, b. uniformly distributed, c. deterministic

export class HashTable {
  constructor(size = 3) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let hash = 0;

    //use prime numbers to be more efficient in avoiding colisions
    const PRIME_NUMBER = 31;

    //avoid too long keys and loop through the key untill 100
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let character = key[i];

      let alphabetPosition = character.charCodeAt(0) - 96;

      //create a hash in a way that makes it difficult to repeat the index
      //and that is uniformly distributed
      hash = (hash * PRIME_NUMBER + alphabetPosition) % this.keyMap.length;
    }

    return hash;
  }

  set(key, value) {
    const hashedIndex = this.hash(key);

    //check if the position to be inserted in array
    //has any element, if not insert an empty array to be nested
    if (!this.keyMap[hashedIndex]) {
      this.keyMap[hashedIndex] = [];
    }
    // insert nested elements inside an index, overwriting existing values and keys
    if (this.keyMap[hashedIndex].length > 0) {
      for (let [index, element] of this.keyMap[hashedIndex].entries()) {
        if (element.key === key || element.value === value) {
          element = { key, value };
        } else if (index === this.keyMap[hashedIndex].length - 1) {
          this.keyMap[hashedIndex].push({ key, value });
        }
      }
    } else {
      this.keyMap[hashedIndex].push({ key, value });
    }

    return hashedIndex;
  }

  get(key) {
    const hashedIndex = this.hash(key);

    if (!this.keyMap[hashedIndex][0]) {
      return null;
    }

    for (const element of this.keyMap[hashedIndex]) {
      if (element[key]) {
        return element;
      }
    }

    return null;
  }

  values() {
    let values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (const element of this.keyMap[i]) {
          //avoid duplicate values
          if (!values.includes(element.value)) {
            values.push(element.value);
          }
        }
      }
    }

    return values;
  }

  keys() {
    let keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (const element of this.keyMap[i]) {
          //avoid duplicate values
          if (!keys.includes(element.key)) {
            keys.push(element.key);
          }
        }
      }
    }

    return keys;
  }
}
