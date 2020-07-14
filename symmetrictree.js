//Objective is to see wheter the two sides of a binary tree are symmetric.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(200)
tree.addLeftNode(tree.root, 500)
tree.addRightNode(tree.root, 700)
tree.addLeftNode(tree.root.left, 600)
tree.addRightNode(tree.root.right, 800)
tree.addLeftNode(tree.root.left.left, 1000)
tree.addRightNode(tree.root.left, 950)
tree.addLeftNode(tree.root.right, 720)
tree.addRightNode(tree.root.right.right, 440)
tree.addLeftNode(tree.root.left.left.left, 560)
tree.addRightNode(tree.root.right.right.right, 810)


//O(n) solution that uses BFS and a queue to compare each two nodes.

let queue = []
    
queue.push(root)
queue.push(root)
    
while (queue.length > 0) {
    let node1 = queue.shift()
    let node2 = queue.shift()
        
    if (!node1 && !node2) {
        continue
    }
        
    if (!node1 || !node2) {
        return false
    }
        
    if (node1.val !== node2.val) {
        return false
    }
        
    //Compare these two next
    queue.push(node1.left)
    queue.push(node2.right)
        
    //As well as these two
    queue.push(node1.right)
    queue.push(node2.left)
}
    
return true
