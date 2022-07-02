import { SinglyLinkedList } from "./dataStructures/singlyLinkedList";

const list = new SinglyLinkedList();

list.unshift("pirilim ");
list.unshift("lol ");
list.unshift("pirilim ");

console.log(list.insert("omg", 3));

console.log(list);
