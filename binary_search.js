const binarySearch = (array, value) => {

    let guess,
        min = 0,
        max = array.length - 1;

    while (min <= max) {

        guess = Math.floor((min + max) / 2);

        if (array[guess] === value) {
            return guess;
        } else if(array[guess] < value) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
     }

     return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 10, 12], 6));
