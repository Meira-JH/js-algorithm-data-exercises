//linear node relation where you only have the reference of next and previous elements
//in singly linked lists we only have the next element reference

class Node {
    //defines value of node and next node
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
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
            //add the new node to the next reference of the current tail
            this.tail.next = newNode;
            //reference the current tail to be the previous node of the pushed node
            newNode.previous = this.tail;
            //substitute the current tail for the new node
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
        //if there are no elements, turn head and tail null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            //substitute head value for .next value
            this.head = currentHead.next;
            //erases previous from new head
            this.head.previous = null;
            //erases connection from old head
            currentHead.previous = null;
        }

        //substract 1 from length
        --this.length;

        //returns deleted value
        return currentHead;
    }

    //insert new node at beginning
    unshift(nodeValue) {
        //instantiate a new node
        const newNode = new Node(nodeValue);
        //if there element, add head and tail
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            //else, make the new node the head and the head its next
            //also reference the new head as previous of the older one
        } else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
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

        //define node beginning value for iteration
        let listNode = null;
        //define node beginning position for iteration
        let listPosition = null;

        //if node is located closer to tail, begin there
        if (nodePosition >= lengthToPosition / 2) {
            listNode = this.tail;
            listPosition = lengthToPosition;

            //iterate through list
            while (listPosition !== nodePosition) {
                //define the next element until arrive at the element indexed
                listNode = listNode.previous;
                //add index position iteration
                --listPosition;
            }

            return listNode;

            //else begin from head
        } else {
            listNode = this.head;
            listPosition = 0;

            //iterate through list
            while (listPosition !== nodePosition) {
                //define the next element until arrive at the element indexed
                listNode = listNode.next;
                //add index position iteration
                ++listPosition;
            }

            return listNode;
        }
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

    insert(nodePosition, nodeValue) {
        //if node position === 0 just unshift
        if (nodePosition === 0) return this.unshift(nodeValue);
        //if node position is the position just after last node, push
        if (nodePosition === this.length) return this.push(nodeValue);

        //define current node at given position
        let currentNode = this.get(nodePosition);

        //if node is NOT found, return null
        if (!currentNode) return null;

        //instantiate a new node to be inserted
        const newNode = new Node(nodeValue);
        //substitute newNode.previous with currentNode.previous
        newNode.previous = currentNode.previous;
        //link current.previous to new node
        currentNode.previous = newNode;
        //link the current node to newNode.next
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

        //define current node at given position
        let currentNode = this.get(nodePosition);

        //if no node is found in current, return null
        if (!currentNode) return null;

        //currentNode.next as the next element of currentNode.previous
        currentNode.previous.next = currentNode.next;
        //vice-versa
        currentNode.next.previoous = currentNode.previous;
        //erases references of current node
        currentNode.next = null;
        currentNode.previous = null;

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
