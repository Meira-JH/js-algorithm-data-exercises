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

    pop() {
        if (!this.head) return null;

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        --this.length;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }
}
