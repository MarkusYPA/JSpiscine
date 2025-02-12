function chunk(arr, size){
    let result = [];
    let curr = [];
    for (let i = 0; i< arr.length; i++) {
        curr.push(arr[i]);
        if (curr.length == size) {
            result.push(curr);
            curr = [];
        }        
    }
    if (curr.length != 0) {
        result.push(curr);
    }

    return result
}

//console.log(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']])
//console.log(chunk(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']])