function swap(array, prev, next) {
    const temp = array[prev];
    array[prev] = array[next];
    array[next] = temp;
}

function partition(array, left, right) {

    const pivot = array[Math.floor((right + left) / 2)];

    let i = left;
    let j = right;

    while (i <= j) {

        while (array[i] < pivot) {
            i++;
        }

        while (array[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(array, left, right) {

    if (left >= right) {
        return;
    }

    if (array.length > 1) {

        const index = partition(array, left, right);

        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }

        if (index < right) {
            quickSort(array, index, right);
        }
    }

    return array;
}

const array = [8, 1, 3, 10, 4, 5, 3, 7, 9];

console.log(quickSort(array, 0, array.length - 1));
