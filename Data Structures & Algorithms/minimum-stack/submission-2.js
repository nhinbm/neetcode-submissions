class MinStack {
    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        let min = this.arr[0];

        for (let i = 1; i < this.arr.length; i++) {
            if (this.arr[i] < min) {
                min = this.arr[i];
            }
        }

        return min;
    }
}
