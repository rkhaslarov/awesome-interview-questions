// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
// Useful links:
// https://bit.ly/2wdDv0B
// https://bit.ly/2kFdtvR

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function fib2(n) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }

    return b;
}

function fib3(n) {
    const seq = [1, 1];

    for (let i = 2; i < n; i++) {
        seq[i] = seq[i - 1] + seq[i - 2];
    }

    return seq[n - 1];
}

console.log(fib(1)); // 1
console.log(fib2(4)); // 3
console.log(fib3(4)); // 3
