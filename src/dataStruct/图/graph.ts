namespace graph {
    export class Graph {
        /**顶点个数*/
        private vertexCount: number = 0;
        /**邻接表*/
        private contentTable: VertexDot[] = [];

        public constructor(count: number) {
            this.vertexCount = count;
            this.contentTable = new Array<VertexDot>(count);
        }

        /**给图里面添加顶点*/
        public addDot(...dotIds: number[]): void {
            for (let i = 0, leng = dotIds.length; i < leng; ++i) {
                let id = dotIds[i];
                if (id < this.vertexCount) {
                    this.contentTable[id] = new VertexDot(id);
                }
            }

        }

        /**给图里面添加边*/
        public addEdge(a: number, b: number): void {
            let dotA = this.contentTable[a];
            let dotB = this.contentTable[b];
            dotA.addDot(dotB);
            // dotB.addDot(dotA);
        }

        /**图的广度优先搜索*/
        public bps(a: number, b: number): void {
            if (a === b) {
                return;
            }
            let queue: VertexDot[] = [];
            queue.unshift(this.contentTable[a]);
            let visiteds: boolean[] = new Array<boolean>(this.vertexCount);
            let preArr: number[] = new Array<number>(this.vertexCount);
            while (queue.length > 0) {
                let dot = queue.pop();
                let dotMap = dot.toVertexDotMap;
                for (let id in dotMap) {
                    if (dotMap.hasOwnProperty(id)) {
                        let element = dotMap[id];
                        if (!visiteds[element.id]) {
                            preArr[id] = dot.id;
                            if (element.id === b) {
                                this.printf(preArr, a, b);
                                return;
                            }
                            visiteds[element.id] = true;
                            queue.unshift(element);
                        }
                    }
                }
            }
        }

        public dps(a: number, b: number): void {
            if (a === b) {
                return;
            }
            let visiteds: boolean[] = new Array<boolean>(this.vertexCount);
            let preArr: number[] = new Array<number>(this.vertexCount);
            this.dpsHandle(a, b, visiteds, preArr);
            this.printf(preArr, a, b);

        }

        private isFound: boolean = false;
        private dpsHandle(a: number, b: number, visiteds: boolean[], preArr: number[]): void {
            if (this.isFound) {
                return;
            }
            visiteds[a] = true;
            if (a === b) {
                this.isFound = true;
                return;
            }
            let dot = this.contentTable[a];
            let map = dot.toVertexDotMap;
            for (let id in map) {
                if (map.hasOwnProperty(id)) {
                    let element = map[id];
                    if (!visiteds[id]) {
                        visiteds[id] = true;
                        preArr[id] = dot.id;
                        this.dpsHandle(element.id, b, visiteds, preArr);
                    }
                }
            }
        }

        public printf(preArr: number[], a: number, b: number): void {
            if (preArr[b] && a !== b) {
                this.printf(preArr, a, preArr[b])
            }
            console.log(b, "****");
        }
    }

    export class VertexDot {
        /**顶点编号*/
        public id: number = 0;
        /**每个顶点指向的顶点集合*/
        public toVertexDotMap: { [K: number]: VertexDot } = {};
        //顶点上面其他具体信息

        public constructor(id: number) {
            this.id = id;
        }

        public addDot(dot: VertexDot): void {
            this.toVertexDotMap[dot.id] = dot;
        }

    }
}

let graphIns = new graph.Graph(50);
graphIns.addDot(0, 1, 5, 6, 8, 7, 9);
graphIns.addEdge(0, 6);
graphIns.addEdge(0, 1);
graphIns.addEdge(6, 8);
graphIns.addEdge(1, 5);
graphIns.addEdge(5, 6);
graphIns.addEdge(5, 8);
graphIns.addEdge(8, 7);
graphIns.addEdge(8, 9);
// graphIns.bps(0, 9);
graphIns.dps(0, 9);