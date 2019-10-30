namespace stack {
    export class Node<T> {
        public data: T;
        public next: Node<T>;

        public constructor(data?: T, next?: Node<T>) {
            this.data = data;
            this.next = next;
        }
    }

    export class StackBaseLinkedList<T> {
        private head: Node<T> = null;
        public length: number = 0;

        public constructor() {
            this.head = new Node<T>();
        }

        public push(data: T): void {
            let newNode = new Node<T>(data);
            newNode.next = this.head.next;
            this.head.next = newNode;
            ++this.length;
        }

        public pop(): T {
            let data: T = null;
            if (this.head.next) {
                data = this.head.next.data;
                this.head.next = this.head.next.next;
                --this.length;
            }
            return data;
        }

        public getTopData(): T{
            let data: T = null;
            if (this.head.next) {
                data = this.head.next.data;
            }
            return data;
        }

        public clear(): void {
            this.length = 0;
            this.head.next = null;
        }

    }


}