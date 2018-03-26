function swap(array, prev, next) {
    const temp = array[prev];
    array[prev] = array[next];
    array[next] = temp;
}

function selectionSort(array) {

    const result = [...array];

    let min = 0;

    for (let i = 0; i < result.length; i++) {

        min = i;

        for (j = i + 1; j < result.length; j++) {
            if (result[j] < result[min]) {
                min = j;
            }
        }

        if (min != i) {
            swap(result, i, min);
        }
    }

    return result;
}

console.log(selectionSort([8, 1, 3, 10, 4, 5, 3, 7, 9]));
