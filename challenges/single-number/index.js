/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 *
 * Input: [2,2,1]
 * Output: 1
 */

/**
  * @param {number[]} nums
  * @return {number}
  */
function singleNumber(nums) {
    const uniqSum = [...new Set(nums)].reduce((prev, next) => prev + next, 0);
    const numsSum = nums.reduce((prev, next) => prev + next, 0);
    return 2 * uniqSum - numsSum;
}

console.log(singleNumber([2, 2, 1])); // 1
