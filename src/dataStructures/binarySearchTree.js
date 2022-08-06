//binary trees have ONLY parent/child relation between nodes
//one can have many children, which can have many other children
//binary trees parentes have only 2 children
//in binary searh trees all children to the left are smaller than the parent
//all children to the right are bigger

import { Queue } from './queue'

class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

export class BinarySearchTree {
  constructor(){
    this.root = null
    this.size = 0
    this.left = null
    this.right = null
  }

  insert(value, currentNode = this.root){
    const newNode = new Node(value)
    if(!this.root) {
      this.root = newNode
      ++this.size
      return this
    }

        if (value === currentNode.value) return null

        if(value > currentNode.value){
          if(currentNode.right === null){
            currentNode.right = newNode
            ++this.size
            return this 
          } else {
            this.insert(value, currentNode.right)
          }

        }
        if(value < currentNode.value){
          if(currentNode.left === null){
            currentNode.left = newNode
            ++this.size
            return this 
          } else {
            this.insert(value, currentNode.left)
          }
      }    
  }

  get(value, currentNode = this.root){
    if(!currentNode) return null

    if(value === currentNode.value) return currentNode

    if(value < currentNode.value) return this.get(value, currentNode.left)
    if(value > currentNode.value) return this.get(value, currentNode.right)

  }

  breadthFirst() {
    let node = this.root
    let breadthQueue = new Queue()
    let breadthArray = []
    let siblingsQueue = new Queue()

    siblingsQueue.enqueue(node)
    while(siblingsQueue.size){
      node = siblingsQueue.dequeue()

      breadthQueue.enqueue(node.value.value)
      breadthArray.push(node.value.value)
      if(node.value.left){
        siblingsQueue.enqueue(node.value.left)
        
      }
      if(node.value.right) siblingsQueue.enqueue(node.value.right)
    }

    return {breadthQueue, breadthArray}
  }
}
