class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    get length() {
        return this._size;
    }

    isEmpty() {
        return this._size === 0;
    }

    add(value) {
        const node = new Node(value);

        if (this._head === null) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            this._tail = node;
        }

        this._size++;
    }

    contains(value) {
        let current = this._head;

        while (current) {
            if (current.value === value) {
                return true;
            }

            current = current.next;
        }

        return false;
    }

    remove(value) {
        let current = this._head;
        let previous = null;

        while (current) {
            if (current.value === value) {
                if (previous !== null) {
                    previous.next = current.next;

                    if (!current.next) {
                        this._tail = previous;
                    }
                } else {
                    this._head = this._head.next;

                    if (this._head === null) {
                        this._tail = null;
                    }
                }

                this._size--;

                return true;
            }

            previous = current;
            current = current.next;
        }

        return false;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    toArray() {
        let current = this._head;
        const result = [];

        while (current) {
            result.push(current.value);
            current = current.next;
        }

        return result;
    }

    toString() {
        return `
            Head: ${this._head && this._head.value},
            Tail: ${this._tail && this._tail.value},
            Count: ${this.length},
            List: ${this.toArray()}
        `;
    }
}

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);

console.log(list.contains(4));

list.remove(3);

console.log(list.contains(3));

// list.clear();

console.log(list.toString());
