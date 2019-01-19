class Stack {
    
    constructor() {
        this.data = [];
    }

    get size() {
        return this.data.length;
    }

    push(item) {
        this.data.push(item);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.size - 1];
    }

    clear() {
        this.data = [];
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());
console.log(stack.peek());
