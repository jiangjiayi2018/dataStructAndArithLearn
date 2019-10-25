namespace LinkedList {
    export class LinkedListClazz {
        public static reverse(header: LinkedListNode<number>): LinkedListNode<number> {
            if (!header || !header.next) {
                return header;
            }
            let prev: LinkedListNode<number> = null;
            let current: LinkedListNode<number> = header;
            while (current) {
                let nextNode: LinkedListNode<number> = current.next;
                current.next = prev;
                prev = current;
                current = nextNode;
            }
            return prev;

        }

        public static consoleNode(header: LinkedListNode<number>): void {
            let str: string = "";
            while (header) {
                str += header.data + "-->";
                header = header.next;
            }
            console.log(str);
        }

        public static consoleNodeInverted(tailer: LinkedListNode<number>): void {
            let str: string = "";
            while (tailer) {
                str += tailer.data + "-->";
                tailer = tailer.pre;
            }
            console.log(str);
        }



        public static createLinkedList(count: number): LinkedListNode<number> {
            let header: LinkedListNode<number> = null;
            let current: LinkedListNode<number> = null;
            for (let i = 1; i <= count; ++i) {
                let node = new LinkedListNode<number>(i);
                if (!header) {
                    header = node;
                } else {
                    current.next = node;
                }
                current = node;
            }
            return header;
        }

        public static createBothLinkedList(count: number): LinkedListNode<number> {
            let header: LinkedListNode<number> = null;
            let tailer: LinkedListNode<number> = null;
            for (let i = 1; i <= count; ++i) {
                let node = new LinkedListNode<number>(i);
                if (!header) {
                    header = node;
                    // tailer = node;
                } else {
                    tailer.next = node;
                    node.pre = tailer;
                }
                tailer = node;
            }
            return tailer;
        }

        public static test(count: number): void {
            let header: LinkedListNode<number> = LinkedListClazz.createLinkedList(count);
            LinkedListClazz.consoleNode(header);
            header = LinkedListClazz.reverse(header);
            LinkedListClazz.consoleNode(header);
        }

        public static test2(count: number): void {
            let tailer: LinkedListNode<number> = LinkedListClazz.createBothLinkedList(count);
            LinkedListClazz.consoleNodeInverted(tailer);
        }

        public static header: LinkedListNode<string> = null;
        public static linkedLength: number = 0;

        public static addCacheData(str: string): boolean {
            if (!LinkedListClazz.header) {
                LinkedListClazz.header = new LinkedListNode<string>(str);
                LinkedListClazz.linkedLength++;
                return true;
            }
            let pre: LinkedListNode<string> = null;
            let current: LinkedListNode<string> = LinkedListClazz.header;
            let isFindNode: boolean = false;
            while (current) {
                if (current.data === str) {
                    if (current === LinkedListClazz.header) {
                        LinkedListClazz.header = null;
                    } else {
                        pre.next = current.next;
                        current.next = null;
                    }
                    isFindNode = true;
                    break;
                } else {
                    pre = current;
                    current = current.next;
                }
            }
            if (isFindNode) {
                LinkedListClazz.insertHeader(str, LinkedListClazz.header);
            } else {
                if (LinkedListClazz.linkedLength === 10) {
                    LinkedListClazz.removeTailer(LinkedListClazz.header);
                } else {
                    LinkedListClazz.insertHeader(str, LinkedListClazz.header);
                    LinkedListClazz.linkedLength++;
                }

            }
        }

        public static insertHeader(str: string, header: LinkedListNode<string>): void {
            if (!header) {
                header = new LinkedListNode<string>(str);
            } else {
                let newNode = new LinkedListNode<string>(str);
                newNode.next = header.next;
                header.next = newNode;

            }
        }

        public static removeTailer(header: LinkedListNode<string>): void {
            if (!header || !header.next) {
                header = null;
                return;
            }
            let current = header;
            while (true) {
                if (!current.next.next) {
                    current.next = null;
                    break;
                } else {
                    current = current.next;
                }
            }
        }

    }

    export class LinkedListNode<T>{
        public data: T;
        public pre: LinkedListNode<T>;
        public next: LinkedListNode<T>;

        public constructor(data?: T) {
            this.data = data;
        }
    }

}