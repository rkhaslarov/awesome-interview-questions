function isPalindrome(str = '') {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

function isPalindrome(str = '') {
    return str.split('').every((char, i) => char === str[str.length - i - 1]);
}

function isPalindrome(str = '') {

    const length = Math.floor(str.length / 2);

    for (let i = 0; i < length; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }

    return true;
}

function isPalindrome(str = '') {

  if (str[0] === str[str.length - 1]) {
    return str.length <= 1 ? true : isPalindrom(str.slice(1, -1))
  }

  return false;
}
