//Array.prototype.flat = undefined
'use strict';

// remove a given number of levels from array, starting from the base level
function flat(arr, toRemove = 1) {

    // Default case where we exit
    if (toRemove === 0) {
        return arr;
    }

    // Simplest way to update the array while flattening is to create a new ne
    let newArray = [];
    for (let i = 0; i< arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let e of arr[i]) {
                newArray.push(e);
            }
        } else {
            newArray.push(arr[i]);
        }
    }

    // Count arrays left in so we don't continue needlessly
    let arrays = 0;
    for (let i = 0; i< newArray.length; i++) {
        if (Array.isArray(newArray[i])) {
            arrays++;
        }
    }

    if (arrays) {
        newArray = flat(newArray, toRemove-1);
    }

    return newArray;
}

/* console.log(flat([1]), [1])
console.log(flat([1, [2]]), [1, 2])
console.log(flat([1, [2, [3]]]), [1, 2, [3]])
console.log(flat([1, [2, [3], [4, [5]]]], 1), [1, 2, [3], [4, [5]]])
console.log(flat([1, [2, [3], [4, [5]]]], 2), [1, 2, 3, 4, [5]])
console.log(flat([1, [2, [3], [4, [5]]]], 3), [1, 2, 3, 4, 5])
console.log(flat([1, [2, [3], [4, [5]]]], Infinity), [1, 2, 3, 4, 5]) */
