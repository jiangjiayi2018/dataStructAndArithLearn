namespace stack {
    export const enum CharType {
        NUMBER,
        SYMBOL
    }
    export class StackApply {

        public static symbolRank: {[K: string]: number} = {
            "+": 1,
            "-": 1,
            "*": 2,
            "/": 2
        };

        public static checkCharType(str: string): CharType {
            if (Number(str) !== NaN) {
                return CharType.NUMBER;
            }
            return CharType.SYMBOL;
        }

        /**symbol1优先级高于symbol2返回正数，反之返回负数*/
        public static compareSymbolRank(symbol1: string, symbol2: string): number{
            let rank1 = StackApply.symbolRank[symbol1];
            let rank2 = StackApply.symbolRank[symbol2];
            rank1 = rank1 ? rank1 : -1;
            rank2 = rank2 ? rank2 : -1;
            return rank1 - rank2;

        }

        // public static parseMathOper(expression: string): number {
        //     let mathStack: StackBaseLinkedList<number> = new StackBaseLinkedList<number>();
        //     let symbolStack: StackBaseLinkedList<string> = new StackBaseLinkedList<string>();

        //     for (let i = 0, leng = expression.length; i < leng; ++i) {
        //         let strCell = expression.charAt(i);
        //         if(StackApply.checkCharType(strCell) === CharType.NUMBER){
        //             mathStack.push(Number(strCell));
        //         }else{
        //             if(StackApply.compareSymbolRank(strCell, symbolStack.pop()) <= 0){

        //             }
        //         }
        //     }
        // }

    }

    export class SampleBrowser {
        private currentPage: string = null;
        private backStack: StackBaseLinkedList<string> = null;
        private forwardStack: StackBaseLinkedList<string> = null;

        public constructor() {
            this.backStack = new StackBaseLinkedList<string>();
            this.forwardStack = new StackBaseLinkedList<string>();
        }

        public openUrl(url: string): void {
            if (this.currentPage) {
                this.backStack.push(this.currentPage);
                this.forwardStack.clear();
            }
            this.showUrl(url, "open");

        }

        public gotoBack(): void {
            if (!this.isCanGotoBack()) {
                return;
            }
            this.forwardStack.push(this.currentPage);
            this.showUrl(this.backStack.pop(), "back");
        }

        public gotoForward(): void {
            if (!this.isCanGotoForward()) {
                return;
            }
            this.backStack.push(this.currentPage);
            this.showUrl(this.forwardStack.pop(), "forward");
        }

        public isCanGotoBack(): boolean {
            return this.backStack.length > 0;
        }

        public isCanGotoForward(): boolean {
            return this.forwardStack.length > 0;
        }

        public showUrl(url: string, type: string): void {
            this.currentPage = url;
            console.log(type, url);
        }
    }
}