//const arraysEqual = require('./utilities');

function groupPrice(str) {
    const re = /(USD|\$)\d+\.\d\d/g;
    const reDoll = /(?<=(USD|\$))\d+/g;
    const reCent = /(?<=\.)\d{2}/g;
    
    let matches = String(str).match(re);
    if (matches == null) {
        return [];
    }

    let out = [];
    for (let m of matches) {
        let price = [];
        price.push(m);
        let matchesD = String(m).match(reDoll);
        price.push(matchesD[0]);
        let matchesC = String(m).match(reCent);
        price.push(matchesC[0]);

        out.push(price);
    }

    return out;
}

/* console.log(groupPrice('The price of the cereals is $4.00.'), [['$4.00', '4', '00']])
console.log(groupPrice('the total is USD19.98'), [['USD19.98', '19', '98']])
console.log(groupPrice('excuse me sir it is missing $0.45'), [['$0.45', '0', '45']])
console.log(groupPrice('excuse me sir here is your change $99.20'), [
    ['$99.20', '99', '20'],
])
console.log(groupPrice('this, 0.32, is not a match'), [])
console.log(groupPrice('product one its $9.98 and the second one its $10.20'), [
    ['$9.98', '9', '98'],
    ['$10.20', '10', '20'],
]) */
