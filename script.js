class LinkedList {
  isEmpty() {
    return Object.keys(this).length === 0;
  }

  append(value) {
    const newNode = Node(value);
    if (this.isEmpty()) {
      this.value = newNode.value;
      this.next = newNode.next;
      return;
    }
    let list = this;
    while (list.next !== null) {
      list = list.next;
    }
    list.next = newNode;
  }

  prepend(value) {
    const newNode = Node(value);
    if (this.isEmpty()) {
      this.value = newNode.value;
      this.next = newNode.next;
      return;
    }
    const tempList = structuredClone(this);
    this.value = newNode.value;
    this.next = tempList;
  }

  size() {
    let count = 0;
    let list = this;
    while (list.next !== null) {
      list = list.next;
      count += 1;
    }
    count += 1;
    console.log(count);
    return count;
  }

  head() {
    return this;
  }
}

const Node = (value = null, next = null) => ({
  value,
  next,
});

const newList = new LinkedList();
newList.append("Hello");
newList.prepend(1);
newList.size();
console.log(newList);
