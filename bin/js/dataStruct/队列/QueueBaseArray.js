var queue;
(function (queue) {
    var QueueBaseArray = (function () {
        function QueueBaseArray(size) {
            this.capacity = null;
            this.capacitySize = size;
            this.capacity = new Array(size);
            this.head = this.tailer = 0;
        }
        QueueBaseArray.prototype.enqueue = function (data) {
            /**队列已满*/
            if ((this.tailer + 1) % this.capacitySize === this.head) {
                return false;
            }
            this.capacity[this.tailer] = data;
            this.tailer = (this.tailer + 1) % this.capacitySize;
            return true;
        };
        QueueBaseArray.prototype.dequeue = function () {
            /**队列为空*/
            if (this.head === this.tailer) {
                return null;
            }
            var data = this.capacity[this.head];
            this.head = (this.head + 1) % this.capacitySize;
            return data;
        };
        return QueueBaseArray;
    }());
    queue.QueueBaseArray = QueueBaseArray;
})(queue || (queue = {}));
