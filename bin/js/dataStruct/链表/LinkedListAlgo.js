var LinkedList;
(function (LinkedList) {
    var LinkedListAlgo = (function () {
        function LinkedListAlgo() {
        }
        /**链表反转*/
        LinkedListAlgo.reverse = function (head) {
            var cur = head;
            var pre = null;
            while (cur) {
                var next = cur.next;
                cur.next = pre;
                pre = cur;
                cur = next;
            }
            return pre;
        };
        /**链表环的检测*/
        LinkedListAlgo.checkCircle = function (head) {
            if (!head) {
                return false;
            }
            var fast = head;
            var slow = head;
            while (fast && fast.next) {
                fast = fast.next.next;
                slow = slow.next;
                if (fast === slow) {
                    return true;
                }
            }
            return false;
        };
        /**合并两个有序链表*/
        LinkedListAlgo.mergeList = function (head1, head2) {
            var soldier = new Node();
            var cur = soldier;
            var p1 = head1;
            var p2 = head2;
            while (p1 && p2) {
                if (p1.data <= p2.data) {
                    cur.next = p1;
                    p1 = p1.next;
                }
                else {
                    cur.next = p2;
                    p2 = p2.next;
                }
                cur = cur.next;
            }
            if (p1) {
                cur.next = p1;
            }
            if (p2) {
                cur.next = p2;
            }
            return soldier.next;
        };
        /**查找链表的中间节点*/
        LinkedListAlgo.findMiddleNode = function (head) {
            var slow = head;
            var fast = head;
            while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
            }
            return slow;
        };
        /**删除倒数第K个节点*/
        LinkedListAlgo.deletLastNode = function (head, lastIndex) {
            var fast = head;
            var i = 1;
            while (fast && i !== lastIndex) {
                fast = fast.next;
                ++i;
            }
            if (!fast) {
                return head;
            }
            var pre = null;
            var slow = head;
            while (fast.next) {
                fast = fast.next;
                pre = slow;
                slow = slow.next;
            }
            if (!pre) {
                head = head.next;
            }
            else {
                pre.next = pre.next.next;
            }
            return head;
        };
        return LinkedListAlgo;
    }());
    LinkedList.LinkedListAlgo = LinkedListAlgo;
    var Node = (function () {
        function Node(data) {
            this.data = data;
        }
        return Node;
    }());
    LinkedList.Node = Node;
})(LinkedList || (LinkedList = {}));
