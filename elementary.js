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
    return a - multiply(b, divide(a,b));
}


/* console.log(multiply(34, 78) === 2652)
console.log(multiply(123, 0) === 0)
console.log(multiply(0, -230) === 0)
console.log(multiply(0, 0) === 0)
console.log(multiply(123, -22) === -2706)
console.log(multiply(-22, 123) === -2706)
console.log(multiply(-22, -123) === 2706)
console.log()

console.log(divide(34, 78) === 0)
console.log(divide(78, 34) === 2)
console.log(divide(123, 22) === 5)
console.log(divide(123, -22) === -5)
console.log(divide(-123, 22) === -5)
console.log(divide(-123, -22) === 5)
console.log()

console.log(modulo(34, 78) === 34)
console.log(modulo(78, 34) === 10)
console.log(modulo(123, 22) === 13)
console.log(modulo(123, -22) === 13)
console.log(modulo(-123, 22) === -13)
console.log(modulo(-123, -22) === -13)
 */