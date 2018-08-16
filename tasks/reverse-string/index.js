// using for loop
function reverse(str) {

    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

// using for of loop
function reverse2(str) {

    let result = '';

    for (let char of str) {
        result = char + result;
    }

    return result;
}

// using built-in reverse method
function reverse3(str) {
    return str.split('').reverse().join('');
}

// using reduce method
function reverse4(str) {
    return str.split('').reduce((result, char) => char + result, '');
}

console.log(reverse('hello')); // olleh
console.log(reverse2('hello')); // olleh
console.log(reverse3('hello')); // olleh
console.log(reverse4('hello')); // olleh
