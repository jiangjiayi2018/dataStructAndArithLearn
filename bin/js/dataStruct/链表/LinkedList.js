var LinkedList;
(function (LinkedList) {
    var LinkedListClazz = (function () {
        function LinkedListClazz() {
        }
        LinkedListClazz.reverse = function (header) {
            if (!header || !header.next) {
                return header;
            }
            var prev = null;
            var current = header;
            while (current) {
                var nextNode = current.next;
                current.next = prev;
                prev = current;
                current = nextNode;
            }
            return prev;
        };
        LinkedListClazz.consoleNode = function (header) {
            var str = "";
            while (header) {
                str += header.data + "-->";
                header = header.next;
            }
            console.log(str);
        };
        LinkedListClazz.consoleNodeInverted = function (tailer) {
            var str = "";
            while (tailer) {
                str += tailer.data + "-->";
                tailer = tailer.pre;
            }
            console.log(str);
        };
        LinkedListClazz.createLinkedList = function (count) {
            var header = null;
            var current = null;
            for (var i = 1; i <= count; ++i) {
                var node = new LinkedListNode(i);
                if (!header) {
                    header = node;
                }
                else {
                    current.next = node;
                }
                current = node;
            }
            return header;
        };
        LinkedListClazz.createBothLinkedList = function (count) {
            var header = null;
            var tailer = null;
            for (var i = 1; i <= count; ++i) {
                var node = new LinkedListNode(i);
                if (!header) {
                    header = node;
                }
                else {
                    tailer.next = node;
                    node.pre = tailer;
                }
                tailer = node;
            }
            return tailer;
        };
        LinkedListClazz.test = function (count) {
            var header = LinkedListClazz.createLinkedList(count);
            LinkedListClazz.consoleNode(header);
            header = LinkedListClazz.reverse(header);
            LinkedListClazz.consoleNode(header);
        };
        LinkedListClazz.test2 = function (count) {
            var tailer = LinkedListClazz.createBothLinkedList(count);
            LinkedListClazz.consoleNodeInverted(tailer);
        };
        return LinkedListClazz;
    }());
    LinkedList.LinkedListClazz = LinkedListClazz;
    var LinkedListNode = (function () {
        function LinkedListNode(data) {
            this.data = data;
        }
        return LinkedListNode;
    }());
    LinkedList.LinkedListNode = LinkedListNode;
})(LinkedList || (LinkedList = {}));
