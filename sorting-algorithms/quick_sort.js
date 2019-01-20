/*

  Quicksort!

  Quicksort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.
*/

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

function swap(array, prev, next) {
    const temp = array[prev];
    array[prev] = array[next];
    array[next] = temp;
}

function partition(array, left, right) {
    const pivot = array[Math.floor((right + left) / 2)];

    while (left <= right) {
        while (array[left] < pivot) {
            left++;
        }

        while (array[right] > pivot) {
            right--;
        }

        if (left <= right) {
            swap(array, left, right);
            left++;
            right--;
        }
    }

    return left;
}

function quickSort2(array, left, right) {
    if (left < right && array.length) {
        const index = partition(array, left, right);

        if (left < index - 1) {
            quickSort2(array, left, index - 1);
        }

        if (index < right) {
            quickSort2(array, index, right);
        }
    }
}

const array = [8, 1, 3, 10, 4, 5, 3, 7, 9];

quickSort2(array, 0, array.length - 1);

console.log(array);
console.log(quickSort([8, 1, 3, 10, 4, 5, 3, 7, 9]));
