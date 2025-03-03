function triangle(str, num){
    let result = '';
    for (let i = 1; i<=num; i++) {
        for(let j= 0; j<i; j++){
            result += str;
        }
        if (i!=num) {
            result += '\n';
        }
    }
    return result;
}

/* console.log(triangle('#', 4))
console.log(triangle('a', 5))
console.log(triangle('+', 10))
console.log(triangle('{}', 29)) */