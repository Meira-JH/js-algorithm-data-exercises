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

    //removes last element
    pop() {
        //checks if there is an element and return null if there isnt
        if (!this.head) return null;

        //references a current element and the new tail after the pop
        let current = this.head;
        let newTail = current;

        //iterate the list untill the element before last
        while (current.next) {
            //define new tail value with current value
            //define the next node value as the value of current element
            newTail = current;
            current = current.next;
        }
        //tail incorporates newTail value
        this.tail = newTail;
        //erases the old tail value
        this.tail.next = null;
        //substract 1 from length
        --this.length;
        //if there are no elements, turns every remaining reference to null
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    //removes first element
    shift() {
        if (!this.head) return null;
        //store currentHead to access .next after
        let currentHead = this.head;
        //substitute head value for .next value
        this.head = currentHead.next;
        //substract 1 from length
        --this.length;
        //if there are no elements, turn head and tail null
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        //returns deleted value
        return currentHead;
    }

    //insert new node at beginning
    unshift(nodeValue) {
        //instantiate a new node
        let newNode = new Node(nodeValue);
        //if there is no head, add head and tail
        if (!this.head && !this.length) {
            this.head = newNode;
            this.tail = newNode;
            //else, make the new node the head and the head its next
        } else {
            let currentHead = this.head;
            this.head = newNode;
            this.head.next = currentHead;
        }
        //same as above
        ++this.length;
        return this;
    }
}
