var stack;
(function (stack) {
    var StackApply = (function () {
        function StackApply() {
        }
        StackApply.checkCharType = function (str) {
            if (Number(str) !== NaN) {
                return 0 /* NUMBER */;
            }
            return 1 /* SYMBOL */;
        };
        /**symbol1优先级高于symbol2返回正数，反之返回负数*/
        StackApply.compareSymbolRank = function (symbol1, symbol2) {
            var rank1 = StackApply.symbolRank[symbol1];
            var rank2 = StackApply.symbolRank[symbol2];
            rank1 = rank1 ? rank1 : -1;
            rank2 = rank2 ? rank2 : -1;
            return rank1 - rank2;
        };
        return StackApply;
    }());
    StackApply.symbolRank = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2
    };
    stack.StackApply = StackApply;
    var SampleBrowser = (function () {
        function SampleBrowser() {
            this.currentPage = null;
            this.backStack = null;
            this.forwardStack = null;
            this.backStack = new stack.StackBaseLinkedList();
            this.forwardStack = new stack.StackBaseLinkedList();
        }
        SampleBrowser.prototype.openUrl = function (url) {
            if (this.currentPage) {
                this.backStack.push(this.currentPage);
                this.forwardStack.clear();
            }
            this.showUrl(url, "open");
        };
        SampleBrowser.prototype.gotoBack = function () {
            if (!this.isCanGotoBack()) {
                return;
            }
            this.forwardStack.push(this.currentPage);
            this.showUrl(this.backStack.pop(), "back");
        };
        SampleBrowser.prototype.gotoForward = function () {
            if (!this.isCanGotoForward()) {
                return;
            }
            this.backStack.push(this.currentPage);
            this.showUrl(this.forwardStack.pop(), "forward");
        };
        SampleBrowser.prototype.isCanGotoBack = function () {
            return this.backStack.length > 0;
        };
        SampleBrowser.prototype.isCanGotoForward = function () {
            return this.forwardStack.length > 0;
        };
        SampleBrowser.prototype.showUrl = function (url, type) {
            this.currentPage = url;
            console.log(type, url);
        };
        return SampleBrowser;
    }());
    stack.SampleBrowser = SampleBrowser;
})(stack || (stack = {}));
