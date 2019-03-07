/**
 * Given an integer, write a function to determine if it is a power of three.
 * Input: 27
 * Output: true
 */

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
    if (n === 0) {
        return false;
    }

    while (n % 9 === 0) {
        n /= 9;
    }

    return (n === 1 || n === 3);
}

function isPowerOfThree2(n) {
    return /^10*$/.test(n.toString(3));
}

console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree2(27)); // true
