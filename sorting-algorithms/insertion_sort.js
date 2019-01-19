// Insertion sort is a step more complex but a bit more useful than bubble sort and is occasionally useful.
// The worst case scenario for it is similar to bubble sort's but its best case makes it suited
// for times when you're pretty sure a list almost sorted or likely already sorted.
//
// We're going to start at the beginning of the list and assume we have a sorted list of length 1
// where the first element is only sorted element. We're then going to grab the second element,
// and insert it into the correct spot in our sorted list, either the 0 index or the 1 index,
// depending if it's smaller or larger than our first element. We now have a sorted list of length 2.
// We then continue on down the line, inserting elements in our sorted side of the list as the unsorted
// side dwindles.
//
// What's the Big O? There's an inner loop that goes over your sorted list to find the correct place
// to insert your item, and an outer loop to go over all the numbers. Two loops means O(n²).
// However since if your list is sorted or nearly so, it can be O(n) in a best case scenario
// and thus well adapted to that scenario.

// The idea here is that the beginning of your list is sorted and the everything else is assumed to be an
// unsorted mess.
// The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is.
// The inner loop goes over the sorted part of the list and inserts it into the correct position in the array.

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

function insertionSort2(array) {
    const result = [...array];

    for (let i = 1; i < result.length; i++) { // loop through unsorted part of the array
        const temp = result[i];
        let j = i - 1;

        while (j >= 0 && result[j] > temp) { // find the index in sorted part of the array
            result[j + 1] = result[j];
            j--;
        }

        result[j + 1] = temp;
    }

    return result;
}

console.log(insertionSort([8, 1, 3, 10, 4, 5, 3, 7, 9]));
console.log(insertionSort2([8, 1, 3, 10, 4, 5, 3, 7, 9]));
