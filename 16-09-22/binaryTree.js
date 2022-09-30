function Node(l,r,data){
    this.left = l;
    this.right = r;
    this.data = data;
}

var root = new Node(null, null,1);
root.left = new Node(null, null,2);
root.right = new Node(null, null,3);
root.left.left = new Node(null, null,4);
root.right.left = new Node(null, null,5);
root.right.right =  new Node(null, null,8);
root.right.left.left =  new Node(null, null,6);
root.right.left.right = new Node(null, null,7);
root.right.right.left = new Node(null, null,9);
root.right.right.right = new Node(null, null,10);

printLeafNodes(root);
function printLeafNodes(rootNode){
    if(rootNode == null) return;

    if(rootNode.left == null && rootNode.right == null) {
        console.log(rootNode.data);
        return;
    }

     if(rootNode.left != null){
        printLeafNodes(rootNode.left);
     }

     if(rootNode.right != null){
        printLeafNodes(rootNode.right);
     }
}