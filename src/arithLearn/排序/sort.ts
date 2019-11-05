namespace sort{
    export class sort{
        public static bubbleSort(arr: number[]): void{
            let leng = arr.length;
            if(leng <= 1){
                return;
            }
            let falg: boolean = false;
            for(let i = 0; i < leng; ++i){
                falg = false;
                for(let j = 0; j < leng - i - 1; ++j){
                    if(arr[j] > arr[j + 1]){
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                        falg = true;
                    }
                }
                if(!falg){
                    break;
                }
            }
        }



        public static insertSort(arr: number[]): void{
            let leng = arr.length;
            if(leng <= 1){
                return;
            }
            for(let i = 1; i < leng; ++i){
                let val = arr[i];
                let j = i - 1;
                while (j >= 0) {
                    if(arr[j] > val){
                        arr[j + 1] = arr[j];
                        --j;
                    }else{
                        break;
                    }
                }
                arr[j + 1] = val;
            }
        }

        public static selectSort(arr: number[]): void{
            let leng = arr.length;
            if(leng <= 1){
                return;
            }
            for(let i = 0; i < leng; ++i){
                let minIndex = i;
                let minVal = arr[i];
                for(let j = i + 1; j < leng; ++j){
                    if(arr[j] < minVal){
                        minIndex = j;
                    }
                }
                let temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }

        public static mergeSort(arr: number[]): void{
            let leng = arr.length;
            if(leng <= 1){
                return;
            }
            sort.mergeSortHandle(arr, 0, leng - 1);
            console.log(arr);
        }

        private static mergeSortHandle(arr: number[], head: number, tailer: number): void{
            if(head >= tailer){
                return;
            }
            let mid = Math.floor((head + tailer) / 2);
            sort.mergeSortHandle(arr, head, mid);
            sort.mergeSortHandle(arr, mid + 1, tailer);
            sort.mergeArr(arr, head, mid, tailer);

        }

        private static mergeArr(arr: number[], head: number, mid: number, tailer: number): void{
            let tempArr = [];
            let i = head;
            let j = mid + 1;
            while (i <= mid && j <= tailer) {
                if(arr[i] <= arr[j]){
                    tempArr.push(arr[i]);
                    ++i;
                }else{
                    tempArr.push(arr[j]);
                    ++j;
                }
            }
            
            while (i <= mid) {
                tempArr.push(arr[i]);
                    ++i;
            }

            while(j <= tailer){
                tempArr.push(arr[j]);
                    ++j;
            }

            for(let k = 0, leng = tempArr.length; k < leng; ++k){
                arr[head + k] = tempArr[k];
            }
        }

        // [8,7,4,5,3,1,7,4,5,4]
        public static quickSort(arr: number[]): void{
            let leng = arr.length;
            if(leng <= 1){
                return;
            }
            sort.quickSortHandle(arr, 0, leng - 1);
            console.log(arr);
        }

        public static quickSortHandle(arr: number[], head: number, tailer: number){
            if(head >= tailer){
                return;
            }
            let pivotIndex = sort.partition(arr, head, tailer);
            sort.quickSortHandle(arr, head, pivotIndex - 1);
            sort.quickSortHandle(arr, pivotIndex + 1, tailer);
        }


        public static partition(arr: number[], head: number, tailer: number): number{
            let val = arr[tailer];
            let p = head;
            for(let i = head; i <= tailer - 1; ++i){
                if(arr[i] < val){
                    sort.swapArr(arr, i, p);
                    ++p;
                }
            }
            sort.swapArr(arr, p, tailer);
            return p;
        }

        public static swapArr(arr: number[], a: number, b: number){
            if(a !== b){
                let temp = arr[a];
                arr[a] = arr[b];
                arr[b] = temp;
            }
        }


        public static countingSort(arr: number[]): void{
            let leng = arr.length;
            let maxVal = arr[0];
            for(let i = 0; i < leng; ++i){
                if(arr[i] > maxVal){
                    maxVal = arr[i];
                }
            }

            // [8,7,4,5,3,1,7,4,5,4]
            let countArr = new Array(maxVal + 1);
            for(let i = 0; i < maxVal + 1; ++i){
                countArr[i] = 0;
            }

            for(let i = 0; i < leng; ++i){
                countArr[arr[i]] += 1;
            }

            for(let i = 1; i < maxVal + 1; ++i){
                countArr[i] += countArr[i - 1];
            }

            let tempArr = [];
            //为了保证排序算法的稳定性，从后往前扫描数据
            for(let i = leng - 1; i >= 0; --i){
            // for(let i = 0; i < leng; ++i){
                tempArr[countArr[arr[i]] - 1] = arr[i];
                --countArr[arr[i]];
            }
            arr = tempArr;
            console.log(arr);


        }

        // [16215074959, 18702954274, 17683826597, 13264822472, 13510817193, 16520079950, 17079250692]


        public static radixSort(phoneNumberArr: number[]): void{
            let leng = phoneNumberArr.length;
            let phoneLeng = (phoneNumberArr[0] + "").length;
            let tempArr: number[] = phoneNumberArr;
            for(let i = phoneLeng - 1; i >= 0; --i){
                tempArr = sort.radixSortHelp(tempArr, i, leng);
            }
            phoneNumberArr = tempArr;
            console.log(phoneNumberArr);

        }


        public static radixSortHelp(arr: number[], sortIndex: number, arrLeng: number): number[]{
            let tempArr1 = new Array(11);
            let tempArr2 = [];
            for(let i = 0; i < 11; ++i){
                tempArr1[i] = 0;
            }

            for(let i = 0; i < arrLeng; ++i){
                let subIndex = Number((arr[i] + "").charAt(sortIndex));
                tempArr1[subIndex] += 1;
            }

            for(let i = 1; i < 11; ++i){
                tempArr1[i] += tempArr1[i - 1];
            }

            for(let i = arrLeng - 1; i >= 0; --i){
                let subIndex = Number((arr[i] + "").charAt(sortIndex));
                tempArr2[tempArr1[subIndex] - 1] = arr[i];
                tempArr1[subIndex]--;
            }

            return tempArr2;
        }



















    }
}