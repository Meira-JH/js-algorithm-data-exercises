class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
  }
}

export class LinkedListSimple {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  isValueNumberOrString(value) {
    if (typeof value === 'number') {
      return true;
    }
    if (typeof value === 'string') {
      return true;
    }

    return false;
  }

  push(value) {
    if (!value || !this.isValueNumberOrString(value))
      throw new Error('A new node has to have a string or number value.');

    const newNode = new Node(value);

    if (this.head === null) {
      return (this.head = newNode);
    }

    newNode.previous = this.head;
    this.head = newNode;
    this.length++;
  }

  pop() {
    if (this.head.previous === null) {
      this.head = null;
    }

    const newHead = this.head.previous;
    this.head = newHead;
    this.length--;
  }

  printList() {
    const arrayToBePrinted = [];
    const nodes = this.length;
    let current = this.head;

    for (let node = 0; node <= nodes; node++) {
      arrayToBePrinted.unshift(current.value);
      current = current.previous;
    }

    console.log(arrayToBePrinted);
  }
}
