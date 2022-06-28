class Node {
    //defines value of node and next node
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class SinglyLinkedList {
    //defines head, tail and length
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //defines the method to add new elements to the end of list
    push(value) {
        //instantiate new node
        const newNode = new Node(value);
        //if there is no head, make it head
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            //else adds new element to end of list
            //and defines the new element as tail
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        //every push adds 1 to length
        ++this.length;
        return this;
    }
}
