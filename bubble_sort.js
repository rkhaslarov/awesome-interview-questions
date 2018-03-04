function swap(array, prev, next) {
    const temp = array[prev];
    array[prev] = array[next];
    array[next] = temp;
}

function bubbleSort(array) {

    const result = [...array];

    let isSorted = false;

    for (let padding = 0; padding < result.length; padding++) {

        isSorted = true;

        for (let counter = 1; counter < result.length - padding; counter++) {

            const prev = result[counter - 1];
            const next = result[counter];

            if (prev > next) {
                isSorted = false;
                swap(result, counter - 1, counter);
            }
        }

        if (isSorted)
            break;
    }

    return result;
}


console.log(bubbleSort([8, 1, 3, 10, 4, 5, 3, 7, 9]));
