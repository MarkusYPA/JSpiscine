
function repeat(str, num) {
    let strOut = ''
    for (let i = 0; i < num; i++) {
        strOut += str
    }
    return strOut
}

/* console.log(repeat.length === 2)
console.log(repeat('a', 3) === 'aaa')
console.log(repeat('ba', 10) === 'babababababababababa')
console.log(repeat('pouet', 2) === 'pouetpouet')
console.log(repeat('haha', 1) === 'haha')
console.log(repeat('hehehe', 0) === '') */