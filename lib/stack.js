// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
constructor(value) {
this.value = value;
this.next = null;
}
add(value) {
    if (!this.value) {

    }
}
}

class Stack {
  constructor(top, length) {
    this.count = 0;
    this.store = [];
    this.top = top;
    this.length = length;
  }
  push(value) {
         
    this.store.push(value);
    let newNode = new Node(this.value);
    return newNode;
  }

  pop() {
    return this.store[this.store.length - 1];
  }
  size() {
      let node = this.top;
      while (node) {
        count++;
        node = node.next;
      }
      return count;
    
  }
}

exports.Node = Node;
exports.Stack = Stack;
