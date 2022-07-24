import { binarySearchTree } from './dataStructures/binaryTree';

const bst = new binarySearchTree()

bst.insert(11)
bst.insert(22)
bst.insert(33)
bst.insert(4)
console.log(bst.get(22))
