// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
  }

  insert(val, currentNode=this.root) {
    const newNode = new TreeNode(val);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    if (val < currentNode.val) {
      if (currentNode.left) {
        return this.insert(val, currentNode.left);
      }
      currentNode.left = newNode;
      return
    }
    if (val > currentNode.val) {
      if (currentNode.right) {
        return this.insert(val, currentNode.right);
      }
      currentNode.right = newNode;
      return
    }
  }

  search(val) {
    let currentNode = this.root;
    while(currentNode !== null) {
      if (val < currentNode.val) currentNode = currentNode.left;
      else if (val > currentNode.val) currentNode = currentNode.right;
      else return true;
    }
    return false;

    // let curr = this.root
    // if (val < this.root.val) {
    //   while(curr !== null) {
    //     if (curr.val === val) return true
    //     curr = curr.left
    //   }
    //   return false;
    // }

    // if (val > this.root.val) {
    //   while(curr !== null) {
    //     if (curr.val === val) return true
    //     curr = curr.right
    //   }
    //   return false;
    // }
  }


  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left)
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return
    this.inOrderTraversal(currentNode.left)
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return
    this.postOrderTraversal(currentNode.left)
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let queue = [];

    queue.push(this.root);
    while(queue.length > 0) {
      const curr = queue.shift();
      console.log(curr.val);
      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const stack = [this.root];
    while(stack.length > 0) {
      let curr = stack.pop();
      console.log(curr.val);
      if (curr.left) {
        stack.push(curr.left)
      }
      if (curr.right) {
        stack.push(curr.right)
      }
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
