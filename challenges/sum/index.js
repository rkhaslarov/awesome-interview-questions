// --- Directions
// Implement the function sum for adding given numbers, as shown by the examples.
// Hint: use valueOf or toString
// --- Examples
//   sum(1)(2)(5)(10) --> 18
//   sum(1)(2)(5)(10)() --> 18
//   sum(1)(2) --> 3

function sum(orig) {

    let result = orig;

    const func = val => {

        if (val !== undefined) {
            result = result + val;
        }

        return func;
    }

    func.valueOf = () => result;

    return func;
}

function sum(orig) {
    const func = val => sum(orig + val);
    func.valueOf = () => orig;
    return func;
}

// Without valueOf/toString it works only with the last empty call.
// function sum(num) {
//
//     let result = num;
//
//     const func = function(num) {
//
//         if (num === undefined) {
//             return result;
//         }
//
//         result = result + num;
//         return func;
//     }
//
//     return func;
// }

console.log(sum(1)(2)(5)(10)()); // 18
