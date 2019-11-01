var stack;
(function (stack) {
    var Node = (function () {
        function Node(data, next) {
            this.data = data;
            this.next = next;
        }
        return Node;
    }());
    stack.Node = Node;
    var StackBaseLinkedList = (function () {
        function StackBaseLinkedList() {
            this.head = null;
            this.length = 0;
            this.head = new Node();
        }
        StackBaseLinkedList.prototype.push = function (data) {
            var newNode = new Node(data);
            newNode.next = this.head.next;
            this.head.next = newNode;
            ++this.length;
        };
        StackBaseLinkedList.prototype.pop = function () {
            var data = null;
            if (this.head.next) {
                data = this.head.next.data;
                this.head.next = this.head.next.next;
                --this.length;
            }
            return data;
        };
        StackBaseLinkedList.prototype.getTopData = function () {
            var data = null;
            if (this.head.next) {
                data = this.head.next.data;
            }
            return data;
        };
        StackBaseLinkedList.prototype.clear = function () {
            this.length = 0;
            this.head.next = null;
        };
        return StackBaseLinkedList;
    }());
    stack.StackBaseLinkedList = StackBaseLinkedList;
})(stack || (stack = {}));
