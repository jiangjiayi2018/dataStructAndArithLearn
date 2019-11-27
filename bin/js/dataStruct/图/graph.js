var graph;
(function (graph) {
    var Graph = (function () {
        function Graph(count) {
            /**顶点个数*/
            this.vertexCount = 0;
            /**邻接表*/
            this.contentTable = [];
            this.isFound = false;
            this.vertexCount = count;
            this.contentTable = new Array(count);
        }
        /**给图里面添加顶点*/
        Graph.prototype.addDot = function () {
            var dotIds = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                dotIds[_i] = arguments[_i];
            }
            for (var i = 0, leng = dotIds.length; i < leng; ++i) {
                var id = dotIds[i];
                if (id < this.vertexCount) {
                    this.contentTable[id] = new VertexDot(id);
                }
            }
        };
        /**给图里面添加边*/
        Graph.prototype.addEdge = function (a, b) {
            var dotA = this.contentTable[a];
            var dotB = this.contentTable[b];
            dotA.addDot(dotB);
            // dotB.addDot(dotA);
        };
        /**图的广度优先搜索*/
        Graph.prototype.bps = function (a, b) {
            if (a === b) {
                return;
            }
            var queue = [];
            queue.unshift(this.contentTable[a]);
            var visiteds = new Array(this.vertexCount);
            var preArr = new Array(this.vertexCount);
            while (queue.length > 0) {
                var dot = queue.pop();
                var dotMap = dot.toVertexDotMap;
                for (var id in dotMap) {
                    if (dotMap.hasOwnProperty(id)) {
                        var element = dotMap[id];
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
        };
        Graph.prototype.dps = function (a, b) {
            if (a === b) {
                return;
            }
            var visiteds = new Array(this.vertexCount);
            var preArr = new Array(this.vertexCount);
            this.dpsHandle(a, b, visiteds, preArr);
            this.printf(preArr, a, b);
        };
        Graph.prototype.dpsHandle = function (a, b, visiteds, preArr) {
            if (this.isFound) {
                return;
            }
            visiteds[a] = true;
            if (a === b) {
                this.isFound = true;
                return;
            }
            var dot = this.contentTable[a];
            var map = dot.toVertexDotMap;
            for (var id in map) {
                if (map.hasOwnProperty(id)) {
                    var element = map[id];
                    if (!visiteds[id]) {
                        visiteds[id] = true;
                        preArr[id] = dot.id;
                        this.dpsHandle(element.id, b, visiteds, preArr);
                    }
                }
            }
        };
        Graph.prototype.printf = function (preArr, a, b) {
            if (preArr[b] && a !== b) {
                this.printf(preArr, a, preArr[b]);
            }
            console.log(b, "****");
        };
        return Graph;
    }());
    graph.Graph = Graph;
    var VertexDot = (function () {
        //顶点上面其他具体信息
        function VertexDot(id) {
            /**顶点编号*/
            this.id = 0;
            /**每个顶点指向的顶点集合*/
            this.toVertexDotMap = {};
            this.id = id;
        }
        VertexDot.prototype.addDot = function (dot) {
            this.toVertexDotMap[dot.id] = dot;
        };
        return VertexDot;
    }());
    graph.VertexDot = VertexDot;
})(graph || (graph = {}));
var graphIns = new graph.Graph(50);
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
