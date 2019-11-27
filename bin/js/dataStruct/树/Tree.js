var tree;
(function (tree) {
    var Tree = (function () {
        function Tree() {
        }
        /**基于链式节点*/
        Tree.preOrder = function (rootNode) {
            console.log(rootNode.data);
            if (rootNode.leftNode) {
                Tree.preOrder(rootNode.leftNode);
            }
            if (rootNode.rightNode) {
                Tree.preOrder(rootNode.rightNode);
            }
        };
        Tree.midOrder = function (rootNode) {
            if (rootNode.leftNode) {
                Tree.midOrder(rootNode.leftNode);
            }
            console.log(rootNode.data);
            if (rootNode.rightNode) {
                Tree.midOrder(rootNode.rightNode);
            }
        };
        Tree.nextOrder = function (rootNode) {
            if (rootNode.leftNode) {
                Tree.nextOrder(rootNode.leftNode);
            }
            if (rootNode.rightNode) {
                Tree.nextOrder(rootNode.rightNode);
            }
            console.log(rootNode.data);
        };
        Tree.orderByLayer = function (node) {
            var queue = [];
            queue.unshift(node);
            while (queue.length > 0) {
                var cell = queue.pop();
                console.log(cell.data);
                if (cell.leftNode) {
                    queue.unshift(cell.leftNode);
                }
                if (cell.rightNode) {
                    queue.unshift(cell.rightNode);
                }
            }
        };
        /**基于数组*/
        Tree.preOrder1 = function (arr, index) {
            console.log(arr[index]);
            if (arr[index * 2] !== undefined && arr[index * 2] !== null) {
                Tree.preOrder1(arr, index * 2);
            }
            if (arr[index * 2 + 1] !== undefined && arr[index * 2 + 1] !== null) {
                Tree.preOrder1(arr, index * 2 + 1);
            }
        };
        Tree.getHight = function (node) {
            if (!node.leftNode && !node.rightNode) {
                return 0;
            }
            var leftHight = 0;
            var righHight = 0;
            if (node.leftNode) {
                leftHight = Tree.getHight(node.leftNode);
            }
            if (node.rightNode) {
                righHight = Tree.getHight(node.rightNode);
            }
            return Math.max(leftHight, righHight) + 1;
        };
        Tree.getHight2 = function (node) {
            var queue = [];
            queue.unshift(node);
            var curLayerWidth = 1;
            var height = -1;
            while (queue.length > 0) {
                while (curLayerWidth !== 0) {
                    var cell = queue.pop();
                    if (cell.leftNode) {
                        queue.unshift(cell.leftNode);
                    }
                    if (cell.rightNode) {
                        queue.unshift(cell.rightNode);
                    }
                }
                ++height;
                curLayerWidth = queue.length;
            }
            return height;
        };
        return Tree;
    }());
    tree.Tree = Tree;
    var SearchTree = (function () {
        function SearchTree() {
        }
        SearchTree.search = function (node, data) {
            while (node) {
                if (node.data === data) {
                    return node;
                }
                else if (data < node.data) {
                    node = node.leftNode;
                }
                else {
                    node = node.rightNode;
                }
            }
            return null;
        };
        SearchTree.insert = function (rootNode, data) {
            var newNode = new TreeNode(data);
            if (!rootNode) {
                rootNode = newNode;
                return;
            }
            while (rootNode) {
                if (data > rootNode.data) {
                    if (!rootNode.rightNode) {
                        rootNode.rightNode = newNode;
                        return;
                    }
                    else {
                        rootNode = rootNode.rightNode;
                    }
                }
                else {
                    if (!rootNode.leftNode) {
                        rootNode.leftNode = newNode;
                        return;
                    }
                    else {
                        rootNode = rootNode.leftNode;
                    }
                }
            }
        };
        SearchTree.delete = function (rootNode, data) {
            var deleteNode = rootNode;
            var parentNode = null;
            while (deleteNode && deleteNode.data !== data) {
                parentNode = deleteNode;
                if (data > deleteNode.data) {
                    deleteNode = deleteNode.rightNode;
                }
                else {
                    deleteNode = deleteNode.leftNode;
                }
            }
            if (!deleteNode) {
                return;
            }
            if (deleteNode.leftNode && deleteNode.rightNode) {
                var minNode = deleteNode.rightNode;
                var minParent = deleteNode;
                while (minNode.leftNode) {
                    minParent = minNode;
                    minNode = minNode.leftNode;
                }
                deleteNode.data = minNode.data;
                deleteNode = minNode;
                parentNode = minParent;
            }
            var childNode = null;
            if (deleteNode.leftNode) {
                childNode = deleteNode.leftNode;
            }
            else if (deleteNode.rightNode) {
                childNode = deleteNode.rightNode;
            }
            if (!parentNode) {
                rootNode = childNode;
            }
            else if (parentNode.leftNode === deleteNode) {
                parentNode.leftNode = childNode;
            }
            else {
                parentNode.rightNode = childNode;
            }
        };
        return SearchTree;
    }());
    tree.SearchTree = SearchTree;
    var TreeNode = (function () {
        function TreeNode(data) {
            this.data = data;
        }
        return TreeNode;
    }());
    tree.TreeNode = TreeNode;
})(tree || (tree = {}));
