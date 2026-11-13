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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const map = new Map();
        inorder.forEach((num, idx) => map.set(num, idx));
        let preIdx = 0;

        const dfs = (left, right) => {
            if (left > right) {
                return null;
            }

            let val = preorder[preIdx];
            preIdx += 1;
            let root = new TreeNode(val);
            let mid = map.get(val);
            root.left = dfs(left, mid - 1);
            root.right = dfs(mid + 1, right);
            return root;
        }
        
        return dfs(0, inorder.length - 1);
    }
}
