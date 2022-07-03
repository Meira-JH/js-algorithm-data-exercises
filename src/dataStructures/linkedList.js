class Node {
    //defines value of node and next node
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

export class linkedList {
    //defines head, tail and length
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //add new element to the end of list
    push(value) {
        //instantiate new node
        const newNode = new Node(value);
        //if there is no head, make it head
        //and tail, once there are no elements
        if (!this.length) {
            this.head = newNode;
            this.tail = this.head;
            //else adds new element to end of list
            //and defines the new element as tail
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }

        //every push adds 1 to length
        ++this.length;
        return this;
    }

    //removes last element
    pop() {
        //checks if there is an element and return null if there isnt
        if (!this.length) return null;
        //define previousToTail to become the new tail
        let currentTail = this.tail;

        //if there is only one element, erases head and tail reference
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            //substitute tail node
            this.tail = currentTail.previous;
            //erase next element of the new tail
            this.tail.next = null;
            //erases the old tail previous connection
            currentTail.previous = null;
        }

        //substract 1 from length
        --this.length;

        return currentTail;
    }

    //removes first element
    shift() {
        if (!this.length) return null;
        //store currentHead to access .next after
        let currentHead = this.head;
        //substitute head value for .next value
        this.head = currentHead.next;
        //erases previous connection
        this.head.previous = null;
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

    get(nodePosition) {
        //define a variable to avoid confusion between index
        //and length size
        const lengthToPosition = this.length - 1;
        //return null if nodeposition doesnt exist in list
        if (nodePosition > lengthToPosition || nodePosition < 0) return null;

        //define variable for the list position during list iteration
        let listPosition = 0;
        //define variable for node iteration
        let listNode = this.head;
        //iterate through list
        while (listPosition < nodePosition) {
            //define the next element until arrive at the element indexed
            listNode = listNode.next;
            //add index position iteration
            ++listPosition;
        }

        return listNode;
    }

    set(nodeValue, nodePosition) {
        //gets the current node value
        const currentNode = this.get(nodePosition);
        //returns null if no node is found
        if (!currentNode) return null;
        //set new value to node
        currentNode.value = nodeValue;
        //return the new value
        return currentNode.value;
    }

    insert(nodeValue, nodePosition) {
        //if node position === 0 just unshift
        if (nodePosition === 0) return this.unshift(nodeValue);
        //if node position is after last node, push
        if (nodePosition === this.length) return this.push(nodeValue);

        //define node before and current node at position
        let nodeBefore = this.get(nodePosition - 1);
        let currentNode = this.get(nodePosition);

        //if no node is found in current, return null
        if (!currentNode) return null;

        //instantiate a new node to be inserted
        const newNode = new Node(nodeValue);
        //link it to the node before
        nodeBefore.next = newNode;
        //link the current to new node as its next
        newNode.next = currentNode;
        //override current node with the new node
        currentNode = newNode;
        //add 1 to lenght
        ++this.length;
        //return the new current node
        return currentNode;
    }

    remove(nodePosition) {
        //if node position === 0 just shift
        if (nodePosition === 0) return this.shift();
        //if node position is after last node, pop
        if (nodePosition === this.length - 1) return this.pop();

        //define node before and current node at position
        let nodeBefore = this.get(nodePosition - 1);
        let currentNode = this.get(nodePosition);

        //if no node is found in current, return null
        if (!currentNode) return null;

        //override next element to nodeBefore with next element of current node
        nodeBefore.next = currentNode.next;

        //substract 1 to lenght
        --this.length;

        //return the node removed
        return currentNode;
    }

    printList() {
        let array = [];
        let current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        console.log(array);
    }

    reverse() {
        let oldHead = this.head;
        this.head = this.tail;
        this.tail = oldHead;

        let currentNode = oldHead;
        let tempNext = null;
        let tempPrevious = null;
        let listPosition = 0;
        while (listPosition < this.length) {
            tempNext = currentNode.next;
            currentNode.next = tempPrevious;
            tempPrevious = currentNode;
            currentNode = tempNext;
            ++listPosition;
        }
        return this;
    }
}
