var queue;
(function (queue) {
    var QueueBaseLinkedList = (function () {
        function QueueBaseLinkedList(size) {
            this.head = null;
            this.tailer = null;
            this.capacitySize = size;
            this.size = 0;
        }
        QueueBaseLinkedList.prototype.enqueue = function (data) {
            if (this.size === this.capacitySize) {
                return false;
            }
            var node = new LinkedList.LinkedListNode(data);
            if (this.size === 0) {
                this.head = this.tailer = node;
            }
            else {
                this.tailer.next = node;
                this.tailer = this.tailer.next;
            }
            return true;
        };
        QueueBaseLinkedList.prototype.dequeue = function () {
            if (this.size === 0) {
                return null;
            }
            var data = this.head.data;
            this.head = this.head.next;
            --this.size;
            return data;
        };
        return QueueBaseLinkedList;
    }());
    queue.QueueBaseLinkedList = QueueBaseLinkedList;
})(queue || (queue = {}));
