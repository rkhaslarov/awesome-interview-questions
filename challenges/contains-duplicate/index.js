/**
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array,
 * and it should return false if every element is distinct.
 */

function containsDuplicate(nums) {
    return (new Set(nums)).size !== nums.length;
}

function containsDuplicate2(nums) {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }

    return false;
}

function containsDuplicate3(nums) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            return true;
        }
        map[nums[i]] = true;
    }

    return false;
}

function containsDuplicate4(nums) {
    const sortedArray = nums.sort();

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i + 1]) {
            return true;
        }
    }

    return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate2([1, 2, 3])); // false
console.log(containsDuplicate3([1, 2, 3, 1])); // true
console.log(containsDuplicate4([1, 2, 3])); // false
