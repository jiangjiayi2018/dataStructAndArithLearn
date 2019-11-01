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
        LinkedListClazz.addCacheData = function (str) {
            if (!LinkedListClazz.header) {
                LinkedListClazz.header = new LinkedListNode(str);
                LinkedListClazz.linkedLength++;
                return true;
            }
            var pre = null;
            var current = LinkedListClazz.header;
            var isFindNode = false;
            while (current) {
                if (current.data === str) {
                    if (current === LinkedListClazz.header) {
                        LinkedListClazz.header = null;
                    }
                    else {
                        pre.next = current.next;
                        current.next = null;
                    }
                    isFindNode = true;
                    break;
                }
                else {
                    pre = current;
                    current = current.next;
                }
            }
            if (isFindNode) {
                LinkedListClazz.insertHeader(str, LinkedListClazz.header);
            }
            else {
                if (LinkedListClazz.linkedLength === 10) {
                    LinkedListClazz.removeTailer(LinkedListClazz.header);
                }
                else {
                    LinkedListClazz.insertHeader(str, LinkedListClazz.header);
                    LinkedListClazz.linkedLength++;
                }
            }
        };
        LinkedListClazz.insertHeader = function (str, header) {
            if (!header) {
                header = new LinkedListNode(str);
            }
            else {
                var newNode = new LinkedListNode(str);
                newNode.next = header.next;
                header.next = newNode;
            }
        };
        LinkedListClazz.removeTailer = function (header) {
            if (!header || !header.next) {
                header = null;
                return;
            }
            var current = header;
            while (true) {
                if (!current.next.next) {
                    current.next = null;
                    break;
                }
                else {
                    current = current.next;
                }
            }
        };
        return LinkedListClazz;
    }());
    LinkedListClazz.header = null;
    LinkedListClazz.linkedLength = 0;
    LinkedList.LinkedListClazz = LinkedListClazz;
    var LinkedListNode = (function () {
        function LinkedListNode(data) {
            this.data = data;
        }
        return LinkedListNode;
    }());
    LinkedList.LinkedListNode = LinkedListNode;
})(LinkedList || (LinkedList = {}));
