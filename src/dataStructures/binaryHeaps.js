// parent/child relationshipt between nodes
// once the children are added in temporal order, the first added comes first
// this relation can be converted to a formula for array iteration
// formula:
// index n
// leftChild = 2n + 1
// rightChild = 2n + 2
// all children are smaller (minHeap) or bigger (maxHeap) than its parent
// it is a binary tree
// sibling nodes have no value order (only temporal)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let elementIndex = this.values.lenght - 1;
    const element = this.values[elementIndex];
    while (elementIndex > 0) {
      let parentIndex = Math.floor((elementIndex - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[elementIndex] = parent;
      elementIndex = parentIndex;
    }
  }
}
