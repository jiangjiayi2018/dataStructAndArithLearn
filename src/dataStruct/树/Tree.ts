namespace tree {
    export class Tree {

        /**基于链式节点*/
        public static preOrder(rootNode: TreeNode<number>): void {
            console.log(rootNode.data);
            if (rootNode.leftNode) {
                Tree.preOrder(rootNode.leftNode);
            }

            if (rootNode.rightNode) {
                Tree.preOrder(rootNode.rightNode);
            }
        }

        public static midOrder(rootNode: TreeNode<number>): void {
            if (rootNode.leftNode) {
                Tree.midOrder(rootNode.leftNode);
            }
            console.log(rootNode.data);
            if (rootNode.rightNode) {
                Tree.midOrder(rootNode.rightNode);
            }
        }

        public static nextOrder(rootNode: TreeNode<number>): void {
            if (rootNode.leftNode) {
                Tree.nextOrder(rootNode.leftNode);
            }
            if (rootNode.rightNode) {
                Tree.nextOrder(rootNode.rightNode);
            }
            console.log(rootNode.data);
        }

        public static orderByLayer(node: TreeNode<number>): void {
            let queue: TreeNode<number>[] = [];
            queue.unshift(node);
            while (queue.length > 0) {
                let cell: TreeNode<number> = queue.pop();
                console.log(cell.data);
                if (cell.leftNode) {
                    queue.unshift(cell.leftNode);
                }
                if (cell.rightNode) {
                    queue.unshift(cell.rightNode);
                }
            }
        }



        /**基于数组*/
        public static preOrder1(arr: number[], index: number): void {
            console.log(arr[index]);
            if (arr[index * 2] !== undefined && arr[index * 2] !== null) {
                Tree.preOrder1(arr, index * 2);
            }

            if (arr[index * 2 + 1] !== undefined && arr[index * 2 + 1] !== null) {
                Tree.preOrder1(arr, index * 2 + 1);
            }
        }

        public static getHight(node: TreeNode<number>): number {
            if (!node.leftNode && !node.rightNode) {
                return 0;
            }
            let leftHight = 0;
            let righHight = 0;
            if (node.leftNode) {
                leftHight = Tree.getHight(node.leftNode);
            }

            if (node.rightNode) {
                righHight = Tree.getHight(node.rightNode);
            }
            return Math.max(leftHight, righHight) + 1;
        }

        public static getHight2(node: TreeNode<number>): number {
            let queue: TreeNode<number>[] = [];
            queue.unshift(node);
            let curLayerWidth = 1;
            let height = -1;
            while(queue.length > 0){
                while(curLayerWidth !== 0){
                    let cell = queue.pop();
                    if(cell.leftNode){
                        queue.unshift(cell.leftNode);
                    }
                    if(cell.rightNode){
                        queue.unshift(cell.rightNode);
                    }
                }
                ++height;
                curLayerWidth = queue.length;
            }
            return height;
        }

    }

    export class SearchTree {

        public static search(node: TreeNode<number>, data: number): TreeNode<number> {
            while (node) {
                if (node.data === data) {
                    return node;
                } else if (data < node.data) {
                    node = node.leftNode;
                } else {
                    node = node.rightNode;
                }
            }
            return null;
        }

        public static insert(rootNode: TreeNode<number>, data: number): void {
            let newNode = new TreeNode(data);
            if (!rootNode) {
                rootNode = newNode;
                return;
            }
            while (rootNode) {
                if (data > rootNode.data) {
                    if (!rootNode.rightNode) {
                        rootNode.rightNode = newNode;
                        return;
                    } else {
                        rootNode = rootNode.rightNode;
                    }
                } else {
                    if (!rootNode.leftNode) {
                        rootNode.leftNode = newNode;
                        return;
                    } else {
                        rootNode = rootNode.leftNode;
                    }
                }
            }

        }

        public static delete(rootNode: TreeNode<number>, data: number): void {
            let deleteNode = rootNode;
            let parentNode = null;
            while (deleteNode && deleteNode.data !== data) {
                parentNode = deleteNode;
                if (data > deleteNode.data) {
                    deleteNode = deleteNode.rightNode;
                } else {
                    deleteNode = deleteNode.leftNode;
                }
            }
            if (!deleteNode) {
                return;
            }

            if (deleteNode.leftNode && deleteNode.rightNode) {
                let minNode = deleteNode.rightNode;
                let minParent = deleteNode;
                while (minNode.leftNode) {
                    minParent = minNode;
                    minNode = minNode.leftNode;
                }
                deleteNode.data = minNode.data;
                deleteNode = minNode;
                parentNode = minParent;

            }

            let childNode = null;
            if (deleteNode.leftNode) {
                childNode = deleteNode.leftNode;
            } else if (deleteNode.rightNode) {
                childNode = deleteNode.rightNode;
            }

            if (!parentNode) {
                rootNode = childNode;
            } else if (parentNode.leftNode === deleteNode) {
                parentNode.leftNode = childNode;
            } else {
                parentNode.rightNode = childNode;
            }

        }



    }

    export class TreeNode<T>{
        public data: T;
        public leftNode: TreeNode<T>;
        public rightNode: TreeNode<T>;

        public constructor(data?: T) {
            this.data = data;
        }
    }
}