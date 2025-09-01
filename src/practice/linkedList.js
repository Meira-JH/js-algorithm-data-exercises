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

  printList() {
    let listToPrint = '';
    const nodes = this.length;
    let current = this.head;

    for (let node = 0; node <= nodes; node++) {
      if (node === 0) {
        listToPrint = `${current.value} (head)`;
        current = current.previous;

        continue;
      }
      if (node === this.length - 1) {
        listToPrint = `(tail) ${current.value} -> ${listToPrint}`;
        break;
      }

      listToPrint = `${current.value} -> ${listToPrint}`;
      current = current.previous;
    }

    console.log(listToPrint);
  }

  push(value) {
    if (!value || !this.isValueNumberOrString(value))
      throw new Error('A new node has to have a string or number value.');

    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.length++;
      return;
    }

    newNode.previous = this.head;
    this.head = newNode;
    this.length++;
  }

  pop() {
    if (!this.length) {
      return;
    }

    if (this.head.previous === null) {
      this.head = null;
    }

    const newHead = this.head.previous;
    this.head = newHead;
    this.length--;
  }

  get(position) {
    if (typeof position !== 'number') {
      throw new Error('A position must be a number');
    }
    if (!this.length) {
      throw new Error('There are no elements.');
    }
    if (position > this.length - 1 || position < 0) {
      throw new Error('This position does not exist on the list.');
    }

    const nodes = this.length;
    let currentNode = this.head;
    for (let node = nodes - 1; node >= 0; node--) {
      if (node === position) {
        return console.log(currentNode);
      }
      const previousNode = currentNode.previous;
      currentNode = previousNode;
    }
  }
}
