function isPositive(num){
    return (num > 0)
}

function abs(num) {
    if (isPositive(num) || num == 0) {
        return num
    } else {
        return (num * -1)
    }
}

/* console.log(isPositive(-1))
console.log(isPositive(0))
console.log(isPositive(1))

console.log(abs(-1))
console.log(abs(0))
console.log(abs(1)) */
