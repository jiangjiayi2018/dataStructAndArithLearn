import test = ui.test.TestPageUI;
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import WebGL = Laya.WebGL;

class TestUI extends ui.test.TestPageUI {

	constructor() {
		super();
		//btn是编辑器界面设定的，代码里面能直接使用，并且有代码提示
		this.btn.on(Laya.Event.CLICK, this, this.onBtnClick);
		this.btn2.on(Laya.Event.CLICK, this, this.testFun);
		[4, 5, 13, 3, 2, 1, 4, 8, 6, 3, 2, 1]
	}

	public static mergeSort(arr: number[]): void {
		TestUI.mergeSortHandle(arr, 0, arr.length - 1);
		console.log(arr);
	}

	public static mergeSortHandle(arr: number[], beginIndex: number, endIndex: number): void {
		if (beginIndex >= endIndex) {
			return;
		}
		let mid = Math.floor((beginIndex + endIndex) * 0.5);
		TestUI.mergeSortHandle(arr, beginIndex, mid);
		TestUI.mergeSortHandle(arr, mid + 1, endIndex);
		TestUI.mergeArr(arr, beginIndex, mid, endIndex);

	}

	public static mergeArr(arr: number[], beginIndex: number, mid: number, endIndex: number): void {
		let tempArr: number[] = [];
		let i = beginIndex;
		let j = mid + 1;
		while (i <= mid && j <= endIndex) {
			if (arr[i] <= arr[j]) {
				tempArr.push(arr[i++]);
			} else {
				tempArr.push(arr[j++]);
			}
		}

		while (i <= mid) {
			tempArr.push(arr[i++]);
		}

		while (j <= endIndex) {
			tempArr.push(arr[j++]);
		}

		for (let k = beginIndex; k <= endIndex; ++k) {
			arr[k] = tempArr.shift();
		}

	}

	public static quickSort(arr: number[]): void {
		TestUI.quickSortHandle(arr, 0, arr.length - 1);
		console.log(arr);
	}

	public static quickSortHandle(arr: number[], beginIndex: number, endIndex: number): void {
		if (beginIndex >= endIndex) {
			return;
		}
		let pivote: number = TestUI.partition(arr, beginIndex, endIndex);
		TestUI.quickSortHandle(arr, beginIndex, pivote - 1);
		TestUI.quickSortHandle(arr, pivote + 1, endIndex);
	}

	public static findRankIndexNumber(arr: number[], rankIndex: number): number {
		if (rankIndex < 0 || rankIndex > arr.length - 1) {
			return;
		}
		return TestUI.findRankIndexNumberHandle(arr, rankIndex, 0, arr.length - 1);
	}

	public static findRankIndexNumberHandle(arr: number[], rankIndex: number, beginIndex: number, endIndex: number): number {
		let pivote: number = TestUI.partition(arr, beginIndex, endIndex);
		if (pivote + 1 === rankIndex) {
			return arr[pivote];
		} else if (rankIndex > pivote + 1) {
			return TestUI.findRankIndexNumberHandle(arr, rankIndex, pivote + 1, endIndex);
		} else {
			return TestUI.findRankIndexNumberHandle(arr, rankIndex, beginIndex, pivote - 1);

		}
	}


	public static partition(arr: number[], beginIndex: number, endIndex: number): number {
		let standardVal = arr[endIndex];
		let i = beginIndex;
		let j = beginIndex;
		for (; j < endIndex; ++j) {
			if (arr[j] < standardVal) {
				TestUI.swapVal(arr, i, j);
				++i;
			}
		}
		TestUI.swapVal(arr, i, endIndex);
		return i;
	}

	public static swapVal(arr: number[], index1: number, index2: number): void {
		if (index1 === index2) {
			return;
		}
		let temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	}

	public static bubbleSort(arr: number[]): number[] {
		let leng = arr.length;
		if (leng <= 1) {
			return arr;
		}
		for (let i = 0; i < leng; ++i) {
			let flag: boolean = false;
			for (let j = 0; j < leng - i - 1; ++j) {
				if (arr[j] > arr[j + 1]) {
					let temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
					flag = true;
				}
			}
			if (!flag) {
				break;
			}
		}
		return arr;

	}

