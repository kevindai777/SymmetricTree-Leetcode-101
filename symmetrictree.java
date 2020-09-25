//Java Solution

class Solution {
    public boolean isSymmetric(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        queue.add(root);
        
        while (!queue.isEmpty()) {
            TreeNode node1 = queue.poll();
            TreeNode node2 = queue.poll();
            
            if (node1 == null && node2 == null) {
                continue;
            }
            
            if ((node1 == null && node2 != null) || (node1 != null && node2 == null)) {
                return false;
            }
            
            if (node1.val != node2.val) {
                return false;
            }
            
            queue.add(node1.left);
            queue.add(node2.right);
            queue.add(node1.right);
            queue.add(node2.left);
        }
        
        return true;
    }
}