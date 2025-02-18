'use strict'
//Array.prototype.some = Array.prototype.every = undefined

function countFounds(arr, func){
    let founds = 0;
    for (const e of arr) {
        if (func(e)) founds++
    }
    return founds
}

function every(arr, func) {
    return countFounds(arr, func) == arr.length;
}

function some(arr, func) {
    return countFounds(arr, func) > 0;
}

function none(arr, func) {
    return countFounds(arr, func) == 0;
}

/* const small = [3, 6, 1, 7, 2]
const mixed = [23, 4, 10, 25, 6]
const big = [43, 30, 16, 57, 10]
const greaterEq10 = (n) => n >= 10

console.log(some(small, greaterEq10) == false)
console.log(some(mixed, greaterEq10) == true)
console.log(some(big, greaterEq10) == true)

console.log(every(small, greaterEq10) == false)
console.log(every(mixed, greaterEq10) == false)
console.log(every(big, greaterEq10) == true)

console.log(none(small, greaterEq10) == true)
console.log(none(mixed, greaterEq10) == false)
console.log(none(big, greaterEq10) == false)

// the function should not be called more than needed
let count = 0
some(big, () => ++count > 2)
console.log(count, 3)

count = 0
every(big, () => ++count < 3)
console.log(count, 3)

count = 0
none(big, () => ++count > 2)
console.log(count, 3) */

