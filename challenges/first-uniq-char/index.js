/**
 * Given a string, find the first non-repeating character in it and return it's index.
 * If it doesn't exist, return -1.
 * Examples:
 * s = "leetcode", return 0.
 * s = "loveleetcode", return 2.
*/

/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
    const map = {};
    const l = s.length;

    for (let i = 0; i < l; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }

    for (let i = 0; i < l; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }

    return -1;
}

console.log(firstUniqChar('leetcode')); // 0
