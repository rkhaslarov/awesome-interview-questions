/**
 * Given an array, rotate the array to the right by k steps.
 * Input: [1,2,3,4,5,6,7] and k = 3 Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 */

function rotate(nums, k) {
    const steps = k % nums.length;

    if (steps <= 0) {
        return;
    }

    const array = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        array[(i + steps) % nums.length] = nums[i];
    }

    for (let i = 0; i < array.length; i++) {
        nums[i] = array[i];
    }
}

function rotate2(nums, k) {
    let steps = k % nums.length;

    if (steps <= 0) {
        return;
    }

    while (steps--) {
        nums.unshift(nums.pop());
    }
}

function rotate3(nums, k) {
    let steps = k % nums.length;

    if (steps <= 0) {
        return;
    }

    while (steps--) {
        for (let i = 0; i < nums.length - 1; i++) {
            const temp = nums[i];
            nums[i] = nums[nums.length - 1];
            nums[nums.length - 1] = temp;
        }
    }
}

const nums1 = [1, 2, 3, 4, 5, 6, 7];
rotate(nums1, 3);
console.log(nums1); // [5,6,7,1,2,3,4]

const nums2 = [2, 1];
rotate2(nums2, 3);
console.log(nums2); // [1,2]

const nums3 = [-1];
rotate3(nums3, 3);
console.log(nums3); // [-1]
