import { HashTable } from "./dataStructures/hashTable";

let ht = new HashTable();

ht.set("greetings", "hello world!");
ht.set("departure", "good bye world!");
ht.set("cya", "see you soon!");
ht.set("cya", "see you soon!");
ht.set("cya", "see you soon!");
ht.set("return", "look who's back!");
ht.set("try again", "who let the dogs out?!");
ht.set("hi", "Hi there!");
console.log(ht.keyMap);
console.log(ht.values());
console.log(ht.keys());
