/*
    The bind() function creates a new function (a bound function) with the same function body
    (internal call property in ECMAScript 5 terms) as the function it is being called on
    (the bound function's target function) with the this value bound to the first argument of bind(),
    which cannot be overridden.
*/

const foo = {
    name: 'Bar',
    sayHello: function() {
        console.log('Hi, ' + ' ' + this.name);
    }
};

Function.prototype.bind = function(context) {

    if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    const func = this;
    const previousArgs = [].slice.call(arguments, 1);

    return function(){
        const currentArgs = [].slice.call(arguments);
        return func.apply(context, [].concat(previousArgs, currentArgs));
    };
};

const sayHello = foo.sayHello.bind(foo);

console.log(sayHello());

// You can of course binds multiple arguments, so:
const sum = function(a, b, c) { return a + b + c };
const sumAB = sum.bind(null, 1, 5);
const sumC = sumAB.bind(null, 2);

console.log(sumC());
