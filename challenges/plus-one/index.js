/**
 * Given a non-empty array of digits representing a non-negative integer,
 * plus one to the integer.
 * The digits are stored such that the most significant digit is at the head
 * of the list, and each element in the array contain a single digit.
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 * Input: [1,2,3]
 * Output: [1,2,4]
 */

/**
  * @param {number[]} digits
  * @return {number[]}
  */
function plusOne(digits) {
    for (let i = digits.length - 1; i > -1; i--) {
        if (digits[i] !== 9) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
    }

    digits.unshift(1);
    return digits;
}

console.log(plusOne([1, 2, 3])); // [1,2,4]
