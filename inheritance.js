// Functional inheritance

function A() {
    this.sayHi = () => 'Hi, Functional inheritance!';
}

function B() {
    A.call(this);
}

const b = new B();

console.log(b.sayHi());

// Prototype inheritance

function C(){}

C.prototype.sayHi = () => 'Hi, Prototype inheritance!';

function D(){}

function extend(Child, Parent) {
    function Temp() {}
    Temp.prototype = Parent.prototype;
    Child.prototype = new Temp();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype
}

extend(D, C);

C.prototype.sayBye = () => 'Bye, Prototype inheritance!';

const d = new D();

console.log(d.sayHi());
console.log(d.sayBye());

// ES6 classes

class E {
    sayHi() {
        return 'Hi, ES6!'
    }
}

class F extends E {}

const f = new F();

console.log(f.sayHi());
