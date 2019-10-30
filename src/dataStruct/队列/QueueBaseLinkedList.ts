namespace queue {
    export class QueueBaseLinkedList<T>{
        private capacitySize: number;
        private head: LinkedList.LinkedListNode<T> = null;
        private tailer: LinkedList.LinkedListNode<T> = null;
        private size: number;

        public constructor(size: number) {
            this.capacitySize = size;
            this.size = 0;
        }

        public enqueue(data: T): boolean {
            if (this.size === this.capacitySize) {
                return false;
            }
            let node = new LinkedList.LinkedListNode<T>(data);
            if (this.size === 0) {
                this.head = this.tailer = node;
            } else {
                this.tailer.next = node;
                this.tailer = this.tailer.next;
            }
            return true;
        }

        public dequeue(): T{
            if(this.size === 0){
                return null;
            }
            let data = this.head.data;
            this.head = this.head.next;
            --this.size;
            return data;
        }
    }
}