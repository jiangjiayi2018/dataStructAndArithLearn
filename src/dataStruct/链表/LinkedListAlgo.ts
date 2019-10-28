namespace LinkedList {
    export class LinkedListAlgo {

        /**链表反转*/
        public static reverse(head: Node): Node {
            let cur: Node = head;
            let pre: Node = null;
            while (cur) {
                let next: Node = cur.next;
                cur.next = pre;
                pre = cur;
                cur = next;
            }
            return pre;
        }

        /**链表环的检测*/
        public static checkCircle(head: Node): boolean {
            if (!head) {
                return false;
            }
            let fast: Node = head;
            let slow: Node = head;
            while (fast && fast.next) {
                fast = fast.next.next;
                slow = slow.next;
                if (fast === slow) {
                    return true;
                }
            }
            return false;

        }

        /**合并两个有序链表*/
        public static mergeList(head1: Node, head2: Node): Node {
            let soldier: Node = new Node();
            let cur: Node = soldier;
            let p1: Node = head1;
            let p2: Node = head2;
            while (p1 && p2) {
                if (p1.data <= p2.data) {
                    cur.next = p1;
                    p1 = p1.next;
                } else {
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
        }

        /**查找链表的中间节点*/
        public static findMiddleNode(head: Node): Node {
            let slow: Node = head;
            let fast: Node = head;
            while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
            }
            return slow;
        }

        /**删除倒数第K个节点*/
        public static deletLastNode(head: Node, lastIndex: number): Node {
            let fast: Node = head;
            let i = 1;
            while (fast && i !== lastIndex) {
                fast = fast.next;
                ++i;
            }
            if (!fast) {
                return head;
            }

            let pre: Node = null;
            let slow: Node = head;
            while (fast.next) {
                fast = fast.next;
                pre = slow;
                slow = slow.next;
            }

            if (!pre) {
                head = head.next;
            } else {
                pre.next = pre.next.next;
            }

            return head;



        }





    }

    export class Node {
        public data: number;
        public next: Node;

        public constructor(data?: number) {
            this.data = data;
        }
    }
}