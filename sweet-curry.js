'use strict'

function mult2(a) {
    return (b) => a * b
}

function add3(a) {
    return (b) => (c) => a + b + c;
}

function sub4(a) {
    return (b) => (c) => (d) => a - b - c - d;
}


/* console.log(mult2.length === 1)
console.log(add3.length === 1)
console.log(sub4.length === 1)
console.log()

console.log(mult2(2)(5) == 10)
console.log(mult2(3)(6) == 18)
console.log(mult2(4)(7) == 28)
console.log(add3(1)(2)(3) == 6)
console.log(add3(4)(5)(11) == 20)
console.log(add3(4)(7)(10) == 21)
console.log(sub4(4)(7)(10)(30) == -43)
console.log(sub4(5)(17)(-10)(3) == -5)
console.log(sub4(3)(72)(-211)(99) == 43)
console.log(sub4(5)(7)(10)(26) == -38) */
