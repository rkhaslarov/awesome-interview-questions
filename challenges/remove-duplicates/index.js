/**
 * Given a sorted array nums, remove the duplicates in-place such that each element
 * appear only once and return the new length.
 * Do not allocate extra space for another array,
 * you must do this by modifying the input array in-place with O(1) extra memory.
 *
 * Given nums = [0,0,1,1,1,2,2,3,3,4],
 * our function should return length = 5, with the first five elements of nums
 * being modified to 0, 1, 2, 3, and 4 respectively.
 * It doesn't matter what values are set beyond the returned length.
 */

/**
 * @param {number[]} nums
 * @return {number} [1,1,2,3]
 */
function removeDuplicates(nums) {
    if (!nums.length) {
        return 0;
    }

    let nextToPlace = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[nextToPlace - 1]) {
            nums[nextToPlace] = nums[i];
            nextToPlace++;
        }
    }

    return nextToPlace;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
console.log(removeDuplicates([])); // 0
