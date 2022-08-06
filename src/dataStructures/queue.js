//queues are linear node relations that have only the next reference and it
//we only add elemnts at the end and withdraw from the beginning

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class Queue {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(value) {
    const newNode = new Node(value)
    if(!this.size){
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    return ++this.size
  }

  dequeue(){
    if(!this.first) return null
    let temp = this.first
    if(this.last === this.first){
      this.last = null
    } 
    this.first = this.first.next
    --this.size
    return temp
  }

}
