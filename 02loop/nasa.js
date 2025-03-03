function nasa(N) {
    let result = '';
    for (let i = 1; i <= N; i++) {
        let toAdd = String(i);
        if (i % 3 == 0) {
            toAdd = 'NA';
        }
        if (i % 5 == 0) {
            toAdd = 'SA';
        }
        if (i % 3 == 0 && i % 5 == 0) {
            toAdd = 'NASA';
        }
        result += toAdd;
        if (i < N) {
            result += ' ';
        }
    }
    return result;
}

//console.log(nasa(15))
//console.log('1 2 NA 4 SA NA 7 8 NA SA 11 NA 13 14 NASA')