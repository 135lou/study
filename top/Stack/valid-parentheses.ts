/**
 ------------------------
 Author: louly
 Time: 2021-11-23
 ------------------------
 */
// https://leetcode-cn.com/problems/valid-parentheses/
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 输入：s = "()"
// 输出：true
// 输入：s = "()[]{}"
// 输出：true

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s: string) {
    const n = s.length
    if (n % 2 === 1) {
        return false
    }
    // @ts-ignore
    const paris = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ])
    const stk = []

    // )
    for (let ch of s) {
        if (paris.has(ch)) {
            // 如果有需要匹配的话
            if (!stk.length || stk[stk.length - 1] !== paris.get(ch)) {
                return false
            }
            stk.pop()
        } else {
            stk.push(ch)
        }
    }
    return !stk.length
};

