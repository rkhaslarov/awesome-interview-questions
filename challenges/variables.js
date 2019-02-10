/* eslint-disable */

/**
 * Referencing and variable definition types, the differences between them, hoisting, shadowing.
 */

function task1() {
    const a = { b: 1 };
    // a = {};
    a.b = 2;   
    console.log(a);
}

function task2() {
    let left = 'left';
    let right = 'right';
    
    {
        const temp = left;
        left = right;
        right = temp;
    }
    
    // console.log(temp);
    console.log(left, right);
}

function task3() {
    let outer = 'outer';

    {
        // console.log(outer);
        let outer = 'outer-inner';
        console.log(outer);
    }
    
    console.log(outer);
}

function task4() {
    var flag = 0;

    function foo() {
        if (true) {
            flag = 1;
        } else {
            var flag = -1;
        }
        return flag;
    }
    
    console.log(foo());
    console.log(flag);
}

function task5() {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 20);
    }
}
