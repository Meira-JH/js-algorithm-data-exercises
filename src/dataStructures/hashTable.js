// Hash Tables:
// Store key-value pairs
// Like arrays, but keys are not ordered
// fast for: finding values, adding new values and removing values
// very similar to objects
// hash function is responsible for the index. It has to be:
// a. fast, b. uniformly distributed, c. deterministic

class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size)
  }

  hashFunction(key) {
    let hash = 0

    //use prime numbers to be more efficient in avoiding colisions
    const PRIME_NUMBER = 31
  
    //avoid too long keys and loop through the key untill 100 
    for(let i =0; i<= Math.min(key.length, 100); i++){
      let character = key[i]

      let alphabetPosition = character.charCodeAt(0) - 96

      //create a hash in a way that makes it difficult to repeat the index
      //and that is uniformly distributed
      hash = (hash * PRIME_NUMBER + alphabetPosition) % this.keyMap.length
    }
  
    return hash  
  }
}
