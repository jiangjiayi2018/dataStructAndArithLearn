namespace util {
    export class SortClazz {

        /**数组交换函数*/
        public static swapVal(arr: number[], index1: number, index2: number) {
            if (index1 === index2 || index1 < 0 || index2 < 0 || index1 > arr.length - 1 || index2 > arr.length - 1) {
                return;
            }
            let temp = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = temp;

        }

        public static quickSort(arr: number[]): void {
            let leng = arr.length;
            if (leng <= 1) {
                return;
            }
            SortClazz.quickSortHandle(arr, 0, leng - 1);

            console.log(arr);

        }

        public static quickSortHandle(arr: number[], beginIndex: number, endIndex: number): void {
            if (beginIndex >= endIndex) {
                return;
            }
            let index = SortClazz.partitionHandle(arr, beginIndex, endIndex);
            SortClazz.quickSortHandle(arr, beginIndex, index - 1);
            SortClazz.quickSortHandle(arr, index + 1, endIndex);

        }

        public static partitionHandle(arr: number[], beginIndex: number, endIndex: number): number {
            let val = arr[endIndex];
            let i = beginIndex;
            let j = beginIndex;
            while (j <= endIndex - 1) {
                if (arr[j] < val) {
                    SortClazz.swapVal(arr, i++, j);
                }
                j++;
            }
            SortClazz.swapVal(arr, i, endIndex);
            return i;

        }

        public static mergeSort(arr: number[]): void {
            let leng = arr.length;
            if (leng <= 1) {
                return;
            }
            SortClazz.mergeSortHandle(arr, 0, leng - 1);

            console.log(arr);

        }

        public static mergeSortHandle(arr: number[], beginIndex: number, endIndex: number): void {
            if (beginIndex >= endIndex) {
                return;
            }
            let mid = Math.floor((beginIndex + endIndex) * 0.5);
            SortClazz.mergeSortHandle(arr, beginIndex, mid);
            SortClazz.mergeSortHandle(arr, mid + 1, endIndex);
            SortClazz.mergeArr(arr, beginIndex, mid, endIndex);
        }

        public static mergeArr(arr: number[], beginIndex: number, midIndex: number, endIndex: number): void {
            let i = beginIndex;
            let j = midIndex + 1;
            let tempArr = [];
            while (i <= midIndex && j <= endIndex) {
                if (arr[i] <= arr[j]) {
                    tempArr.push(arr[i++]);
                } else {
                    tempArr.push(arr[j++]);
                }
            }

            while (i <= midIndex) {
                tempArr.push(arr[i++]);
            }

            while (j <= endIndex) {
                tempArr.push(arr[j++]);
            }

            let flagIndex = beginIndex;
            while (tempArr.length > 0) {
                arr[flagIndex++] = tempArr.shift();
            }

        }

        public static selectSort(arr: number[]): void {
            let leng = arr.length;
            if (leng <= 1) {
                return;
            }

            for (let i = 0; i < leng - 1; ++i) {
                let minVal = arr[i];
                let minIndex = i;
                for (let j = i + 1; j < leng; ++j) {
                    if (arr[j] < minVal) {
                        minIndex = j;
                        minVal = arr[j];
                    }
                }
                SortClazz.swapVal(arr, i, minIndex);
            }

            console.log(arr);

        }

        public static insertSort(arr: number[]): void {
            let leng = arr.length;
            if (leng <= 1) {
                return;
            }

            for (let i = 1; i < leng; ++i) {
                let val = arr[i];
                let j = i - 1;
                for (; j >= 0; --j) {
                    if (arr[j] > val) {
                        arr[j + 1] = arr[j];
                    } else {
                        break;
                    }
                }
                arr[j + 1] = val;
            }
            console.log(arr);
        }

        public static bubbleSort(arr: number[]): void {
            let leng = arr.length;
            if (leng <= 1) {
                return;
            }

            let count = 0;

            let isSwap: boolean = false;
            for (let i = 0; i < leng - 1; ++i) {
                isSwap = false;
                for (let j = 0; j < leng - i; ++j) {
                    count++;
                    if (arr[j] > arr[j + 1]) {
                        SortClazz.swapVal(arr, j, j + 1);
                        isSwap = true;
                    }
                }
                if (!isSwap) {
                    break;
                }
            }

            console.log("交换次数；交换后的数组", count, arr);
        }


        public static optionCell: number[] = [1, 3, 5];
        public static storeVal: { [key: number]: number } = {};

        public static getMinCount(targetVal: number): number {
            let optionCell = SortClazz.optionCell;
            if (optionCell.indexOf(targetVal) >= 0) {
                return 1;
            }
            if (SortClazz.storeVal[targetVal]) {
                return SortClazz.storeVal[targetVal];
            }

            let minArr: number[] = [];
            for (let i = 0, leng = optionCell.length; i < leng; ++i) {
                let tempVal = targetVal - optionCell[i];
                if (tempVal > 0) {
                    minArr.push(SortClazz.getMinCount(tempVal));
                }
            }
            let minVal: number = targetVal;
            while (minArr.length > 0) {
                minVal = Math.min(minVal, minArr.pop());
            }
            SortClazz.storeVal[targetVal] = ++minVal;
            return minVal;
        }

        public static arr: number[] = [2, 3, 4, 5, 15, 14, 13];


        public static getMaxSupLength(arr: number[]): number {
            if (arr.length === 0) {
                return 0;
            }
            let maxLengthArr = [1];
            for (let i = 1, leng = arr.length; i < leng; ++i) {
                if (arr[i] >= arr[i - 1]) {
                    maxLengthArr[i] = maxLengthArr[i - 1] + 1;
                } else {
                    maxLengthArr[i] = maxLengthArr[i - 1];
                }
            }
            return maxLengthArr[maxLengthArr.length - 1];
        }











    }
}