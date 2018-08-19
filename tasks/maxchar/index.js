function maxChar(str) {

    const charMap = {};
    let result = '';

    for (let i = 0; i < str.length; i++) {

        const char = str[i];

        charMap[char] = (charMap[char] || 0) + 1;

        if (result === '' || charMap[char] > charMap[result]) {
            result = char;
        }
    }

    return result;
}

console.log(maxChar('abccccd')); // c
console.log(maxChar('apple 11112')); // 1
