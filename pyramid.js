function pyramid(str, num){
    let result = '';
    for (let i = 1; i<=num; i++) {
        for(let j= i; j<=num-1; j++){
            for(let k = 0; k<str.length; k++) {
                result += ' ';
            }            
        }
        for(let j= 0; j<(2*i-1); j++){
            result += str;
        }
        if (i!=num) {
            result += '\n';
        }
    }
    return result;
}

/* console.log(pyramid('#', 4))
console.log(pyramid('a', 5))
console.log(pyramid('+', 10))
console.log(pyramid('{}', 29)) */
