class DynamicArray {
    constructor(size) {
        this.data = new Array(size);
        this.count = 0;
    }

    resize() {
        const capacity = this.data.length === 0 ? 4 : this.data.length * 2;

        const newArray = new Array(capacity);

        this.data.forEach((v, i) => {
            newArray[i] = v;
        });

        this.data = newArray;
    }

    isFull() {
        return this.count === this.data.length;
    }

    add(value) {
        if (this.isFull()) {
            this.resize();
        }

        this.data[this.count++] = value;
    }

    insertAt(value, index) {
        if (index > this.count) {
            return;
        }

        if (this.isFull()) {
            this.resize();
        }

        const initial = [...this.data];

        for (let i = index; i < this.count; i++) {
            this.data[i + 1] = initial[i];
        }

        this.data[index] = value;

        this.count++;
    }
}

const arr = new DynamicArray(4);

arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);

arr.insertAt(5, 1);

console.log(arr);
