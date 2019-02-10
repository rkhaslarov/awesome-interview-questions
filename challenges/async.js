/**
 * Event loop, micro and macro tasks topics.
 * Describe the sequence of the logs.
 */
console.log('1');

Promise.resolve().then(() => {
    console.log('2');
}).then(() => {
    setTimeout(() => {
        console.log('8');
    }, 0);
    console.log('3');
});

setTimeout(() => {
    console.log('4');
}, 0);

Promise.resolve().then(() => {
    console.log('5');
}).then(() => {
    console.log('6');
    throw Error();
}).catch(() => {
    console.log('9');
});

console.log('7');
