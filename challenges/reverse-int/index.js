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
    const reversedStr = int.toString().split('').reverse().join('');
    const reversedInt = parseInt(reversedStr, 10);
    return int < 0 ? reversedInt * -1 : reversedInt;
}

function reverseInt2(int) {
    const reversedStr = int.toString().split('').reverse().join('');
    const reversedInt = parseInt(reversedStr, 10);
    return reversedInt * Math.sign(int);
}

function reverseInt3(x) {
    let num = Math.abs(x);
    let result = 0;
    let rem = 0;

    while (num > 0) {
        rem = num % 10;
        result = result * 10 + rem;
        num = Math.floor(num / 10);
    }

    return x < 0 ? result * -1 : result;
}


console.log(reverseInt(51)); // 15
console.log(reverseInt(-51)); // -15
console.log(reverseInt2(500)); // 5
console.log(reverseInt2(-500)); // -5
console.log(reverseInt3(-51)); // -15
