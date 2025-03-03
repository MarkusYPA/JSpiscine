'using strict'

function longWords(arr) {
    return arr.every((ele) => typeof ele == 'string' && ele.length > 4)
}

function oneLongWord(arr) {
    return arr.some((ele) => typeof ele == 'string' && ele.length > 10)
}

function noLongWords(arr) {
    return arr.every((ele) => !(typeof ele == 'string' && ele.length > 6))
}


/* let arr1 = ['fill', 'carbon', 'chart', 'glare', 'express']
let arr2 = ['double', 'afford', 'coalition', 'reaction', 'persist']
let arr3 = ['leak', 'talk', 'bite', 'slip', 'free']
let arr4 = ['fixture', 'opponent', 'coincide', 'residential', 'relaxation'] */

/* console.log(longWords(arr1) == false)
console.log(longWords(arr2) == true)
console.log(longWords(arr3) == false)
console.log(longWords(arr4) == true)

console.log(oneLongWord(arr1) == false)
console.log(oneLongWord(arr2) == false)
console.log(oneLongWord(arr3) == false)
console.log(oneLongWord(arr4) == true) */

/* console.log(noLongWords(arr1) == false)
console.log(noLongWords(arr2) == false)
console.log(noLongWords(arr3) == true)
console.log(noLongWords(arr4) == false) */