'using strict'

function map(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i], i, arr));  // func gets three arguments again
    }
    return newArr;
}

function flatMap(arr, func) {
    let mappedArr = map(arr, func);
    let flatArr = [];
    for (const e of mappedArr) {
        if (Array.isArray(e)) {
            flatArr.push(...e);
        } else {
            flatArr.push(e);
        }        
    }
    return flatArr;
}


const numbers = [10, -10, 20, -95, 86, 102, 35, 89, 110]
const mixed = [[10], -10, 20, -95, 86, [102], [35, 89], 110]
const nested = [[5], [4], [-3], [20], [17], [-33], [-4], [18]]
const sentences = [
    ['Colombia', 'Mexico', 'El Salvador', 'Spanish speaking countries'],
    ['Perou', 'Brazil', 'Argentina', 'Venezuela', 'countries in South America'],
    ['France', 'Portugal', 'Italy', 'members of the EU'],
]

const add1 = (el) => el + 1
const sub3 = (el) => el - 3
const mult2 = (el) => el * 2

const doAll = (el) => sub3(mult2(add1(el)))
const posValsIndex = (el, i) => (el >= 0 ? `${i}: ${el}` : undefined)
const indexValsArray = (el, i, arr) =>
    `${el} is at index: ${i} out of ${arr.length - 1}`

const arrayFormatSentence = (item, index, arr) => {
    if (index === arr.length - 2) return `and ${arr[arr.length - 2]} `
    if (index === arr.length - 1) {
        return `are ${String(arr.length - 1)} ${item}.`
    }
    return `${item}, `
}

// map
/* console.log(JSON.stringify(map(numbers, add1)))
console.log(JSON.stringify([11, -9, 21, -94, 87, 103, 36, 90, 111]))
console.log(JSON.stringify(map(numbers, add1)) == JSON.stringify([11, -9, 21, -94, 87, 103, 36, 90, 111]))
console.log(JSON.stringify(map(numbers, mult2)) == JSON.stringify([20, -20, 40, -190, 172, 204, 70, 178, 220]))
console.log(JSON.stringify(map(numbers, sub3)) == JSON.stringify([7, -13, 17, -98, 83, 99, 32, 86, 107]))
console.log(JSON.stringify(map(numbers, doAll)) == JSON.stringify([19, -21, 39, -191, 171, 203, 69, 177, 219]))
 */
/* console.log(JSON.stringify(map(numbers, posValsIndex)) == JSON.stringify([
    '0: 10',
    undefined,
    '2: 20',
    undefined,
    '4: 86',
    '5: 102',
    '6: 35',
    '7: 89',
    '8: 110',
])
)

console.log('here 1')

console.log(JSON.stringify(map(numbers, indexValsArray)) == JSON.stringify([
    '10 is at index: 0 out of 8',
    '-10 is at index: 1 out of 8',
    '20 is at index: 2 out of 8',
    '-95 is at index: 3 out of 8',
    '86 is at index: 4 out of 8',
    '102 is at index: 5 out of 8',
    '35 is at index: 6 out of 8',
    '89 is at index: 7 out of 8',
    '110 is at index: 8 out of 8',
])
)

console.log(map(sentences[0], arrayFormatSentence).join('') == 'Colombia, Mexico, and El Salvador are 3 Spanish speaking countries.')
console.log(map(sentences[1], arrayFormatSentence).join('') == 'Perou, Brazil, Argentina, and Venezuela are 4 countries in South America.')
console.log(map(sentences[2], arrayFormatSentence).join('') == 'France, Portugal, and Italy are 3 members of the EU.')


// map should not flat
console.log(map([1, 2, 3], (n) => [n, n]),
    [
        [1, 1],
        [2, 2],
        [3, 3],
    ]
) */


// flatMap

// flatMap should flatten the result of map
/* console.log(
    flatMap([1, 2, 3], (n) => [n, n]),
    [1, 1, 2, 2, 3, 3]
) */


/* console.log(JSON.stringify(flatMap(mixed, add1)) == JSON.stringify(['101', -9, 21, -94, 87, '1021', '35,891', 111])
)

console.log(JSON.stringify(flatMap(mixed, posValsIndex)) == JSON.stringify([
    '0: 10',
    undefined,
    '2: 20',
    undefined,
    '4: 86',
    '5: 102',
    undefined,
    '7: 110',
])
)

console.log(JSON.stringify(flatMap(nested, indexValsArray)) == JSON.stringify([
    '5 is at index: 0 out of 7',
    '4 is at index: 1 out of 7',
    '-3 is at index: 2 out of 7',
    '20 is at index: 3 out of 7',
    '17 is at index: 4 out of 7',
    '-33 is at index: 5 out of 7',
    '-4 is at index: 6 out of 7',
    '18 is at index: 7 out of 7',
])
) */
