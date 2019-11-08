namespace binarySearch {
    export class BinarySearch {

        public static binarySearch(arr: number[], num: number): number {
            let leng = arr.length;
            if (leng < 1) {
                return -1;
            }
            sort.sort.quickSort(arr);
            let low = 0;
            let high = leng - 1;
            let mid: number;
            while (low <= high) {
                mid = Math.floor(low + (high - low) / 2);
                if (num === arr[mid]) {
                    return mid;
                } else if (num < arr[mid]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }

            return -1;

        }

        public static binarySearch2(arr: number[], num: number): number {
            let leng = arr.length;
            if (leng < 1) {
                return -1;
            }
            sort.sort.quickSort(arr);
            return BinarySearch.binarySearch2Handle(arr, num, 0, leng - 1);
        }

        private static binarySearch2Handle(arr: number[], num: number, low: number, high: number): number {
            if (low > high) {
                return -1;
            }
            let mid = Math.floor(low + (high - low) / 2);
            if (arr[mid] === num) {
                return mid;
            } else if (num < arr[mid]) {
                return BinarySearch.binarySearch2Handle(arr, num, low, mid - 1);
            } else {
                return BinarySearch.binarySearch2Handle(arr, num, mid + 1, high);

            }

        }

        public static sqr(val: number, n: number): number {
            let pre: number;
            let low = 0;
            let high = val;
            let mid: number = (low + high) / 2;
            let count = 0;
            do {
                if (mid * mid > val) {
                    high = mid;
                } else {
                    low = mid;
                }
                pre = mid;
                mid = (low + high) / 2;
                count++;
            } while (Math.abs(pre - mid) > Math.pow(10, -n));
            console.log("********************", count);

            return Number(mid.toFixed(n));
        }


        /**第一个等于指定值的元素*/
        public static search1(arr: number[], val: number): number {
            let leng = arr.length;
            if (leng < 1) {
                return -1;
            }
            sort.sort.quickSort(arr);
            let low = 0;
            let high = leng - 1;
            let mid: number;
            while (low <= high) {
                mid = Math.floor(low + (high - low) / 2);
                if (val < arr[mid]) {
                    high = mid - 1;
                } else if (val > arr[mid]) {
                    low = mid + 1;
                } else {
                    if (mid === 0 || arr[mid - 1] !== val) {
                        return mid;
                    } else {
                        high = mid - 1;
                    }
                }
            }

            return -1;
        }


        public static search2(arr: number[], val: number): number {
            let leng = arr.length;
            if (leng < 1) {
                return -1;
            }
            let low = 0;
            let high = leng - 1;
            let mid: number;
            while (low <= high) {
                mid = Math.floor(low + (high - low) / 2);
                if (val < arr[mid]) {
                    high = mid - 1;
                } else if (val > arr[mid]) {
                    low = mid + 1;
                } else {
                    if (mid === leng - 1 || arr[mid + 1] !== val) {
                        return mid;
                    } else {
                        low = mid + 1;
                    }
                }
            }
            return -1;
        }


        public static search3(arr: number[], val: number): number {
            let leng = arr.length;
            if (leng < 1) {
                return -1;
            }
            let low = 0;
            let high = leng - 1;
            let mid: number;
            while (low <= high) {
                mid = Math.floor(low + (high - low) / 2);
                if (val <= arr[mid]) {
                    if (mid === 0 || arr[mid - 1] < val) {
                        return mid;
                    } else {
                        high = mid - 1;
                    }
                } else {
                    low = mid + 1;
                }
            }
            return -1;
        }

        public static search4(arr: number[], val: number): number {
            let leng = arr.length;
            if (leng < 1) {
                return -1;
            }
            let low = 0;
            let high = leng - 1;
            let mid: number;
            while (low <= high) {
                mid = Math.floor(low + (high - low) / 2);
                if (val < arr[mid]) {
                    high = mid - 1;
                } else {
                    if (mid === leng - 1 || arr[mid + 1] > val) {
                        return mid;
                    } else {
                        low = mid + 1;
                    }
                }
            }
            return -1;
        }













    }
}