// https://leetcode-cn.com/problems/add-two-numbers/
// 给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode(0); // 定义一个链表来存放结果
  let p1 = l1; // 指向链表1的头部
  let p2 = l2; // 指向链表2的头部
  let p3 = l3;
  let carry = 0; // 进位的数，即留到下一轮相加的数
  while (p1 || p2) {
    // 这两个三元判断是为了防止相加的两个数长度不同
    const v1 = p1 ? p1.val : 0;
    const v2 = p2 ? p2.val : 0;
    const val = v1 + v2 + carry;
    carry = Math.floor(val / 10); // 相加后的十位数
    p3.next = new ListNode(val % 10); // 相加后的个位数
    // 指针继续往后走
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    p3 = p3.next;
  }
  // 处理特殊情况：如[2,2,7] + [5,6,4]这种加到最后一个还有进位的情况
  if (carry) {
    p3.next = new ListNode(carry);
  }
  return l3.next;
};
