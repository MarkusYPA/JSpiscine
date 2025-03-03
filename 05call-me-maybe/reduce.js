'use strict';
/* Array.prototype.reduce = undefined
Array.prototype.reduceRight = undefined */

function fold(arr, func, acc) {
    for (let e of arr) {
        acc = func(acc, e);
    }
    return acc;
}


function foldRight(arr, func, acc) {
    return fold([...arr].reverse(), func, acc)   // copy arr first?
}

function reduce(arr, func) {
    if (arr.length == 0) {
        throw new Error();
    }
    return fold([...arr].slice(1), func, arr[0]);
}

function reduceRight(arr, func) {
    return reduce([...arr].reverse(), func);
}


/* const adder = (a, b) => a + b
const ifOdd = (a, b) => (b % 2 === 0 ? a + 2 : a * 2)
const concatenate = (a = '', b) => a.concat(b)
const merger = (a, b) => ({ ...a, ...b })

const num1 = [3, 10, 26, 0]
const num2 = [4, 24, 10, 25]
const str1 = ['This ', 'is ', 'a ', 'simple ', 'example']
const str2 = 'The quick brown fox jumped over the lazy dog'
   .split(' ')
   .map((x) => (x += ' '))
const obj = [{ a: 12 }, { b: 6, c: { d: 2, e: 3 } }, { f: 'hello' }]



console.log(fold(num1, adder, 0) == 39)
console.log(fold(str1, concatenate, '-> ') == '-> This is a simple example')
console.log(fold(num1, ifOdd, 0) == 6)

console.log(fold(num1, adder, 4) == 43)
console.log(
    fold(str2, concatenate, '') == 
    'The quick brown fox jumped over the lazy dog ',
)
console.log(fold(num1, ifOdd, 10) == 26)

console.log(foldRight(num1, adder, 0) == 39)
console.log(foldRight(str1, concatenate, '-> ') == '-> examplesimple a is This ')
console.log(foldRight(num1, ifOdd, 0) == 12)

console.log(foldRight(num1, adder, 4) == 43)
console.log(
    foldRight(str2, concatenate, 'This is almost understandable. ') ==
    'This is almost understandable. dog lazy the over jumped fox brown quick The ',
)
console.log(foldRight(num1, ifOdd, 10) == 32)

console.log(reduce(num1, adder) == 39)
console.log(reduce(num2, adder) == 63)
console.log(reduce(str1, concatenate) == 'This is a simple example')

console.log(
    reduce(str2, concatenate) ==
    'The quick brown fox jumped over the lazy dog ',
)

console.log(JSON.stringify(reduce(obj, merger)) == JSON.stringify({
    a: 12,
    b: 6,
    c: { d: 2, e: 3 },
    f: 'hello',
}))

console.log(reduceRight(num1, adder) == 39)

console.log(reduceRight(num2, adder) == 63)
console.log(reduceRight(str1, concatenate) == 'examplesimple a is This ')
console.log(
    reduceRight(str2, concatenate) ==
    'dog lazy the over jumped fox brown quick The ',
)

console.log(JSON.stringify(reduceRight(obj, merger)) == JSON.stringify({
    f: 'hello',
    b: 6,
    c: { d: 2, e: 3 },
    a: 12,
})) */
