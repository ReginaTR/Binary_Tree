const log = console.log;

class BinaryTree<T> {
  constructor(
    public value: T,
    public left?: BinaryTree<T>,
    public right?: BinaryTree<T>
  ) {}


  count(): number {
    const leftCount = this.left?.count() ?? 0;
    const rightCount = this.right?.count() ?? 0; 

    return leftCount + rightCount + 1
  }

  isLeaf(): boolean {
    return !this.left && !this.right;
  }

  isNotLeaf(): boolean {
    return !this.isLeaf();
  }

  addLeft(leftValue: T) {
    return (this.left = new BinaryTree<T>(leftValue));
  }

  addRight(rightValue: T) {
    return (this.right = new BinaryTree<T>(rightValue));
  }

  heigth(): number {
    const leftHeight = this.left?.heigth() ?? 0;
    const rightHeight = this.right?.heigth() ?? 0;

    return Math.max(leftHeight, rightHeight) + 1;
  }
}
const root = new BinaryTree(1);
const root2 = root.addLeft(2);
const root3 = root.addRight(3);
const root4 = root2.addLeft(4);
const root5 = root2.addRight(5);
const root6 = root3.addLeft(6);
const root7 = root3.addRight(7);
root4.addLeft(8);
root4.addRight(9);
root5.addLeft(10);
root5.addRight(11);
root6.addRight(13);
root7.addLeft(14);


log({ root });
log({ count: root.count() });
log({ heigth: root.heigth() });
