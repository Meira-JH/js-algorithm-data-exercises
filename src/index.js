import { SinglyLinkedList } from "./dataStructures/singlyLinkedList";

const list = new SinglyLinkedList();

list.push("OI");
list.push("VC QUER");
list.push("COMPRAR UM ELEFANTE");
list.push("marrom");
list.push("e um passaro");
list.push("amarelo?");

list.shift();

console.log(list.head);
console.log(list);
