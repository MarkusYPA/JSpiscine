/* String.prototype.split = undefined
String.prototype.match = undefined
RegExp.prototype.exec = undefined
Array.prototype.join = undefined

const arraysEqual = require('./utilities'); */

function separateChars(str){
    let result = [];
    for (let i = 0; i < str.length; i++) { 
        result.push(str[i]);
    }
    return result;
}

function split(str, div) {
    if (div === '') {
        return separateChars(str);
    }

    let offset = div.length;
    let result = [];
    let word = '';
    for (let i = 0; i < str.length; i++) {
        if (i <= (str.length - offset) && str.slice(i, i + offset) == div) {
            result.push(word);
            word = '';
            i += offset-1;
        } else {
            word += str[i];
        }
    }
    result.push(word);
    return result;
}

function join(arr, div = ',') {
    let result = '';
    for (let i = 0; i < arr.length; i++) { 
        result += arr[i];
        if (i != arr.length-1) {
            result += div;
        }
    }
    return result;
}

/* console.log(split('a b c', ' '), ['a', 'b', 'c'])
console.log(split('ggg - ddd - b', ' - '), ['ggg', 'ddd', 'b'])
console.log(split('ee,ff,g,', ','), ['ee', 'ff', 'g', ''])
console.log(split('Riad', ' '), ['Riad'])
console.log(split('rrrr', 'rr'), ['', '', ''])
console.log(split('rrirr', 'rr'), ['', 'i', ''])
console.log(split('Riad', ''), ['R', 'i', 'a', 'd'])
console.log(split('', 'Riad'), [''])

console.log(arraysEqual((split('a b c', ' '), ['a', 'b', 'c'])))
console.log(arraysEqual((split('ggg - ddd - b', ' - '), ['ggg', 'ddd', 'b'])))
console.log(arraysEqual((split('ee,ff,g,', ','), ['ee', 'ff', 'g', ''])))
console.log(arraysEqual((split('Riad', ' '), ['Riad'])))
console.log(arraysEqual((split('rrrr', 'rr'), ['', '', ''])))
console.log(arraysEqual((split('rrirr', 'rr'), ['', 'i', ''])))
console.log(arraysEqual((split('Riad', ''), ['R', 'i', 'a', 'd'])))
console.log(arraysEqual((split('', 'Riad'), ['']))) */

/* console.log(join(['ee', 'ff', 'g', ''], ',') === 'ee,ff,g,')
console.log(join(['ggg', 'ddd', 'b'], ' - ') === 'ggg - ddd - b')
console.log(join(['a', 'b', 'c'], ' ') === 'a b c') */