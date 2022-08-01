import { Queue } from './queue'

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

  test(value, currentNode = this.root){
    return currentNode
  }

  get(value, currentNode = this.root){
    if(!this.root) {
      return null
    }
    if(currentNode.value === value) return currentNode

      if(value > currentNode.value){
        if(currentNode.right.value === value){
          return currentNode.right
        } else {
          this.get(value, currentNode.right ? currentNode.right : null)
        }

      }
      if(value < currentNode.value){

        if(currentNode.left.value === value){
          return currentNode.left
        } else {
          this.get(value, currentNode.left ? currentNode.left : null)
        }
    }
    
  }

  breadthFirst(){
    let node = this.root
    let breadthQueue = new Queue()
    let siblingsQueue = new Queue()

    siblingsQueue.enqueue(node)
    while(siblingsQueue.size){
      node = siblingsQueue.dequeue()

      breadthQueue.enqueue(node.value.value)
      if(node.value.left){
        siblingsQueue.enqueue(node.value.left)
      }
      if(node.value.right) siblingsQueue.enqueue(node.value.right)
    }

    return breadthQueue
  }
}
