class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

export class binarySearchTree {
  constructor(){
    this.root = null
    this.length = 0
    this.left = null
    this.right = null
  }

  insert(value, currentNode = this.root){
    const newNode = new Node(value)
    if(!this.root) {
      this.root = newNode
      return this
    }

        if (value === currentNode.value) return null

        if(value > currentNode.value){
          if(currentNode.right === null){
            currentNode.right = newNode
            ++this.length
            return this 
          } else {
            this.insert(value, currentNode.right)
          }

        }
        if(value < currentNode.value){
          if(currentNode.left === null){
            currentNode.left = newNode
            ++this.length
            return this 
          } else {
            this.insert(value, currentNode.left)
          }
      }    
  }

  get(value, currentNode = this.root){
    if(!this.root) {
      return null
    }
    if(this.root.value === value) return this.root
    if(!currentNode.right && !currentNode.left){
      return null
    }
      if(value > currentNode.value){
        if(currentNode.right.value === value){
          return currentNode.right
        } else {
          this.get(value, currentNode.right)
        }

      }
      if(value < currentNode.value){
        if(currentNode.left.value === value){
          return currentNode.left
        } else {
          this.get(value, currentNode.left)
        }
    }  
  }
}
