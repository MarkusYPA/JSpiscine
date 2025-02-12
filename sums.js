//'use strict';

function size(arr) {
    let sum = 0;
    for (let e of arr) {
        sum += e;
    }
    return sum;
}

function partitions(target, min = 1, curPart = [], parts = []) {
    let sz = size(curPart);
    if (sz === target) {
        if (target !== 0) { // special case
            parts.push(curPart);
        }        
        return;
    }
    if (sz < target) {
        for (let i = min; i < target; i++) {
            let newPart = [...curPart, i];  // New current path, so same doesn't get modified
            partitions(target, i, newPart, parts);
        }
    }
}

function sums(num) {
    let parts = [];
    partitions(num, 1, [], parts);
    return parts;
}

//console.log(sums(0))
//console.log(sums(4))
//console.log(sums(7))
