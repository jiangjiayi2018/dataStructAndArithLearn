var binarySearch;
(function (binarySearch) {
    var BinarySearch = (function () {
        function BinarySearch() {
        }
        BinarySearch.binarySearch = function (arr, num) {
            var leng = arr.length;
            if (leng < 1) {
                return -1;
            }
            sort.sort.quickSort(arr);
            var low = 0;
            var high = leng - 1;
            var mid;
            while (low <= high) {
                mid = Math.floor(low + (high - low) / 2);
                if (num === arr[mid]) {
                    return mid;
                }
                else if (num < arr[mid]) {
                    high = mid - 1;
                }
                else {
                    low = mid + 1;
                }
            }
            return -1;
        };
        BinarySearch.binarySearch2 = function (arr, num) {
            var leng = arr.length;
            if (leng < 1) {
                return -1;
            }
            sort.sort.quickSort(arr);
            return BinarySearch.binarySearch2Handle(arr, num, 0, leng - 1);
        };
        BinarySearch.binarySearch2Handle = function (arr, num, low, high) {
            if (low > high) {
                return -1;
            }
            var mid = Math.floor(low + (high - low) / 2);
            if (arr[mid] === num) {
                return mid;
            }
            else if (num < arr[mid]) {
                return BinarySearch.binarySearch2Handle(arr, num, low, mid - 1);
            }
            else {
                return BinarySearch.binarySearch2Handle(arr, num, mid + 1, high);
            }
        };
        BinarySearch.sqr = function (val, n) {
            var pre;
            var low = 0;
            var high = val;
            var mid = (low + high) / 2;
            var count = 0;
            do {
                if (mid * mid > val) {
                    high = mid;
                }
                else {
                    low = mid;
                }
                pre = mid;
                mid = (low + high) / 2;
                count++;
            } while (Math.abs(pre - mid) > Math.pow(10, -n));
            console.log("********************", count);
            return Number(mid.toFixed(n));
        };
        return BinarySearch;
    }());
    binarySearch.BinarySearch = BinarySearch;
})(binarySearch || (binarySearch = {}));
