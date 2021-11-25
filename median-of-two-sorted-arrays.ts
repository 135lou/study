// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
// 算法的时间复杂度应该为 O(log (m+n)) 。

// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2

// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const nums = [...nums1, ...nums2]
    // 升序
    nums1.sort((a, b) => {
        return a - b
    })

};
