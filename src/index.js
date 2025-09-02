import { LinkedListSingly } from './practice/linkedList.js';

function main() {
  const newList = new LinkedListSingly();

  newList.push(5);
  newList.push(10);
  newList.push(15);
  newList.push(20);
  newList.delete(0);
  newList.insert(0, 8759);
}

main();
