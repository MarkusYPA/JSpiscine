'use strict'

function currify(f) {
    const nargs = f.length;
    const vargs = [];

    const curried = (...args) => vargs.push(...args) >= nargs
        ? f(...vargs.slice(0, nargs))
        : curried;

    return curried;
};



/* const mult2 = (el1, el2) => el1 * el2
const add3 = (el1, el2, el3) => el1 + el2 + el3
const sub4 = (el1, el2, el3, el4) => el1 - el2 - el3 - el4

const mult2Curried = currify(mult2)
console.log(mult2(2, 2)) // result expected 4
console.log(mult2Curried(2)(2)) // result expected 4

console.log(currify(mult2)(2)(5) == 10)
console.log(currify(mult2)(3)(6) == 18)
console.log(currify(mult2)(4)(7) == 28)
console.log(currify(add3)(1)(2)(3) == 6)
console.log(currify(add3)(4)(5)(11) == 20)
console.log(currify(add3)(4)(7)(10) == 21)
console.log(currify(sub4)(4)(7)(10)(30) == -43)
console.log(currify(sub4)(5)(17)(-10)(3) == -5)
console.log(currify(sub4)(3)(72)(-211)(99) == 43)
console.log(currify(sub4)(5)(7)(10)(26) == -38) */