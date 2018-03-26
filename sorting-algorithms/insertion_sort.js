function insertionSort(array) {

    const result = [...array];

    for (let i = 1; i < result.length; i++) {

        const temp = result[i];

        let newIndexToPlace = i;

        for (let j = i - 1; j >= 0 && result[j] > temp; j--) {
            result[j + 1] = result[j];
            newIndexToPlace = j;
        }

        result[newIndexToPlace] = temp;
    }

    return result;
}

console.log(insertionSort([1, 8, 3, 10, 4, 5, 3, 7, 9]));
