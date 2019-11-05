var sort;
(function (sort_1) {
    var sort = (function () {
        function sort() {
        }
        sort.bubbleSort = function (arr) {
            var leng = arr.length;
            if (leng <= 1) {
                return;
            }
            var falg = false;
            for (var i = 0; i < leng; ++i) {
                falg = false;
                for (var j = 0; j < leng - i - 1; ++j) {
                    if (arr[j] > arr[j + 1]) {
                        var temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                        falg = true;
                    }
                }
                if (!falg) {
                    break;
                }
            }
        };
        sort.insertSort = function (arr) {
            var leng = arr.length;
            if (leng <= 1) {
                return;
            }
            for (var i = 1; i < leng; ++i) {
                var val = arr[i];
                var j = i - 1;
                while (j >= 0) {
                    if (arr[j] > val) {
                        arr[j + 1] = arr[j];
                        --j;
                    }
                    else {
                        break;
                    }
                }
                arr[j + 1] = val;
            }
        };
        sort.selectSort = function (arr) {
            var leng = arr.length;
            if (leng <= 1) {
                return;
            }
            for (var i = 0; i < leng; ++i) {
                var minIndex = i;
                var minVal = arr[i];
                for (var j = i + 1; j < leng; ++j) {
                    if (arr[j] < minVal) {
                        minIndex = j;
                    }
                }
                var temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        };
        sort.mergeSort = function (arr) {
            var leng = arr.length;
            if (leng <= 1) {
                return;
            }
            sort.mergeSortHandle(arr, 0, leng - 1);
            console.log(arr);
        };
        sort.mergeSortHandle = function (arr, head, tailer) {
            if (head >= tailer) {
                return;
            }
            var mid = Math.floor((head + tailer) / 2);
            sort.mergeSortHandle(arr, head, mid);
            sort.mergeSortHandle(arr, mid + 1, tailer);
            sort.mergeArr(arr, head, mid, tailer);
        };
        sort.mergeArr = function (arr, head, mid, tailer) {
            var tempArr = [];
            var i = head;
            var j = mid + 1;
            while (i <= mid && j <= tailer) {
                if (arr[i] <= arr[j]) {
                    tempArr.push(arr[i]);
                    ++i;
                }
                else {
                    tempArr.push(arr[j]);
                    ++j;
                }
            }
            while (i <= mid) {
                tempArr.push(arr[i]);
                ++i;
            }
            while (j <= tailer) {
                tempArr.push(arr[j]);
                ++j;
            }
            for (var k = 0, leng = tempArr.length; k < leng; ++k) {
                arr[head + k] = tempArr[k];
            }
        };
        // [8,7,4,5,3,1,7,4,5,4]
        sort.quickSort = function (arr) {
            var leng = arr.length;
            if (leng <= 1) {
                return;
            }
            sort.quickSortHandle(arr, 0, leng - 1);
            console.log(arr);
        };
        sort.quickSortHandle = function (arr, head, tailer) {
            if (head >= tailer) {
                return;
            }
            var pivotIndex = sort.partition(arr, head, tailer);
            sort.quickSortHandle(arr, head, pivotIndex - 1);
            sort.quickSortHandle(arr, pivotIndex + 1, tailer);
        };
        sort.partition = function (arr, head, tailer) {
            var val = arr[tailer];
            var p = head;
            for (var i = head; i <= tailer - 1; ++i) {
                if (arr[i] < val) {
                    sort.swapArr(arr, i, p);
                    ++p;
                }
            }
            sort.swapArr(arr, p, tailer);
            return p;
        };
        sort.swapArr = function (arr, a, b) {
            if (a !== b) {
                var temp = arr[a];
                arr[a] = arr[b];
                arr[b] = temp;
            }
        };
        sort.countingSort = function (arr) {
            var leng = arr.length;
            var maxVal = arr[0];
            for (var i = 0; i < leng; ++i) {
                if (arr[i] > maxVal) {
                    maxVal = arr[i];
                }
            }
            // [8,7,4,5,3,1,7,4,5,4]
            var countArr = new Array(maxVal + 1);
            for (var i = 0; i < maxVal + 1; ++i) {
                countArr[i] = 0;
            }
            for (var i = 0; i < leng; ++i) {
                countArr[arr[i]] += 1;
            }
            for (var i = 1; i < maxVal + 1; ++i) {
                countArr[i] += countArr[i - 1];
            }
            var tempArr = [];
            //为了保证排序算法的稳定性，从后往前扫描数据
            for (var i = leng - 1; i >= 0; --i) {
                // for(let i = 0; i < leng; ++i){
                tempArr[countArr[arr[i]] - 1] = arr[i];
                --countArr[arr[i]];
            }
            arr = tempArr;
            console.log(arr);
        };
        // [16215074959, 18702954274, 17683826597, 13264822472, 13510817193, 16520079950, 17079250692]
        sort.radixSort = function (phoneNumberArr) {
            var leng = phoneNumberArr.length;
            var phoneLeng = (phoneNumberArr[0] + "").length;
            var tempArr = phoneNumberArr;
            for (var i = phoneLeng - 1; i >= 0; --i) {
                tempArr = sort.radixSortHelp(tempArr, i, leng);
            }
            phoneNumberArr = tempArr;
            console.log(phoneNumberArr);
        };
        sort.radixSortHelp = function (arr, sortIndex, arrLeng) {
            var tempArr1 = new Array(11);
            var tempArr2 = [];
            for (var i = 0; i < 11; ++i) {
                tempArr1[i] = 0;
            }
            for (var i = 0; i < arrLeng; ++i) {
                var subIndex = Number((arr[i] + "").charAt(sortIndex));
                tempArr1[subIndex] += 1;
            }
            for (var i = 1; i < 11; ++i) {
                tempArr1[i] += tempArr1[i - 1];
            }
            for (var i = arrLeng - 1; i >= 0; --i) {
                var subIndex = Number((arr[i] + "").charAt(sortIndex));
                tempArr2[tempArr1[subIndex] - 1] = arr[i];
                tempArr1[subIndex]--;
            }
            return tempArr2;
        };
        return sort;
    }());
    sort_1.sort = sort;
})(sort || (sort = {}));
