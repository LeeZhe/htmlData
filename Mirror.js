const BiraryTree = require('./Tree');
const Stack = require('./Stack')
const Queue = require('./Queue')
var bt = new BiraryTree.BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");
var root_node = bt.get_root()
// bt.in_order(root_node)

var pre_node_while = function (node) {
    var stack = new Stack.Stack();
    var current_node = node;
    while (current_node){
        console.log(current_node.data);
       if (current_node.rightChild){
           stack.push(current_node.rightChild)
       }
       if (current_node.leftChild)
       {
           current_node = current_node.leftChild
       }
       else
       {
           current_node = stack.pop()
       }
    }
};

// 中序遍历
var in_order_while = function(node){
    var cur_node = node;
    let stack = new Stack.Stack();
    // let queue = new Queue.Queue();
    stack.push(node);
    while (cur_node){

        if (cur_node.leftChild)
        {
            stack.push(cur_node.leftChild);
            cur_node = cur_node.leftChild;
        }
        else
        {
            cur_node = stack.pop();
            if (cur_node)
            {
                console.log(cur_node.data)
                if (cur_node.rightChild){
                    cur_node = cur_node.rightChild
                    stack.push(cur_node)
                }
            }

        }
    }

};

// 后续遍历
var  post_order_while = function(node){
    var cur_note = node;
    let stack = new Stack.Stack();
    stack.push(node);
    var k = 0;
    while (cur_note) {

        if (cur_note.leftChild)
        {
            cur_note = cur_note.leftChild
            stack.push(cur_note)
        }
        else {
            if (stack.isEmpty() == false)
            {
                cur_note = stack.pop();

                if (cur_note == node)
                {
                    stack.push(cur_note)
                    k == 1
                }


                if (cur_note.rightChild)
                {
                    cur_note = cur_note.rightChild
                    stack.push(cur_note)
                }
            }

        }

    }
};

// pre_node_while(root_node);
// bt.in_order(root_node)

// console.log('中序遍历');
// in_order_while(root_node);

// post_order_while(root_node)
// console.log('后序遍历');
// bt.post_order(root_node)
// console.log('后序遍历');
post_order_while(root_node)