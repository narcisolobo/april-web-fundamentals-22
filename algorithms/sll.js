class Node {

  constructor(val) {
    this.val = val;
    this.next = null;
  }

}

class SinglyLinkedList {

  constructor() {
    this.head = null;
  }

  // addFront Given a value, create a new node, connect it to the head of the list, and return the list. 

  addFront(val) {
    const newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
    return this;
  }

  printVals() {
    if (this.isEmpty()) {
      console.log("This SLL is empty.")
      return this;
    } else {
      let runner = this.head;
      let output = `**********\n`
      while (runner) {
        output += `${runner.val} > `;
        runner = runner.next;
      }
      console.log(output);
    }
    return this;
  }

}

let newSLL = new SinglyLinkedList();

newSLL.addFront(32);
newSLL.addFront(12);