// This is often the easiest to conceptualize and a natural way
// for the brain to think about sorting so it's typical to do bubble sort first.
// It's also amongst the least efficient in terms of worst case scenario.
//
// In bubble sort, we're going to loop through the array and compare each index with the index next to it.
// If the those two numbers are out of order (the lesser index's value is greater than the greater index's value)
// we swap those two numbers' places in the array. We keep looping over that array until everything is
// in place and nothing was swapped during the last iteration.
//
// What's the Big O on this? Well, there's an inner loop to check to see if indexes need to be swapped,
// and an outer loop that's just checking to see if anything was swapped.
// That would be make it O(n²). Not efficient, but a great learning tool.
// You'll never use bubble sort for anything serious.

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

        if (isSorted) { break; }
    }

    return result;
}

function bubbleSort2(array) {
    const result = [...array];

    let swapped = false;

    do {
        swapped = false;

        for (let i = 0; i < array.length; i++) {
            const prev = result[i - 1];
            const next = result[i];

            if (prev > next) {
                swapped = true;
                swap(result, i - 1, i);
            }
        }
    } while (swapped);

    return result;
}

console.log(bubbleSort([8, 1, 3, 10, 4, 5, 3, 7, 9]));
console.log(bubbleSort2([8, 1, 3, 10, 4, 5, 3, 7, 9]));
