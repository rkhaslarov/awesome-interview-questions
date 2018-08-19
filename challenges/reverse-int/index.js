// --- Description
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(int) {
    const reversedInt = parseInt(int.toString().split('').reverse().join(''));
    return int < 0 ? reversedInt * -1 : reversedInt;
}

function reverseInt(int) {
    const reversedInt = parseInt(int.toString().split('').reverse().join(''));
    return reversedInt * Math.sign(int);
}

console.log(reverseInt(51)); // 15
console.log(reverseInt(-51)); // -15
console.log(reverseInt(500)); // 5
console.log(reverseInt(-500)); // -5
