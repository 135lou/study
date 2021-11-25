/**
 * 给定一个字符串s ，请你找出其中不含有重复字符的 最长子串 的长度。
 */

//  输入: s = "abcabcbb"
//  输出: 3
//  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


// https://leetcode-cn.com/articles/longest-substring-without-repeating-characters/

// 暴力法
// function lengthOfLongestSubstring(s: string): number {
//   const n = s.length;
//   let ans = 0;
//   for (let i = 0; i < n; i++)
//     for (let j = i + 1; j <= n; j++)
//       if (allUnique(s, i, j)) ans = Math.max(ans, j - i);
//   return ans;
// }

// // 输入: s = "abcabcbb"

// // start = 0 , end = 1  ab
// // strat = 0,  end = 2   abc
// // satrt = 0 , end = 3

// function allUnique(s: string, start: number, end: number) {
//   const set = new Set();
//   for (let i = start; i < end; i++) {
//     const ch = s.charAt(i);
//     if (set.has(ch)) {
//       return false;
//     }
//     set.add(ch);
//   }
//   return true;
// }

// 方案二 滑动窗口


// public class Solution {
//     public int lengthOfLongestSubstring(String s) {
//     int n = s.length();
//     Set<Character> set = new HashSet<>();
//     int ans = 0, i = 0, j = 0;
//     while (i < n && j < n) {
//     // try to extend the range [i, j]
//     if (!set.contains(s.charAt(j))){
//     set.add(s.charAt(j++));
//     ans = Math.max(ans, j - i);
// }
// else {
//     set.remove(s.charAt(i++));
// }
// }
// return ans;
// }
// }


// 输入: s = "pwwkew"
// 滑动窗口
// s[j]在[i,j]范围内与j重复的字符串，我们
// 输入: s = "abcabcbb"
function lengthOfLongestSubstring(s) {
    let ans = 0
    const l = s.length
    // @ts-ignore
    const map = new Map()
    for (let i = 0, j = 0; i < l; j++) {
        if (map.has(s.charAt(j))) {
            i = Math.max(map.get(s.charAt(j)), i)
        }
        ans = Math.max(ans, j - i + 1)
        // 更新原来的位置了
        map.set(s.charAt(j), j + 1)
    }
    return ans
}

// i = 0 ,j =0, ans = 1, map: [a, 1]
// i = 0, j = 1, ans = 2, map: [a,1] [b,2]
// i = 0, j= 2, ans  = 3, map: [a,1][b,2][c,3]
// i = Math.max(1, 0) = 1, ans = 3, [b,2][c,3][a,4]
// i= 1， ans =3

