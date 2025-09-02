class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
  }
}

export class LinkedListSingly {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  checkIfValueNumberOrString(value) {
    if (typeof value === 'number') {
      return;
    }
    if (typeof value === 'string') {
      return;
    }

    throw new Error('A new node has to have a string or number value.');
  }

  checkIfPositionIsValid(position, isMethodInsert = false) {
    if (typeof position !== 'number') {
      throw new Error('A position must be a number');
    }

    if (isMethodInsert && position === this.length) {
      return;
    }

    if (position > this.length - 1 || position < 0) {
      throw new Error('This position does not exist on the list.');
    }
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
    this.checkIfValueNumberOrString(value);

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
    this.checkIfPositionIsValid(position);
    if (!this.length) {
      throw new Error('There are no elements.');
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

  setNewNode(value, positionToSet, pointerPosition, currentNode) {
    if (pointerPosition === positionToSet) {
      currentNode.value = value;
      console.log(
        `New value ${value} for node position ${pointerPosition} was set successfully.`
      );
      console.log(currentNode);
      return;
    }

    if (pointerPosition === 0) {
      return;
    }

    this.setNewNode(
      value,
      positionToSet,
      pointerPosition - 1,
      currentNode.previous
    );
  }

  set(position, value) {
    this.checkIfValueNumberOrString(value);
    this.checkIfPositionIsValid(position);
    this.setNewNode(value, position, this.length - 1, this.head);
    this.printList();
  }

  deleteNode(positionToDelete, pointerPosition, currentNode) {
    if (positionToDelete === this.length - 1) {
      this.head = currentNode.previous;
      this.length--;

      return console.log(
        `Node on position ${pointerPosition} deleted successfully.`
      );
    }

    if (pointerPosition === 1 && positionToDelete === 0) {
      currentNode.previous = null;
      this.tail = currentNode;
      this.length--;
      return console.log(
        `Node on position ${positionToDelete} deleted successfully.`
      );
    }

    if (pointerPosition === 0) {
      return;
    }

    if (pointerPosition === positionToDelete + 1) {
      const nodeToDelete = currentNode.previous;

      currentNode.previous = nodeToDelete.previous;
      this.length--;

      return console.log(
        `Node on position ${pointerPosition - 1} deleted successfully.`
      );
    }

    this.deleteNode(
      positionToDelete,
      pointerPosition - 1,
      currentNode.previous
    );
  }

  delete(position) {
    this.checkIfPositionIsValid(position);
    this.deleteNode(position, this.length - 1, this.head);
    this.printList();
  }

  insertNewNode(value, positionToInsert, pointerPosition, currentNode) {
    if (positionToInsert === this.length) {
      this.head = new Node(value);
      this.head.previous = currentNode;
      this.length++;

      return console.log(
        `Node on position ${pointerPosition} inserted successfully.`
      );
    }

    if (pointerPosition === 0 && positionToInsert === 0) {
      const newNode = new Node(value);
      currentNode.previous = newNode;
      this.length++;
      return console.log(
        `Node on position ${positionToInsert} inserted successfully.`
      );
    }

    if (pointerPosition === 0) {
      return;
    }

    if (pointerPosition === positionToInsert) {
      const newNode = new Node(value);
      newNode.previous = currentNode.previous;
      currentNode.previous = newNode;
      this.length++;

      return console.log(
        `Node on position ${pointerPosition} inserted successfully.`
      );
    }

    this.insertNewNode(
      value,
      positionToInsert,
      pointerPosition - 1,
      currentNode.previous
    );
  }

  insert(position, value) {
    this.checkIfPositionIsValid(position, true);
    this.checkIfValueNumberOrString(value);
    this.insertNewNode(value, position, this.length - 1, this.head);
    this.printList();
  }
}
