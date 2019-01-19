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

function quickSort(array, left, right) {
    if (left < right && array.length) {
        const index = partition(array, left, right);

        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }

        if (index < right) {
            quickSort(array, index, right);
        }
    }
}

const array = [8, 1, 3, 10, 4, 5, 3, 7, 9];

quickSort(array, 0, array.length - 1);

console.log(array);
