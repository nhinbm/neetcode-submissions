/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (subRoot === null) return true;

        if (root === null) return false;

        if (this.sameTree(root, subRoot)) {
            return true;
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    sameTree(a, b) {
        if (a === null && b === null) {
            return true;
        }
        
        if (a && b && a.val === b.val) {
            return this.sameTree(a.left, b.left) && this.sameTree(a.right, b.right);
        }

        return false;
    }
}
