

function indexOf(arr, val, opt = 0) {
    for (let i=opt; i<arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(arr, val, opt = arr.length) {
    for (let i=opt; i>=0; i--) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

function includes(arr, val) {
    return !(indexOf(arr, val) === -1);
}

console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2) === 1)
console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))

/*console.log(indexOf([0, 0, 2, 2], 2) === 2)
console.log(indexOf([1, 0, 0, 1], 1, 1) === 3)
console.log(indexOf([0, 0, 0, 0], 0, 0) === 0)

console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2) === 7)
console.log(lastIndexOf([0, 0, 3, 3], 3) === 3)
console.log(lastIndexOf([0, 0, 3, 3], 3, 3) === 3)
console.log(lastIndexOf([2, 0, 0, 2], 2, 2) === 0)

console.log(includes([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
console.log(includes([0, 0, 2, 2], 2)) */