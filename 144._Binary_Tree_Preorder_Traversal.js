/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    const stack = [];
    const res = [];
    if (root == null) return res;
    stack.push(root);
    while (stack.length > 0) {
        let temp = stack.pop();
        res.push(temp.val);
        if (temp.right) {
            stack.push(temp.right)
        }
        if (temp.left) {
            stack.push(temp.left)
        }
    }
    return res;
};