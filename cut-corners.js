/* const arraysEqual = require('./utilities');
Math.round = Math.ceil = Math.floor = Math.trunc = undefined */

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

/* console.log(divide(0,1))
console.log(divide(-3,1))
console.log(divide(3,1))
console.log(divide(-3.53,1))
console.log(divide(3.23,1))

const nums1 = [3.7, -3.7, 3.1, -3.1]
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

function divide(a, b) {
    if (b == 0) {
        return 0;
    }

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