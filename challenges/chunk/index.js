// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}

function chunk2(array, size) {
    return array.reduce((chunked, current) => {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
            chunked.push([current]);
        } else {
            last.push(current);
        }

        return chunked;
    }, []);
}

function chunk3(array, size) {
    return array.reduce((chunked, current, index) => {
        const chunkIndex = Math.floor(index / size);

        if (!chunked[chunkIndex]) {
            chunked[chunkIndex] = [];
        }

        chunked[chunkIndex].push(current);

        return chunked;
    }, []);
}

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk2([1, 2, 3, 4], 2));
console.log(chunk3([1, 2, 3, 4], 2));
