var recursion;
(function (recursion) {
    var RecursionApply = (function () {
        function RecursionApply() {
        }
        // [5, 2, 3, 3, 1, 4, 2]
        RecursionApply.isHas = function (superArr, k) {
            var sum = 0;
            for (var i = 0, leng = superArr.length; i < leng; ++i) {
                sum += superArr[i];
            }
            if (sum % k !== 0) {
                return false;
            }
            var targetVal = sum / k;
            var curVal = 0;
            var flagArr = [];
            return RecursionApply.help(superArr, k, targetVal, 0, 0, flagArr);
        };
        RecursionApply.help = function (superArr, k, targetVal, curVal, index, flagArr) {
            if (k === 0) {
                return true;
            }
            if (curVal === targetVal) {
                return RecursionApply.help(superArr, k - 1, targetVal, 0, 0, flagArr);
            }
            for (var i = index, leng = superArr.length; i < leng; ++i) {
                if (flagArr[i]) {
                    continue;
                }
                flagArr[i] = true;
                if (curVal + superArr[i] <= targetVal && RecursionApply.help(superArr, k, targetVal, curVal + superArr[i], i + 1, flagArr)) {
                    return true;
                }
                flagArr[i] = false;
            }
            return false;
        };
        RecursionApply.fabci = function (n) {
            if (n === 0) {
                return 0;
            }
            if (n === 1) {
                return 1;
            }
            if (RecursionApply.fabciObj[n]) {
                return RecursionApply.fabciObj[n];
            }
            var val = RecursionApply.fabci(n - 1) + RecursionApply.fabci(n - 2);
            RecursionApply.fabciObj[n] = val;
            return val;
        };
        RecursionApply.jieCheng = function (n) {
            if (n === 1) {
                return 1;
            }
            return RecursionApply.jieCheng(n - 1) * n;
        };
        RecursionApply.quanPai = function (arr) {
            if (arr.length > 0) {
                RecursionApply.permutation(arr, 0, arr.length);
            }
        };
        RecursionApply.permutation = function (arr, index, leng) {
            if (index + 1 === leng) {
                console.log(arr.join(""));
                return;
            }
            for (var i = index; i < leng; ++i) {
                RecursionApply.swap(arr, index, i);
                RecursionApply.permutation(arr, index + 1, leng);
                RecursionApply.swap(arr, index, i);
            }
        };
        RecursionApply.swap = function (arr, a, b) {
            if (a !== b) {
                var temp = arr[a];
                arr[a] = arr[b];
                arr[b] = temp;
            }
        };
        return RecursionApply;
    }());
    RecursionApply.fabciObj = {};
    recursion.RecursionApply = RecursionApply;
})(recursion || (recursion = {}));
