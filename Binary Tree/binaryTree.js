/**
 * This is Node Class containing the node's value and refernces for
 * the left and right nodes
 */
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new TreeNode(value)
        if (this.root === null) {
            this.root = newNode
        }
        else {
            this.insertNode(this.root, newNode);
        }

    }
    insertNode(parent, newNode) {
        if (parent.data < newNode.data) {
            if (parent.right === null) {
                parent.right = newNode
            }
            else {
                this.insertNode(parent.right, newNode)
            }
        } else if (parent.data > newNode.data) {
            if (parent.left === null) {
                parent.left = newNode
            }
            else {
                this.insertNode(parent.left, newNode)
            }
        }


    }
    delete(node) {
        //code...
    }

    inOrderTraversal(node = this.root) {
        if (node) {
            this.inOrderTraversal(node.left)
            console.log(node.data)
            this.inOrderTraversal(node.right)
        }

    }

    preOrderTraversal(node = this.root) {
        if (node) {
            console.log(node.data)
            this.preOrderTraversal(node.left)
            this.preOrderTraversal(node.right)
        }
    }

    postOrderTraversal(node = this.root) {
        if (node) {
            this.postOrderTraversal(node.left)
            this.postOrderTraversal(node.right)
            console.log(node.data)
        }
    }
}

const bst = new BinaryTree();
bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(8);
bst.insert(12);

bst.preOrderTraversal()

/** 
 *             15
 *          10    20
 *         8  12
 */
