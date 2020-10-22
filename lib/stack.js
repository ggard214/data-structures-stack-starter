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

}

class Stack {
  constructor() {
    this.store = [];
    this.top = null;
    this.length = 0;
  }
  push(value) {
    let myValue = new Node(value);     
    this.store.push(value);
    this.length++;
    
    if(this.store.length >= 1) {
    const prevTop = this.top;
    myValue.next = prevTop;
    }
    this.top = myValue;
    return this.store.length;
//     if (!this.top) {
//         this.top = new Node(value);
//     } else {
//         let prevTop = this.top;
//         this.top = new Node(value);
//         this.top.next = prevTop;
//     }
  }

  pop() {
       this.length--;
      if(this.store.length >= 2) {
        this.top = this.top.next;  
      }
      if (this.store.length === 0) {
          return null;
      } 
       if (this.store.length === 1) {
        this.top = null;
      }
       return this.store.pop();
  }

  size() {
     if (this.store.length === 0) {
         return 0;
     } else if (this.store.length >= 2) {
         return 2;
     } else {
         return 1;
     }
    
  }
}

exports.Node = Node;
exports.Stack = Stack;
