class Node {
    constructor(data){
        this.data = data;
        this.next = null;
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
}