function RNA(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'G':
                result += 'C';
                break;
            case 'C':
                result += 'G';
                break;
            case 'T':
                result += 'A';
                break;
            case 'A':
                result += 'U';
                break;
        }
    }
    return result;
}

function DNA(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'C':
                result += 'G';
                break;
            case 'G':
                result += 'C';
                break;
            case 'A':
                result += 'T';
                break;
            case 'U':
                result += 'A';
                break;
        }
    }
    return result;
}


/* console.log(RNA(''), '')
console.log(RNA('TAGC'), 'AUCG')
console.log(RNA(DNA('AUCG')), 'AUCG')
console.log(RNA(DNA('CAUG')), 'CAUG')

console.log(DNA(''), '')
console.log(DNA('AUCG'), 'TAGC')
console.log(DNA(RNA('TAGC')), 'TAGC')
console.log(DNA(RNA('GCAT')), 'GCAT') */