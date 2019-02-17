// --- Description
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

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

    for (const char of str) {
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

// using in-place algorithm
function reverse5(s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        if (s[start] !== s[end]) {
            [s[start], s[end]] = [s[end], s[start]];
        }

        start++;
        end--;
    }
}

function reverse6(s) {
    for (let start = 0, end = s.length - 1; start < end; ++start, --end) {
        if (s[start] !== s[end]) {
            [s[start], s[end]] = [s[end], s[start]];
        }
    }
}

console.log(reverse('hello')); // olleh
console.log(reverse2('hello')); // olleh
console.log(reverse3('hello')); // olleh
console.log(reverse4('hello')); // olleh
console.log(reverse5(['H', 'a', 'n', 'n', 'a', 'h']));
console.log(reverse6(['H', 'a', 'n', 'n', 'a', 'h']));
