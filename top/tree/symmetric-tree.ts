/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {

};


// const check = (p: TreeNode | null, q: TreeNode | null): boolean => {
//     if (!p && !q) return true;
//     if (!p || !q) return false;
//     return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
// }
// var isSymmetric = function(root: TreeNode | null): boolean {
//     return check(root, root);
// };
