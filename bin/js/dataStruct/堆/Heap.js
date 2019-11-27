var heap;
(function (heap) {
    var Heap = (function () {
        function Heap(capacity) {
            this.arr = new Array(capacity + 1);
            this.count = 0;
            this.capacity = capacity;
        }
        Heap.prototype.swap = function (arr, index1, index2) {
            if (index1 !== index2) {
                var temp = arr[index1];
                arr[index1] = arr[index2];
                arr[index2] = temp;
            }
        };
        Heap.prototype.insert = function (data) {
            if (this.count === this.capacity) {
                return false;
            }
            this.count++;
            this.arr[this.count] = data;
            var i = this.count;
            while (Math.floor(i / 2) > 0 && this.arr[i] > this.arr[Math.floor(i / 2)]) {
                this.swap(this.arr, i, Math.floor(i / 2));
                i = Math.floor(i / 2);
            }
            return true;
        };
        Heap.prototype.removeMax = function () {
            if (this.count === 0) {
                return null;
            }
            var tempVal = this.arr[1];
            this.arr[1] = this.arr[this.count--];
            var i = 1;
            var maxI = i;
            while (true) {
                if (i * 2 <= this.count && this.arr[maxI] < this.arr[i * 2]) {
                    maxI = i * 2;
                }
                if (i * 2 + 1 <= this.count && this.arr[maxI] < this.arr[i * 2 + 1]) {
                    maxI = i * 2 + 1;
                }
                if (maxI === i) {
                    break;
                }
                this.swap(this.arr, i, maxI);
                i = maxI;
            }
            return tempVal;
        };
        return Heap;
    }());
    heap.Heap = Heap;
})(heap || (heap = {}));
