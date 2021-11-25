// 参考链接 https://blog.csdn.net/qq_40731976/article/details/113176820
class TreeNode {
    // 定义节点
    public data: any;
    public leftChild: TreeNode;
    public rightChild: TreeNode;

    constructor(data) {
        this.data = data
        this.leftChild = null
        this.rightChild = null
    }
}

// 创建二叉树
const createTree = (arr) => {
    let tree = new TreeNode(arr[0])
    let Nodes = [tree]
    let i = 1
    for (let node of Nodes) {
        Nodes.push(node.leftChild = new TreeNode(arr[i]))
        i += 1
        if (i == arr.length) return tree
        Nodes.push(node.rightChild = new TreeNode(arr[i]))
        i += 1
        if (i == arr.length) return tree
    }
}
let data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
let t = createTree(data)
console.log(t)

const preOrder = (tree) => { // 前序遍历
    if (tree) {
        console.log(tree.data)
        preOrder(tree.leftChild)
        preOrder(tree.rightChild)
    }
}
preOrder(t) // A B D H E C F G



const midOrder = (tree) => { // 中序遍历
    if (tree) {
        midOrder(tree.leftChild)
        console.log(tree.data)
        midOrder(tree.rightChild)
    }
}
midOrder(t) // H D B E A F C G




const backOrder = (tree) => { // 后序遍历
    if (tree) {
        backOrder(tree.leftChild)
        backOrder(tree.rightChild)
        console.log(tree.data)
    }
}
backOrder(t) // H D E B F G C A


const levelOrder = (tree, nodeList = []) => { // 层序遍历(广度优先)
    if (tree) {
        nodeList.push(tree)
        while (nodeList.length != 0) {
            let len = nodeList.length
            for (let i = 0; i < len; i++) {
                let n = nodeList.shift()
                if (n.leftChild) {
                    nodeList.push(n.leftChild)
                }
                if (n.rightChild) {
                    nodeList.push(n.rightChild)
                }
                console.log(n.data)
            }
        }
    }
}
levelOrder(t) // A B C D E F G H
