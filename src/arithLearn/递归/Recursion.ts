namespace recursion {
    export class RecursionApply {

        // [5, 2, 3, 3, 1, 4, 2]
        public static isHas(superArr: number[], k: number): boolean {
            let sum = 0;
            for (let i = 0, leng = superArr.length; i < leng; ++i) {
                sum += superArr[i];
            }
            if (sum % k !== 0) {
                return false;
            }
            let targetVal = sum / k;
            let curVal = 0;
            let flagArr: boolean[] = [];
            return RecursionApply.help(superArr, k, targetVal, 0, 0, flagArr);

        }

        public static help(superArr: number[], k: number, targetVal: number, curVal: number, index: number, flagArr: boolean[]): boolean {
            if (k === 0) {
                return true;
            }
            if (curVal === targetVal) {
                return RecursionApply.help(superArr, k - 1, targetVal, 0, 0, flagArr);
            }
            for (let i = index, leng = superArr.length; i < leng; ++i) {
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
        }

        public static fabciObj: { [k: number]: number } = {};
        public static fabci(n): number {
            if (n === 0) {
                return 0;
            }
            if (n === 1) {
                return 1;
            }
            if (RecursionApply.fabciObj[n]) {
                return RecursionApply.fabciObj[n];
            }
            let val = RecursionApply.fabci(n - 1) + RecursionApply.fabci(n - 2);
            RecursionApply.fabciObj[n] = val;
            return val;

        }

        public static jieCheng(n: number): number {
            if (n === 1) {
                return 1;
            }
            return RecursionApply.jieCheng(n - 1) * n;
        }

        public static quanPai(arr: number[]): void {
            if (arr.length > 0) {
                RecursionApply.permutation(arr, 0, arr.length);
            }
        }

        public static permutation(arr: number[], index: number, leng: number): void {
            if (index + 1 === leng) {
                console.log(arr.join(""));
                return;
            }
            for (let i = index; i < leng; ++i) {
                RecursionApply.swap(arr, index, i);
                RecursionApply.permutation(arr, index + 1, leng);
                RecursionApply.swap(arr, index, i);
            }
        }

        public static swap(arr: number[], a: number, b: number) {
            if (a !== b) {
                let temp = arr[a];
                arr[a] = arr[b];
                arr[b] = temp;
            }
        }

    }
}