	public static insertSort(arr: number[]): number[] {
		let leng = arr.length;
		if (leng <= 1) {
			return arr;
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
		return arr;
	}

	public static selectSort(arr: number[]): number[] {
		let leng = arr.length;
		if (leng <= 1) {
			return arr;
		}
		for (let i = 0; i < leng; ++i) {
			let min = arr[i];
			let minIndex = i;
			for (let j = i + 1; j < leng; ++j) {
				if (arr[j] < min) {
					min = arr[j];
					minIndex = j;
				}
			}
			if (minIndex !== i) {
				let temp = arr[i];
				arr[i] = min;
				arr[minIndex] = temp;
			}
		}
		return arr;
	}

	public static countingSort(arr: number[]): number[] {
		let countArr: number[] = [];
		let sortArr: number[] = [];
		for (let i = 0, leng = arr.length; i < leng; ++i) {
			if (!countArr[arr[i]]) {
				countArr[arr[i]] = 1;
			} else {
				countArr[arr[i]] += 1;
			}
		}
		console.log("countArr---------", countArr);

		for (let i = 0, leng = countArr.length; i < leng; ++i) {
			if (!countArr[i]) {
				countArr[i] = 0;
			}
			if (i > 0) {
				countArr[i] += countArr[i - 1];
			}
		}
		console.log("countArr---------", countArr);

		for (let i = arr.length - 1; i >= 0; --i) {
			sortArr[countArr[arr[i]] - 1] = arr[i];
			countArr[arr[i]] -= 1;
		}

		return sortArr;

	}

	public static insertSort2(arr: number[]): void {
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
	}

	public static mergeSort2(arr: number[]): void {
		let leng = arr.length;
		if (leng <= 1) {
			return;
		}
		TestUI.mergeSortHandle2(arr, 0, leng - 1);
	}

	public static mergeSortHandle2(arr: number[], beginIndex: number, endIndex: number): void {
		if (beginIndex >= endIndex) {
			return;
		}
		let mid = Math.floor((beginIndex + endIndex) * 0.5);
		TestUI.mergeSortHandle2(arr, beginIndex, mid);
		TestUI.mergeSortHandle2(arr, mid + 1, endIndex);
		TestUI.mergeArr2(arr, beginIndex, mid, endIndex);
	}

	public static mergeArr2(arr: number[], beginIndex: number, mid: number, endIndex: number): void {
		let temp: number[] = [];
		let i = beginIndex;
		let j = mid + 1;
		while (i <= mid && j <= endIndex) {
			if (arr[i] <= arr[j]) {
				temp.push(arr[i++]);
			} else {
				temp.push(arr[j++]);
			}
		}

		while (i <= mid) {
			temp.push(arr[i++]);
		}

		while (j <= endIndex) {
			temp.push(arr[j++]);
		}

		let flagIndex = beginIndex;
		while (temp.length > 0) {
			arr[flagIndex++] = temp.shift();
		}

	}

	public static quickSort2(arr: number[]): void {
		let leng = arr.length;
		if (leng <= 1) {
			return;
		}
		TestUI.quickSortHandle2(arr, 0, leng - 1);
	}

	public static quickSortHandle2(arr: number[], beginIndex: number, endIndex: number): void {
		if (beginIndex >= endIndex) {
			return;
		}
		let pivote = TestUI.partition2(arr, beginIndex, endIndex);
		TestUI.quickSortHandle2(arr, beginIndex, pivote - 1);
		TestUI.quickSortHandle2(arr, pivote + 1, endIndex);
	}

	public static partition2(arr: number[], beginIndex: number, endIndex: number): number {
		let partVal = arr[endIndex];
		let i = beginIndex;
		let j = beginIndex;
		while (j <= endIndex - 1) {
			if (arr[j] < partVal) {
				TestUI.swapVal2(arr, i, j);
				++i;
			}
			++j;
		}
		TestUI.swapVal2(arr, i, endIndex);
		return i;

	}

	public static swapVal2(arr: number[], index1: number, index2: number): void {
		if (index1 === index2) {
			return;
		}
		let temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
		// [1,3,4,4,4,6,8,10,15,46,78,100]
	}

	public static binarySearch(arr: number[], val: number): number {
		let leng = arr.length;
		let left = 0;
		let right = leng - 1;
		while (left <= right) {
			let mid = Math.floor(left + (right - left) * 0.5);
			// if (arr[mid] === val) {
			// 	//第一个值相等的下标
			// 	if (mid === 0 || arr[mid - 1] !== val) {
			// 		return mid;
			// 	}else{
			// 		right = mid - 1;
			// 	}
			// } else if (arr[mid] < val) {
			// 	left = mid + 1;
			// } else {
			// 	right = mid - 1;
			// }

			// if(arr[mid] >= val){
			// 	//第一个值大于或等于的下标
			// 	if (mid === 0 || arr[mid - 1] < val) {
			// 		return mid;
			// 	}else{
			// 		right = mid - 1;
			// 	}
			// }else{
			// 	left = mid + 1;
			// }

			if (arr[mid] <= val) {
				//最后一个小于或等于的下标
				if (mid === leng - 1 || arr[mid + 1] > val) {
					return mid;
				} else {
					left = mid + 1;
				}
			} else {
				right = mid - 1;
			}
		}
		return -1;

	}



	private onBtnClick(): void {
		//手动控制组件属性
		this.radio.selectedIndex = 1;
		this.clip.index = 8;
		this.tab.selectedIndex = 2;
		this.combobox.selectedIndex = 0;
		this.check.selected = true;
	}

	private onBtn2Click(): void {
		//通过赋值可以简单快速修改组件属性
		//赋值有两种方式：
		//简单赋值，比如：progress:0.2，就是更改progress组件的value为2
		//复杂复制，可以通知某个属性，比如：label:{color:"#ff0000",text:"Hello LayaAir"}
		this.box.dataSource = { slider: 50, scroll: 80, progress: 0.2, input: "This is a input", label: { color: "#ff0000", text: "Hello LayaAir" } };

		//list赋值，先获得一个数据源数组
		var arr: Array<any> = [];
		for (var i: number = 0; i < 100; i++) {
			arr.push({ label: "item " + i, clip: i % 9 });
		}

		//给list赋值更改list的显示
		this.list.array = arr;

		//还可以自定义list渲染方式，可以打开下面注释看一下效果
		//list.renderHandler = new Handler(this, onListRender);
	}

	private async testFun(): Promise<void> {
		new Promise((resolve, reject) => {
			window.setTimeout(() => {
				console.log("-------------------------");
				resolve();

			}, 2000);
		});
	}

	private onListRender(item: Laya.Box, index: number): void {
		//自定义list的渲染方式
		var label: Label = item.getChildByName("label") as Label;
		if (index % 2) {
			label.color = "#ff0000";
		} else {
			label.color = "#000000";
		}
	}
}

//程序入口
Laya.init(600, 400, WebGL);
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

function beginLoad() {
	Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
}

function onLoaded(): void {
	//实例UI界面
	var testUI: TestUI = new TestUI();
	Laya.stage.addChild(testUI);
}