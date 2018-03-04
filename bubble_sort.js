function swap(array, prev, next) {
    const temp = array[prev];
    array[prev] = array[next];
    array[next] = temp;
}

function bubbleSort(array) {

    const result = [...array];

    for (let padding = 0; padding < result.length; padding++) {

        for (let counter = 1; counter < result.length - padding; counter++) {

            const prev = result[counter - 1];
            const next = result[counter];

            if (prev > next)
                swap(result, counter - 1, counter);
        }
    }

    return result;
}


console.log(bubbleSort([8, 1, 3, 4, 5, 3, 7, 9]));
