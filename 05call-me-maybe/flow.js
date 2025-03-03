
function flow(funcs) {
    return function (...arg) {
        for (const f of funcs) {
            Array.isArray(arg) ? arg = f(...arg) : arg = f(arg);
        }
        return arg;
    };
}

/* const sub32 = (el) => el - 32
const mult5 = (el) => el * 5
const div9 = (el) => el / 9
const roundDown = (el) => Math.floor(el)

const square = (nbr) => nbr * nbr
const add2 = (el) => el + 2
const mult2 = (el) => el * 2

const addAll = (...el) => el.length === 1 ? el[0] : el[0] + addAll(...el.slice(1))

const farenheitToCelsius = flow([sub32, mult5, div9, roundDown])
const add2Mult2Square = flow([add2, mult2, square])
const addAllThenConvertToCelsius = flow([addAll, farenheitToCelsius])

//Farenheit to Celsius

console.log(farenheitToCelsius(32) == 0)
console.log(farenheitToCelsius(0) == -18)
console.log(farenheitToCelsius(40) == 4)
console.log(farenheitToCelsius(50) == 10)
console.log(farenheitToCelsius(60) == 15)
console.log(farenheitToCelsius(100) == 37)
console.log()

// add2Mult2Square

console.log(add2Mult2Square(32) == 4624)
console.log(add2Mult2Square(0) == 16)
console.log(add2Mult2Square(40) == 7056)
console.log(add2Mult2Square(50) == 10816)
console.log(add2Mult2Square(60) == 15376)
console.log(add2Mult2Square(-100) == 38416)
console.log()

// addAllThenConvertToCelsius

console.log(addAllThenConvertToCelsius(20, 5, 6, 1) == 0)
console.log(addAllThenConvertToCelsius(-10, -10, 20) == -18)
console.log(addAllThenConvertToCelsius(10, 5, 5, 10, 5, 5) == 4)
console.log(addAllThenConvertToCelsius(25, 5, 20) == 10)
console.log(addAllThenConvertToCelsius(30, 30) == 15)
console.log(addAllThenConvertToCelsius(99, 1) == 37) */
