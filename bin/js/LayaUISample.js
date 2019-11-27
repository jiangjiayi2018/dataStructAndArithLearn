var test = ui.test.TestPageUI;
var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var WebGL = Laya.WebGL;
var TestUI = (function (_super) {
    __extends(TestUI, _super);
    function TestUI() {
        var _this = _super.call(this) || this;
        //btn是编辑器界面设定的，代码里面能直接使用，并且有代码提示
        _this.btn.on(Laya.Event.CLICK, _this, _this.onBtnClick, [23]);
        _this.btn2.on(Laya.Event.CLICK, _this, _this.testFun);
        [4, 5, 13, 3, 2, 1, 4, 8, 6, 3, 2, 1];
        return _this;
    }
    TestUI.mergeSort = function (arr) {
        TestUI.mergeSortHandle(arr, 0, arr.length - 1);
        console.log(arr);
    };
    TestUI.mergeSortHandle = function (arr, beginIndex, endIndex) {
        if (beginIndex >= endIndex) {
            return;
        }
        var mid = Math.floor((beginIndex + endIndex) * 0.5);
        TestUI.mergeSortHandle(arr, beginIndex, mid);
        TestUI.mergeSortHandle(arr, mid + 1, endIndex);
        TestUI.mergeArr(arr, beginIndex, mid, endIndex);
    };
    TestUI.mergeArr = function (arr, beginIndex, mid, endIndex) {
        var tempArr = [];
        var i = beginIndex;
        var j = mid + 1;
        while (i <= mid && j <= endIndex) {
            if (arr[i] <= arr[j]) {
                tempArr.push(arr[i++]);
            }
            else {
                tempArr.push(arr[j++]);
            }
        }
        while (i <= mid) {
            tempArr.push(arr[i++]);
        }
        while (j <= endIndex) {
            tempArr.push(arr[j++]);
        }
        for (var k = beginIndex; k <= endIndex; ++k) {
            arr[k] = tempArr.shift();
        }
    };
    TestUI.quickSort = function (arr) {
        TestUI.quickSortHandle(arr, 0, arr.length - 1);
        console.log(arr);
    };
    TestUI.quickSortHandle = function (arr, beginIndex, endIndex) {
        if (beginIndex >= endIndex) {
            return;
        }
        var pivote = TestUI.partition(arr, beginIndex, endIndex);
        TestUI.quickSortHandle(arr, beginIndex, pivote - 1);
        TestUI.quickSortHandle(arr, pivote + 1, endIndex);
    };
    TestUI.findRankIndexNumber = function (arr, rankIndex) {
        if (rankIndex < 0 || rankIndex > arr.length - 1) {
            return;
        }
        return TestUI.findRankIndexNumberHandle(arr, rankIndex, 0, arr.length - 1);
    };
    TestUI.findRankIndexNumberHandle = function (arr, rankIndex, beginIndex, endIndex) {
        var pivote = TestUI.partition(arr, beginIndex, endIndex);
        if (pivote + 1 === rankIndex) {
            return arr[pivote];
        }
        else if (rankIndex > pivote + 1) {
            return TestUI.findRankIndexNumberHandle(arr, rankIndex, pivote + 1, endIndex);
        }
        else {
            return TestUI.findRankIndexNumberHandle(arr, rankIndex, beginIndex, pivote - 1);
        }
    };
    TestUI.partition = function (arr, beginIndex, endIndex) {
        var standardVal = arr[endIndex];
        var i = beginIndex;
        var j = beginIndex;
        for (; j < endIndex; ++j) {
            if (arr[j] < standardVal) {
                TestUI.swapVal(arr, i, j);
                ++i;
            }
        }
        TestUI.swapVal(arr, i, endIndex);
        return i;
    };
    TestUI.swapVal = function (arr, index1, index2) {
        if (index1 === index2) {
            return;
        }
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    };
    TestUI.bubbleSort = function (arr) {
        var leng = arr.length;
        if (leng <= 1) {
            return arr;
        }
        for (var i = 0; i < leng; ++i) {
            var flag = false;
            for (var j = 0; j < leng - i - 1; ++j) {
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
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
    };
    TestUI.insertSort = function (arr) {
        var leng = arr.length;
        if (leng <= 1) {
            return arr;
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
        return arr;
    };
    TestUI.selectSort = function (arr) {
        var leng = arr.length;
        if (leng <= 1) {
            return arr;
        }
        for (var i = 0; i < leng; ++i) {
            var min = arr[i];
            var minIndex = i;
            for (var j = i + 1; j < leng; ++j) {
                if (arr[j] < min) {
                    min = arr[j];
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                var temp = arr[i];
                arr[i] = min;
                arr[minIndex] = temp;
            }
        }
        return arr;
    };
    TestUI.countingSort = function (arr) {
        var countArr = [];
        var sortArr = [];
        for (var i = 0, leng = arr.length; i < leng; ++i) {
            if (!countArr[arr[i]]) {
                countArr[arr[i]] = 1;
            }
            else {
                countArr[arr[i]] += 1;
            }
        }
        console.log("countArr---------", countArr);
        for (var i = 0, leng = countArr.length; i < leng; ++i) {
            if (!countArr[i]) {
                countArr[i] = 0;
            }
            if (i > 0) {
                countArr[i] += countArr[i - 1];
            }
        }
        console.log("countArr---------", countArr);
        for (var i = arr.length - 1; i >= 0; --i) {
            sortArr[countArr[arr[i]] - 1] = arr[i];
            countArr[arr[i]] -= 1;
        }
        return sortArr;
    };
    TestUI.insertSort2 = function (arr) {
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
    };
    TestUI.mergeSort2 = function (arr) {
        var leng = arr.length;
        if (leng <= 1) {
            return;
        }
        TestUI.mergeSortHandle2(arr, 0, leng - 1);
    };
    TestUI.mergeSortHandle2 = function (arr, beginIndex, endIndex) {
        if (beginIndex >= endIndex) {
            return;
        }
        var mid = Math.floor((beginIndex + endIndex) * 0.5);
        TestUI.mergeSortHandle2(arr, beginIndex, mid);
        TestUI.mergeSortHandle2(arr, mid + 1, endIndex);
        TestUI.mergeArr2(arr, beginIndex, mid, endIndex);
    };
    TestUI.mergeArr2 = function (arr, beginIndex, mid, endIndex) {
        var temp = [];
        var i = beginIndex;
        var j = mid + 1;
        while (i <= mid && j <= endIndex) {
            if (arr[i] <= arr[j]) {
                temp.push(arr[i++]);
            }
            else {
                temp.push(arr[j++]);
            }
        }
        while (i <= mid) {
            temp.push(arr[i++]);
        }
        while (j <= endIndex) {
            temp.push(arr[j++]);
        }
        var flagIndex = beginIndex;
        while (temp.length > 0) {
            arr[flagIndex++] = temp.shift();
        }
    };
    TestUI.quickSort2 = function (arr) {
        var leng = arr.length;
        if (leng <= 1) {
            return;
        }
        TestUI.quickSortHandle2(arr, 0, leng - 1);
    };
    TestUI.quickSortHandle2 = function (arr, beginIndex, endIndex) {
        if (beginIndex >= endIndex) {
            return;
        }
        var pivote = TestUI.partition2(arr, beginIndex, endIndex);
        TestUI.quickSortHandle2(arr, beginIndex, pivote - 1);
        TestUI.quickSortHandle2(arr, pivote + 1, endIndex);
    };
    TestUI.partition2 = function (arr, beginIndex, endIndex) {
        var partVal = arr[endIndex];
        var i = beginIndex;
        var j = beginIndex;
        while (j <= endIndex - 1) {
            if (arr[j] < partVal) {
                TestUI.swapVal2(arr, i, j);
                ++i;
            }
            ++j;
        }
        TestUI.swapVal2(arr, i, endIndex);
        return i;
    };
    TestUI.swapVal2 = function (arr, index1, index2) {
        if (index1 === index2) {
            return;
        }
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        // [1,3,4,4,4,6,8,10,15,46,78,100]
    };
    TestUI.binarySearch = function (arr, val) {
        var leng = arr.length;
        var left = 0;
        var right = leng - 1;
        while (left <= right) {
            var mid = Math.floor(left + (right - left) * 0.5);
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
                }
                else {
                    left = mid + 1;
                }
            }
            else {
                right = mid - 1;
            }
        }
        return -1;
    };
    TestUI.prototype.onBtnClick = function () {
        var part = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            part[_i] = arguments[_i];
        }
        for (var i = 0, leng = part.length; i < leng; ++i) {
            console.log("**************", part[i]);
        }
        //手动控制组件属性
        this.radio.selectedIndex = 1;
        this.clip.index = 8;
        this.tab.selectedIndex = 2;
        this.combobox.selectedIndex = 0;
        this.check.selected = true;
    };
    TestUI.prototype.onBtn2Click = function () {
        //通过赋值可以简单快速修改组件属性
        //赋值有两种方式：
        //简单赋值，比如：progress:0.2，就是更改progress组件的value为2
        //复杂复制，可以通知某个属性，比如：label:{color:"#ff0000",text:"Hello LayaAir"}
        this.box.dataSource = { slider: 50, scroll: 80, progress: 0.2, input: "This is a input", label: { color: "#ff0000", text: "Hello LayaAir" } };
        //list赋值，先获得一个数据源数组
        var arr = [];
        for (var i = 0; i < 100; i++) {
            arr.push({ label: "item " + i, clip: i % 9 });
        }
        //给list赋值更改list的显示
        this.list.array = arr;
        //还可以自定义list渲染方式，可以打开下面注释看一下效果
        //list.renderHandler = new Handler(this, onListRender);
    };
    TestUI.prototype.testFun = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                new Promise(function (resolve, reject) {
                    window.setTimeout(function () {
                        console.log("-------------------------");
                        resolve();
                    }, 2000);
                });
                return [2 /*return*/];
            });
        });
    };
    TestUI.prototype.onListRender = function (item, index) {
        //自定义list的渲染方式
        var label = item.getChildByName("label");
        if (index % 2) {
            label.color = "#ff0000";
        }
        else {
            label.color = "#000000";
        }
    };
    return TestUI;
}(ui.test.TestPageUI));
//程序入口
Laya.init(600, 400, WebGL);
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
function beginLoad() {
    Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
}
function onLoaded() {
    //实例UI界面
    var testUI = new TestUI();
    Laya.stage.addChild(testUI);
}
