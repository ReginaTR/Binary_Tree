var log = console.log;
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
    BinaryTree.prototype.count = function () {
        var _a, _b, _c, _d;
        var leftCount = (_b = (_a = this.left) === null || _a === void 0 ? void 0 : _a.count()) !== null && _b !== void 0 ? _b : 0;
        var rightCount = (_d = (_c = this.right) === null || _c === void 0 ? void 0 : _c.count()) !== null && _d !== void 0 ? _d : 0;
        return leftCount + rightCount + 1;
    };
    BinaryTree.prototype.isLeaf = function () {
        return !this.left && !this.right;
    };
    BinaryTree.prototype.isNotLeaf = function () {
        return !this.isLeaf();
    };
    BinaryTree.prototype.addLeft = function (leftValue) {
        return (this.left = new BinaryTree(leftValue));
    };
    BinaryTree.prototype.addRight = function (rightValue) {
        return (this.right = new BinaryTree(rightValue));
    };
    BinaryTree.prototype.heigth = function () {
        var _a, _b, _c, _d;
        var leftHeight = (_b = (_a = this.left) === null || _a === void 0 ? void 0 : _a.heigth()) !== null && _b !== void 0 ? _b : 0;
        var rightHeight = (_d = (_c = this.right) === null || _c === void 0 ? void 0 : _c.heigth()) !== null && _d !== void 0 ? _d : 0;
        return Math.max(leftHeight, rightHeight) + 1;
    };
    return BinaryTree;
}());
var root = new BinaryTree(1);
var root2 = root.addLeft(2);
var root3 = root.addRight(3);
var root4 = root2.addLeft(4);
var root5 = root2.addRight(5);
var root6 = root3.addLeft(6);
var root7 = root3.addRight(7);
root4.addLeft(8);
root4.addRight(9);
root5.addLeft(10);
root5.addRight(11);
root6.addRight(13);
root7.addLeft(14);
log({ root: root });
log({ count: root.count() });
log({ heigth: root.heigth() });
