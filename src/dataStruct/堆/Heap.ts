namespace heap {
    export class Heap {
        private arr: number[];
        private count: number;
        private capacity: number;

        public constructor(capacity: number) {
            this.arr = new Array<number>(capacity + 1);
            this.count = 0;
            this.capacity = capacity;
        }

        private swap(arr: number[], index1: number, index2: number): void {
            if (index1 !== index2) {
                let temp = arr[index1];
                arr[index1] = arr[index2];
                arr[index2] = temp;
            }
        }

        public insert(data: number): boolean {
            if (this.count === this.capacity) {
                return false;
            }
            this.count++;
            this.arr[this.count] = data;
            let i = this.count;
            while (Math.floor(i / 2) > 0 && this.arr[i] > this.arr[Math.floor(i / 2)]) {
                this.swap(this.arr, i, Math.floor(i / 2));
                i = Math.floor(i / 2);
            }
            return true;
        }

        public removeMax(): number {
            if (this.count === 0) {
                return null;
            }
            let tempVal = this.arr[1];
            this.arr[1] = this.arr[this.count--];
            let i = 1;
            let maxI = i;
            while (true) {
                if (i * 2 <= this.count && this.arr[maxI] < this.arr[i * 2]) {
                    maxI = i * 2;
                }
                if (i * 2 + 1 <= this.count && this.arr[maxI] < this.arr[i * 2 + 1]) {
                    maxI = i * 2 + 1;
                }
                if(maxI === i){
                    break;
                }
                this.swap(this.arr, i, maxI);
                i = maxI;
            }

            return tempVal;

        }
    }
}