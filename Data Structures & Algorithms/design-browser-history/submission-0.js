class ListNode {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.cur = new ListNode(homepage);
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.cur.next = new ListNode(url, this.cur, null);
        this.cur = this.cur.next;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while (this.cur.prev && steps !== 0) {
            this.cur = this.cur.prev;
            steps -= 1;
        }
        return this.cur.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while (this.cur.next && steps !== 0) {
            this.cur = this.cur.next;
            steps -= 1;
        }
        return this.cur.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
