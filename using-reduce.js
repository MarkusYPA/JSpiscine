'using strict'

function adder(nums, init = 0) {
    return nums.reduce((acc, n) => acc + n, init);
}

function sumOrMul(nums, init = 0) {
    return nums.reduce((acc, n) => {
        if (n % 2 == 0) {
            return acc * n;
        } else {
            return acc + n;
        }
    }, init);
}

function funcExec(funcs, init = 0) {
    return funcs.reduce((acc, f) => f(acc), init)
}



/* const fArr1 = [
    (x) => x + 2,
    (x) => x ** 2,
    (x) => x - 7,
    (x) => `result: [${x}]`,
]

const fArr2 = [
    (x) => x + 20,
    (x) => x * 3,
    (x) => {
        return {
            result: x,
            isOdd: x % 2 === 0,
        }
    },
] */


/* console.log(adder([1, 2, 3, 4]) == 10)
console.log(adder([9, 24, 7, 11, 3], 10) == 64)
console.log(adder([]) == 0) */
/* console.log(sumOrMul([29, 23, 3, 2, 25]) == 135)
console.log(sumOrMul([18, 17, 7, 13, 25], 12) == 278)
console.log(sumOrMul([8, 16, 7, 0, 32]) == 0)
console.log(sumOrMul([8, 16, 7, 0, 31]) == 31) */
//console.log(funcExec(fArr1, 10) == `result: [137]`)
//console.log(JSON.stringify(funcExec(fArr2, 4)) == JSON.stringify({ result: 72, isOdd: true }))


