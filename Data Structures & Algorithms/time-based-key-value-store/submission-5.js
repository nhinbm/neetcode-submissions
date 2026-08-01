class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, [[value, timestamp]]);
        } else {
            let cur = this.keyStore.get(key);
            let newValue = [...cur, [value, timestamp]];
            this.keyStore.set(key, newValue);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let value = this.keyStore.get(key);

        if (!value) return "";

        let left = 0;
        let right = value.length - 1;
        let min = -1;

        while (left <= right) {
            let mid = left + Math.trunc((right - left) / 2);
            
            if (value[mid][1] === timestamp) {
                return value[mid][0];
            }

            if (timestamp < value[mid][1]) {
                right = mid - 1;
            } else {
                left = mid + 1;
                min = mid;
            }
        }

        return min === -1 ? "" : value[min][0];
    }
}
