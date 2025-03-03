//Array.prototype.slice = undefined
//String.prototype.slice = undefined

//const arraysEqual = require('./utilities');

function slice(arr, start, end = arr.length) {
    if (start < 0 ) {
        start = arr.length + start
    }
    if (end < 0 ) {
        end = arr.length + end
    }

    if (typeof arr === 'string') {
        return sliceStr(arr, start, end);
    }
    if (Array.isArray(arr)) {
        return sliceArr(arr, start, end);
    }
}

function sliceStr(str, start, end = arr.length) {
    let outStr = "";
    for (let i = start; i < end; i++) {
        outStr += str[i];
    }
    return outStr;
}

function sliceArr(arr, start, end = arr.length) {
    let outArr = [];
    for (let i = start; i < end; i++) {
        outArr.push(arr[i]);
    }
    return outArr;
}

/* // handle String
console.log(slice('abcdef', 2) === 'cdef')
console.log(slice('abcdef', -2) === 'ef')
console.log(slice('abcdef', 0, 2) === 'ab')
console.log(slice('abcdef', 0, -2) === 'abcd')
console.log(slice('abcdef', 2, 4) === 'cd')
console.log(slice('abcdef', -3, -1) === 'de')

// handle Array
console.log(arraysEqual(slice([1, 2, 3, 4, 5, 6], 2), [3, 4, 5, 6]))
console.log(arraysEqual(slice([1, 2, 3, 4, 5, 6], -2), [5, 6]))
console.log(arraysEqual(slice([1, 2, 3, 4, 5, 6], 0, 2), [1, 2]))
console.log(arraysEqual(slice([1, 2, 3, 4, 5, 6], 0, -2), [1, 2, 3, 4]))
console.log(arraysEqual(slice([1, 2, 3, 4, 5, 6], 2, 4), [3, 4]))
console.log(arraysEqual(slice([1, 2, 3, 4, 5, 6], -3, -1), [4, 5])) */


