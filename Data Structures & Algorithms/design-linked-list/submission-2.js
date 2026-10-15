class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new ListNode(0);
        this.tail = new ListNode(0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let current = this.head.next;

        while (current && index > 0) {
            current = current.next;
            index -= 1;
        }

        if (current && current !== this.tail && index === 0) {
            return current.val;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let first = this.head.next;
        let newNode = new ListNode(val);
        newNode.prev = this.head;
        newNode.next = first;
        this.head.next = newNode;
        first.prev = newNode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let last = this.tail.prev;
        let newNode = new ListNode(val);
        newNode.prev = last;
        newNode.next = this.tail;
        this.tail.prev = newNode;
        last.next = newNode;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        let current = this.head.next;
        
        while(current && index > 0) {
            current = current.next;
            index -= 1;
        }

        if (current && index === 0) {
            let newNode = new ListNode(val);
            let prev = current.prev;
            prev.next = newNode;
            newNode.prev = prev;
            current.prev = newNode;
            newNode.next = current;
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        let current = this.head.next;

        while(current && index > 0) {
            current = current.next;
            index -= 1;
        }

        if (current && current !== this.tail && index === 0) {
            let prev = current.prev;
            let next = current.next;
            prev.next = next;;
            next.prev = prev;
        }
    }
}
