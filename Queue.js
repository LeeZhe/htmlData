function Queue() {
    var items = []
    this.enqueue = function (data) {
        items.push(data)
    }
    this.dequeue = function (data) {
        return items.shift()
    }
    this.size = function (data) {
        return items.length
    }
    this.head = function () {
        return items[0]
    }
    this.clear = function () {
        items = []
    }

    this.isEmpty = function () {
        return items.length == 0
    }

}
exports.Queue = Queue