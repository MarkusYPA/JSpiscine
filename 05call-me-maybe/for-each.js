'using strict'

function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
}

const arr = [1, 2, 3, 4, 5, Math.random(), 7, 10, -10, 20, -95]



/* // callback is call with the item value
let result = []
let returned = forEach(arr, value => result.push(value))
console.log(JSON.stringify([returned, result]) == JSON.stringify([undefined, arr]))

// callback second parameter is the index
result = []
returned = forEach(arr, (_, index) => result.push(index))
console.log(JSON.stringify([returned, result]) == JSON.stringify([undefined, [...arr.keys()]]))

// callback third parameter is the array
result = []
returned = forEach(arr, (_, __, arr) => result.push(arr))
console.log(
    JSON.stringify([returned, result]) == JSON.stringify([undefined, Array(arr.length).fill(arr)],
    ))
 */