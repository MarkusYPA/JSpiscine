//const arraysEqual = require('./utilities');

function round(num) {
    let addition = 0.5;
    if (num < 0) {
        addition = -0.5;
    }
    return divide(num + addition, 1);
}

function ceil(num) {
    let addition = 1.0;
    if (num < 0) {
        addition = 0.0;
    }
    return divide(num + addition, 1);
}

function floor(num) {
    let addition = 0.0;
    if (num < 0) {
        addition = -1.0;
    }
    return divide(num + addition, 1);
}

function trunc(num) {
    return divide(num, 1);
}

/* const nums1 = [3.7, -3.7, 3.1, -3.1]
console.log(nums1)
console.log(nums1.map(round)) // [ 4, -4, 3, -3 ]
console.log(nums1.map(ceil)) // [ 4, -3, 4, -3 ]
console.log(nums1.map(floor)) // [ 3, -4, 3, -4 ]
console.log(nums1.map(trunc)) // [ 3, -3, 3, -3 ]


const nums = [Math.PI, -Math.PI, Math.E, -Math.E, 0];
console.log(arraysEqual(nums.map(round), [3, -3, 3, -3, 0]));
console.log(arraysEqual(nums.map(ceil), [4, -3, 3, -2, 0]));
console.log(arraysEqual(nums.map(floor), [3, -4, 2, -3, 0]));
console.log(arraysEqual(nums.map(trunc), [3, -3, 2, -2, 0])); */


function multiply(a, b) {
    let neg = false;
    if (b < 0) {
        neg = true;
        b = -b;
    }

    let result = 0;
    for (let i = 0; i < b; i++) {
        result += a;
    }

    if (neg) {
        return -result;
    }
    return result;
}

function divide(a, b) {
    let neg = false;
    if (b < 0) {
        neg = !neg;
        b = -b;
    }

    if (a < 0) {
        neg = !neg;
        a = -a;
    }

    let i = 0;
    let sum = b;
    while (sum < a) {
        sum += b;
        i++;
    }

    if (neg) {
        return -i;
    }
    return i;
}

function modulo(a, b) {
    return a - multiply(b, divide(a, b));
}