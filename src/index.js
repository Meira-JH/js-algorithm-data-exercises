import { LinkedListSimple } from './practice/linkedList.js';

function main() {
  const newList = new LinkedListSimple();

  newList.push(5);
  newList.push(10);
  newList.push(15);
  newList.push(20);

  newList.pop();

  newList.printList();
}

main();
