// LinkedList class which has method to add values
class LinkedList {
  // adds values
  appendValue(value) {
    const nod = Node(value);
    this.addValueHelper(nod);
  }

  isEmpty() {
    return Object.keys(this).length === 0;
  }

  addValueHelper(node, list = this) {
    if (this.isEmpty()) {
      list.value = node.value;
      list.next = node.next;
      return;
    }
    if (list.next === null) {
      list.next = {};
      list.next.value = node.value;
      list.next.next = node.next;
      return;
    }
    list.addValueHelper(node, list.next);
  }

  // uses recursion to add value
  addValueHelper(node, list = this) {
    console.log(node);
    if (this.isEmpty()) {
      list.value = node.value;
      list.next = node.next;
      return;
    }
    if (list.next === null) {
      list.next = node;
      return;
    }
    list.addValueHelper(node, list.next);
  }

  // prints the list in console
  printList(list = this) {
    while (list) {
      console.log(list.value);
      list = list.next;
    }
  }
}

// Node factory function which creates a node object, has value and next
const Node = (value = null, next = null) => ({
  value,
  next,
});

const test = new LinkedList();
test.appendValue(1);
test.appendValue(2);
test.appendValue(3); // works fine till here
test.printList();
test.appendValue(4); // breaks, need help
test.printList();

// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// const list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: null,
//   },
// };

// console.log(list);

// const a = { value: 3, next: null };

// printList(list);

// addA(list, a);
// console.log(list);
// printList(list);

// class LinkedList {
//   constructor(val = "head", next = null) {
//     this.val = val;
//     this.next = next;
//   }

//   appendValue(val) {
//     const nod = new Node(val);
//     appendValueHelper(this);
//   }

//   printList() {
//     while (this) {
//       let blah = structuredClone(this);
//       console.log(blah.value);
//       blah = blah.next;
//     }
//   }
// }

// class Node {
//   constructor(val = null, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// const test = new LinkedList();
// test.appendValue(1);
// test.appendValue(2);
// console.log(test);

// function printList(list) {
//   while (list) {
//     console.log(list.value);
//     list = list.next;
//   }
// }
