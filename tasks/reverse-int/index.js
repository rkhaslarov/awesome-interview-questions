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
