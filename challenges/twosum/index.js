// --- Description
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// --- Examples
// twoSum([2, 7, 11, 15], 9) === [0, 1]

function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const complement = target - current;

        if (map[current] !== undefined) {
            return [map[current], i];
        }

        map[complement] = i;
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
