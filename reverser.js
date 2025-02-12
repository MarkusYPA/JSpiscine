//const arraysEqual = require('./utilities');

function reverse(arr) {

    if (Array.isArray(arr)) {
        for (let i = 0; i<(arr.length/2)-1; i++) {
            // Ye old XOR swap
            arr[i] = arr[arr.length-1-i] ^ arr[i];
            arr[arr.length-1-i] = arr[i] ^arr[arr.length-1-i]
            arr[i] = arr[arr.length-1-i] ^ arr[i];
    
            // More obvious way
            //const temp = arr[i];
            //arr[i] = arr[arr.length-1-i];
            //arr[arr.length-1-i] = temp;
        }
    }

    if (typeof arr === 'string') {
        result = '';
        for (let i = arr.length-1; i>=0; i--) {
            result += arr[i]
        }
        
        for (let i = 0; i < arr.length; i++) {
            arr[i] = result[i];
        }
        arr = result;
    }

    return arr;
}

/* console.log(arraysEqual(reverse([1, 2, 3]), [3, 2, 1]))
console.log(reverse([1, 2, 3]))

//t(({ eq, ctx }) => arraysEqual(reverse([1, eq, 3, ctx]), [ctx, 3, eq, 1]))

console.log(arraysEqual(reverse('pouet'), 'teuop'))
console.log(reverse('pouet'))

console.log(arraysEqual(reverse("salut c'est cool"), "looc tse'c tulas"))
console.log(reverse("salut c'est cool"))

let nums =  [1, 2, 3]
reverse(nums)
console.log(nums)

let word = "hello"
reverse(word)
console.log(word) */