class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  #list = {};

  get list() {
    return this.#list;
  }

  #addHead(value){
    this.list.head = new Node(value)
    return this.#list.head;
  }

  // Adds a new node at the end of the list containing value;
  append(value) {
    if (this.#list.hasOwnProperty("head")) {
      let currentNode = this.#list.head;
      // Look for a Node that points to null
      while (currentNode.nextNode != null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = new Node(value);
      return currentNode.nextNode;
    } else {
      // add head if it doesnt exist
      return this.#addHead(value)
    }
  }

  // Adds note a the start of list.
  prepend(value) {
    if (this.#list.hasOwnProperty("head")) {
      let currentNode = this.#list.head;
      this.#list.head = new Node(value, currentNode)
      return currentNode.nextNode;
    } else {
      // add head if it doesnt exist
      return this.#addHead(value)
    }
  }

  // Returns the total number of nodes
  get size(){
    // If there's no head
    if(!this.#list.hasOwnProperty("head")){
        return 0
    }
    let currentNode = this.#list.head;
    let count = 1;
    while (currentNode.nextNode != null) {
        currentNode = currentNode.nextNode;
        count++
      }
    return count
  }

  // Returns the first node of list
  get head(){
    return this.#list.head
  }

  // Returns the last node
  get tail(){
    if (this.#list.hasOwnProperty("head")) {
        let currentNode = this.#list.head;
        // Look for a Node that points to null
        while (currentNode.nextNode != null) {
          currentNode = currentNode.nextNode;
        }
        return currentNode
      }
  }

  // Returns node at given index
  at(index){
    if(this.#list.hasOwnProperty("head")){
    let currentNode = this.#list.head;
    let count = 0;
    while (count != index) {
        currentNode = currentNode.nextNode;
        count++
      }
    return currentNode
    }
  }

  // Removes the last element
  pop(){
    if (this.#list.hasOwnProperty("head")) {
        const secondToLastNode =  this.at(this.size-2);
        secondToLastNode.nextNode = null
        return secondToLastNode;
      }
  }

    // Returns true if the value is in the list
    contains(value){
        if (this.#list.hasOwnProperty("head")) {
            let currentNode = this.#list.head;
            // Look for a Node that points to null
            while (currentNode != null) {
                if(currentNode.value == value){
                    return true
                }
              currentNode = currentNode.nextNode;
            }
            return false
          } 
        return false
    }

    // Returns the index of the node containing value
    find(value){
        if (this.#list.hasOwnProperty("head")) {
            let currentNode = this.#list.head;
            let count = 0
            // Look for a Node that points to null
            while (currentNode != null) {
                if(currentNode.value == value){
                    return count
                }
              currentNode = currentNode.nextNode;
              count++ 
            }
            return null
          } 
        return null
    }

    // Represents the whole list as string
    toString(){
        if (this.#list.hasOwnProperty("head")) {
            let string = `( ${this.#list.head.value} )`
            let currentNode = this.#list.head.nextNode;
            // Look for a Node that points to null
            while (currentNode != null) {
                string = `${string} -> ( ${currentNode.value} )`
              currentNode = currentNode.nextNode;
            }
            return string + ' -> null'
          }
            // add head if it doesnt exist
            return 'null'
    }
}

const ls = new LinkedList();

ls.append(2);
ls.append(3);
ls.prepend(1);
ls.append(4);
ls.append('juan')

console.log(ls.toString());
