namespace queue{
    export class QueueBaseArray<T>{
        public capacitySize: number;
        private capacity: T[] = null;
        private head: number;
        private tailer: number;

        public constructor(size: number){
            this.capacitySize = size;
            this.capacity = new Array<T>(size);
            this.head = this.tailer = 0;
        }

        public enqueue(data: T): boolean{
            /**队列已满*/
            if((this.tailer + 1) % this.capacitySize === this.head){
                return false;
            }
            this.capacity[this.tailer] = data;
            this.tailer = (this.tailer + 1) % this.capacitySize;
            return true;
        }

        public dequeue(): T{
            /**队列为空*/
            if(this.head === this.tailer){
                return null;
            }
            let data = this.capacity[this.head];
            this.head = (this.head + 1) % this.capacitySize;
            return data;
        }
    }
}