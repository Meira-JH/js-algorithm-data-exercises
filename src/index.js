import { SinglyLinkedList } from "./dataStructures/singlyLinkedList";

const list = new SinglyLinkedList();

list.unshift("pirilim ");
list.unshift("lol ");
list.unshift("pirilim ");

console.log(list.set("omg", 4));

console.log(list.get(1));
