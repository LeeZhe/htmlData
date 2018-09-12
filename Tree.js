Stack = require('./Stack.js')

var BinTreeNode = function (data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
    this.parentNode  = null;
}

function BinaryTree() {
    var root = null; // 跟节点
    //
    this.init_tree = function(string) {
        var stack = new Stack.Stack();
        var k = 0;
        var new_node = null;
        for(var i =0; i < string.length;i++){
            var item = string[i];
            if(item == "#"){
                break;
            }
            if(item=="("){
                stack.push(new_node);
                k = 1;
            }else if(item==")"){
                stack.pop();
            }else if(item==","){
                k = 2;
            }else{
                new_node = new BinTreeNode(item);
                if(root==null){
                    root = new_node;
                }else if(k==1){
                    // 左子树
                    var top_item = stack.top();
                    top_item.leftChild = new_node;
                    new_node.parentNode = top_item;
                    // console.log(new_node.data)
                }else{
                    // 右子树
                    var top_item = stack.top();
                    top_item.rightChild = new_node;
                    new_node.parentNode = top_item;
                }
            }
        }
    };

    this.get_root = function () {
        // console.log('111111111111111')
        return root;
    };

    // 中序遍历
    this.in_order = function(node){
        if(node==null){
            return;
        }
        this.in_order(node.leftChild);
        console.log(node.data);
        this.in_order(node.rightChild);
    };

    this.pre_order = function (node) {
        if (node == null) return;
        console.log(node.data)
        this.pre_order(node.leftChild);
        this.pre_order(node.rightChild);
    };


    // 后序遍历
    this.post_order = function(node){
        if(node==null){
            return;
        }
        this.post_order(node.leftChild);
        this.post_order(node.rightChild);
        console.log(node.data);
    };

    var tree_node_count = function (node) {
        // 左子树的节点数量，右字数的节点数量 + 当前节点（1）
        if (node == null){
            return 0;
        }
        var left_node_count = tree_node_count(node.leftChild);
        var right_node_count = tree_node_count(node.rightChild);
        return  left_node_count + right_node_count + 1
    }

    this.size = function () {
        return tree_node_count(root)
    }

    var tree_height = function (node) {
        if (node == null){
            return 0;
        }
        var left_child_height = tree_height(node.leftChild);
        var right_child_height = tree_height(node.rightChild);
        return left_child_height > right_child_height ? left_child_height + 1 : right_child_height + 1;
    }

    this.height = function () {
        return tree_height(root)
    }




}



exports.BinaryTree = BinaryTree;
