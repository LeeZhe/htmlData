Queue = require('./Queue')

function printYanghui(n) {
    var queue = new Queue.Queue()
    queue.enqueue(1);
    var line = '';
    for(var i = 0; i < n; i++){
        var temp = 0;
        for (var j = 0; j <= i; j++){
            var item = queue.dequeue();
            line = line + item  + ' ';
            var tempVar = temp + item;
            queue.enqueue(tempVar);
            temp = item;
        }
        queue.enqueue(1);
        line += '\n'
    }

    console.log(line);
}

printYanghui(7)