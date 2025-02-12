/* const add4 = '+4'
const mul2 = '*2'

const paths = new Map(); */

function findExpression(num) {
    if ((num + 1) % 4 == 0) {
        return undefined;
    }

    return findIt(num);
}

function findIt(target, value = 1, curPath = '') {
    if (value == target) {
        return curPath;
    }

    if (value > target) {
        return 'miss';
    }

    let path1 = findIt(target, value + 4, curPath + ' ' + add4);
    let path2 = findIt(target, value * 2, curPath + ' ' + mul2);

    if ((path1.length < path2.length && path1 !== 'miss') || path2 === 'miss') {
        return path1;
    }

    return path2;
}


/* console.log(findExpression(14));

console.log(findExpression(8), 8)
console.log(findExpression(14), 14)
console.log(findExpression(60), 60)
console.log(findExpression(100), 100)
console.log(findExpression(100), 100)
console.log(findExpression(280), 280)
console.log(findExpression(110), 110)
console.log(findExpression(144), 144)
console.log(findExpression(200), 200)
console.log(findExpression(104), 104)

console.log(findExpression(7), undefined)
console.log(findExpression(63), undefined)
console.log(findExpression(23), undefined)
console.log(findExpression(103), undefined) */