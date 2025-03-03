function cutFirst(str){
    return str.slice(2);
}

function cutLast(str){
    return str.slice(0,-2)
}

function cutFirstLast(str){
    return str.slice(2, -2);
}

function keepFirst(str){
    return str.slice(0,2);
}

function keepLast(str){
    return str.slice(-2);
}

function keepFirstLast(str){
    if (str.length < 5) {
        return str;
    }
    return keepFirst(str) + keepLast(str);
}

/* console.log(cutFirst('abcdef') === 'cdef')
console.log(cutFirst('a') === '')

console.log(cutLast('abcdef') === 'abcd')
console.log(cutLast('a') === '')

console.log(cutFirstLast('abcdef') === 'cd')
console.log(cutFirstLast('af') === '')
console.log(cutFirstLast('afd') === '')
console.log(cutFirstLast('yoafdyo') === 'afd')

console.log(keepFirst('abcdef') === 'ab')
console.log(keepFirst('a') === 'a')

console.log(keepLast('abcdef') === 'ef')
console.log(keepLast('a') === 'a')

console.log(keepFirstLast('abcdef') === 'abef')
console.log(keepFirstLast('af') === 'af')
console.log(keepFirstLast('afd') === 'afd')
console.log(keepFirstLast('yoafdyo') === 'yoyo') */