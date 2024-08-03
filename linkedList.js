class Node {
    constructor(data){
        this.data = data;
        this.next = null; //the tail points to null
    }
}

class LinkedLIst {
    constructor(){
        this.head = null;
    }

    insertAtBeginning(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtEnd(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode
    }

     // Delete a node given only a reference to that node
     deleteNode(node) {
      if (node === null || node.next === null) {// checks if node is null or if it's the last node in the list, if it is the last node or null cannot delete
          throw new Error("Cannot delete this node.");
      }
      // Copy the value from the next node into the current node
      node.data = node.next.data;
      // Update the 'next' pointer to bypass the next node
      node.next = node.next.next;
  }
}



