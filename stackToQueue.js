Stack = require('./Stack.js')
Queue = require('./Queue.js')

// 队列，先进先出
// 栈， 后进先出

function  Stack_Queue() {

    var data_stack = new Stack.Stack()
    var op_stack = new Stack.Stack()


    function operationStack() {

    }

    this.dequeue = function () {
        if (data_stack.isEmpty()) return false;

        while (data_stack.size()> 0){
            var data = data_stack.pop()
            op_stack.push(data)
        }
        var item = op_stack.top()
        op_stack.pop();
        while (op_stack.size() > 0){
            data_stack.push(op_stack.pop())
        }

        return item
    }

    this.enqueue = function (item) {
        data_stack.push(item)
    }

    this.tail = function () {
        var item = data_stack.top()

        return item
    }

    this.head = function () {
        while (data_stack.size() > 1){
            data = data_stack.pop()
            op_stack.push(data)
            // console.log('item',data)
        }

        var headValue = data_stack.top()
        while (op_stack.length > 0){
            data_stack.push(op_stack.pop())
        }
        return headValue
    }

}

queue = new Stack_Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(5)
queue.enqueue(9)

console.log('head',queue.head())

// console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
