import { BinarySearchTree } from './dataStructures/binarySearchTree';
import { Queue } from './dataStructures/queue';

const bst = new BinarySearchTree()

bst.insert(11)
bst.insert(22)
bst.insert(33)
bst.insert(4)
bst.insert(10)
bst.insert(100)
bst.insert(1)
console.log(bst.get(10))
