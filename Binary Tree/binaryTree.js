/**
 * This is Node Class containing the node's value and refernces for
 * the left and right nodes
 */
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value){
        let node = new TreeNode(value)
        if(this.root === null){
            this.root = node
        }

    }

    delete(node){
        //code...
    }

    inOrderTraversal(root){
        //code...
    }

    preOrderTraversal(root){
        //code...
    }

    postOrderTraversal(root){
        //code...
    }
}

const tree = new BinaryTree();
tree.insert(10)
