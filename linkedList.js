class LinkedList {
    constructor() {
        this.head = null; // Initialize the head of the list as null
        this.tail = null; // Initialize the tail of the list as null
        this.length = 0;  // Keep track of the number of elements in the list
    }

    // Get the value at a specific index
    get(index) {
        if (index < 0 || index >= this.length) {
            return -1; // Return -1 if the index is out of bounds
        }

        let current = this.head;
        let counter = 0;

        while (current !== null) {
            if (counter === index) {
                return current.value; // Return the value at the specified index
            }
            current = current.next;
            counter++;
        }

        return -1; // This shouldn't be reached due to bounds check
    }

    // Insert a new value at the head of the list
    insertHead(val) {
        const newNode = { value: val, next: this.head }; // Create a new node as an object

        if (this.head === null) {
            // If the list is empty, set both head and tail to the new node
            this.tail = newNode;
        }

        this.head = newNode; // Update the head to the new node
        this.length++;       // Increment the length of the list
    }

    // Insert a new value at the tail of the list
    insertTail(val) {
        const newNode = { value: val, next: null }; // Create a new node as an object

        if (this.tail === null) {
            // If the list is empty, set both head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // Link the last node to the new node
            this.tail = newNode;      // Update the tail to the new node
        }

        this.length++; // Increment the length of the list
    }

    // Remove a node at a specific index
    remove(index) {
        if (index < 0 || index >= this.length) {
            return false; // Return false if the index is out of bounds
        }

        if (index === 0) {
            // Remove the head by moving the head to the next node
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null; // If the list becomes empty, set the tail to null
            }
            this.length--;
            return true;
        }

        let current = this.head;
        let previous = null;
        let counter = 0;

        // Traverse to the node before the one we want to remove
        while (counter < index) {
            previous = current;
            current = current.next;
            counter++;
        }

        previous.next = current.next; // Skip the node to remove it
        if (previous.next === null) {
            this.tail = previous; // Update the tail if we removed the last element
        }

        this.length--;
        return true;
    }

    // Get all values in the list as an array
    getValues() {
        const values = [];
        let current = this.head;

        while (current !== null) {
            values.push(current.value); // Add each node's value to the array
            current = current.next;     // Move to the next node
        }

        return values; // Return the array of values
    }
}
