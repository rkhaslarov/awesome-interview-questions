function mergeSort(array) {

    if (array.length === 1)
        return array;

    const middle = Math.floor(array.length / 2);
    const lhs = array.slice(0, middle);
    const rhs = array.slice(middle);

    return merge(mergeSort(lhs), mergeSort(rhs));
}

function merge(left, right) {

    const result = [];

    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
          result.push(left[indexLeft]);
          indexLeft++;
        } else {
          result.push(right[indexRight]);
          indexRight++;
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}




console.log(mergeSort([8, 1, 3, 10, 4, 5, 3, 7, 9]))
