var util;
(function (util) {
    var SortClazz = (function () {
        function SortClazz() {
        }
        /**数组交换函数*/
        SortClazz.swapVal = function (arr, index1, index2) {
            if (index1 === index2 || index1 < 0 || index2 < 0 || index1 > arr.length - 1 || index2 > arr.length - 1) {
                return;
            }
            var temp = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = temp;
        };
        SortClazz.quickSort = function (arr) {
            var leng = arr.length;
            if (leng <= 1) {
                return;
            }
            SortClazz.quickSortHandle(arr, 0, leng - 1);
            console.log(arr);
        };
        SortClazz.quickSortHandle = function (arr, beginIndex, endIndex) {
            if (beginIndex >= endIndex) {
                return;
            }
            var index = SortClazz.partitionHandle(arr, beginIndex, endIndex);
            SortClazz.quickSortHandle(arr, beginIndex, index - 1);
            SortClazz.quickSortHandle(arr, index + 1, endIndex);
        };
        SortClazz.partitionHandle = function (arr, beginIndex, endIndex) {
            var val = arr[endIndex];
            var i = beginIndex;
            var j = beginIndex;
            while (j <= endIndex - 1) {
                if (arr[j] < val) {
                    SortClazz.swapVal(arr, i++, j);
                }
                j++;
            }
            SortClazz.swapVal(arr, i, endIndex);
            return i;
        };
        SortClazz.mergeSort = function (arr) {
            var leng = arr.length;
            if (leng <= 1) {
                return;
            }
            SortClazz.mergeSortHandle(arr, 0, leng - 1);
            console.log(arr);
        };
        SortClazz.mergeSortHandle = function (arr, beginIndex, endIndex) {
            if (beginIndex >= endIndex) {
                return;
            }
            var mid = Math.floor((beginIndex + endIndex) * 0.5);
            SortClazz.mergeSortHandle(arr, beginIndex, mid);
            SortClazz.mergeSortHandle(arr, mid + 1, endIndex);
            SortClazz.mergeArr(arr, beginIndex, mid, endIndex);
        };
        SortClazz.mergeArr = function (arr, beginIndex, midIndex, endIndex) {
            var i = beginIndex;
            var j = midIndex + 1;
            var tempArr = [];
            while (i <= midIndex && j <= endIndex) {
                if (arr[i] <= arr[j]) {
                    tempArr.push(arr[i++]);
                }
                else {
                    tempArr.push(arr[j++]);
                }
            }
            while (i <= midIndex) {
                tempArr.push(arr[i++]);
            }
            while (j <= endIndex) {
                tempArr.push(arr[j++]);
            }
            var flagIndex = beginIndex;
            while (tempArr.length > 0) {
                arr[flagIndex++] = tempArr.shift();
            }
        };
        SortClazz.selectSort = function (arr) {
            var leng = arr.length;
            if (leng <= 1) {
                return;
            }
            for (var i = 0; i < leng - 1; ++i) {
                var minVal = arr[i];
                var minIndex = i;
                for (var j = i + 1; j < leng; ++j) {
                    if (arr[j] < minVal) {
                        minIndex = j;
                        minVal = arr[j];
                    }
                }
                SortClazz.swapVal(arr, i, minIndex);
            }
            console.log(arr);
        };
        SortClazz.insertSort = function (arr) {
            var leng = arr.length;
            if (leng <= 1) {
                return;
            }
            for (var i = 1; i < leng; ++i) {
                var val = arr[i];
                var j = i - 1;
                for (; j >= 0; --j) {
                    if (arr[j] > val) {
                        arr[j + 1] = arr[j];
                    }
                    else {
                        break;
                    }
                }
                arr[j + 1] = val;
            }
            console.log(arr);
        };
        SortClazz.bubbleSort = function (arr) {
            var leng = arr.length;
            if (leng <= 1) {
                return;
            }
            var count = 0;
            var isSwap = false;
            for (var i = 0; i < leng - 1; ++i) {
                isSwap = false;
                for (var j = 0; j < leng - i; ++j) {
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
        };
        SortClazz.getMinCount = function (targetVal) {
            var optionCell = SortClazz.optionCell;
            if (optionCell.indexOf(targetVal) >= 0) {
                return 1;
            }
            if (SortClazz.storeVal[targetVal]) {
                return SortClazz.storeVal[targetVal];
            }
            var minArr = [];
            for (var i = 0, leng = optionCell.length; i < leng; ++i) {
                var tempVal = targetVal - optionCell[i];
                if (tempVal > 0) {
                    minArr.push(SortClazz.getMinCount(tempVal));
                }
            }
            var minVal = targetVal;
            while (minArr.length > 0) {
                minVal = Math.min(minVal, minArr.pop());
            }
            SortClazz.storeVal[targetVal] = ++minVal;
            return minVal;
        };
        SortClazz.getMaxSupLength = function (arr) {
            if (arr.length === 0) {
                return 0;
            }
            var maxLengthArr = [1];
            for (var i = 1, leng = arr.length; i < leng; ++i) {
                if (arr[i] >= arr[i - 1]) {
                    maxLengthArr[i] = maxLengthArr[i - 1] + 1;
                }
                else {
                    maxLengthArr[i] = maxLengthArr[i - 1];
                }
            }
            return maxLengthArr[maxLengthArr.length - 1];
        };
        return SortClazz;
    }());
    SortClazz.optionCell = [1, 3, 5];
    SortClazz.storeVal = {};
    SortClazz.arr = [2, 3, 4, 5, 15, 14, 13];
    util.SortClazz = SortClazz;
})(util || (util = {}));
