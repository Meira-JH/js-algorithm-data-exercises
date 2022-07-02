import { SinglyLinkedList } from "./dataStructures/singlyLinkedList";

const list = new SinglyLinkedList();

list.push("pirilim");
list.push("omg");
list.push("lol");
list.push("nice");
list.push("pow");
list.push("wow");
list.push("pim pim");

list.printList();
list.reverse();
console.log(list);
list.printList();
