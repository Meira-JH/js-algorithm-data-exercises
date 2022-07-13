class Node {
  constructor(value){
    this.value = value
    this.next = null
  }

}

export class Stack {

  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }

  push(value){
    const newNode = new Node(value)

    if(this.size === 0){
      this.first = newNode
      this.last = newNode

    } else {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }

    return ++this.size
  }

  pop(){
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
