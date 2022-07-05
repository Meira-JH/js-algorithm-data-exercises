import { linkedList } from "./dataStructures/linkedList";

const list = new linkedList();

list.unshift("pirilim");
list.unshift("pom pom");
list.push("pim pom");
list.insert(3, "wut");
list.remove(2);

list.printList();
