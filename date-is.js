

function isValid(date) {
    if (typeof date == 'string') return false;

    if (!(date instanceof Date)) {
        let newDate = new Date(date)
        return (newDate instanceof Date && !isNaN(newDate.getTime()));
    }

    return (date instanceof Date && !isNaN(date.getTime()));
}


function newDateGoes(date) {
    if (!isValid(date)) {
        return false;
    }

    let nd = new Date(date);
    return (nd instanceof Date && !isNaN(nd.getTime()))
}

function isAfter(date1, date2) {
    if (newDateGoes(date1) && newDateGoes(date2)) {
        return new Date(date1).getTime() > new Date(date2).getTime();
    }

    if (isValid(date1) && isValid(date2)) {
        return date1.getTime() > date2.getTime();
    } else {
        return false;
    }

}

function isBefore(date1, date2) {
    if (isValid(date1) && isValid(date2)) {
        return !isAfter(date1, date2);
    } else {
        return false;
    }    
}

function isFuture(date) {  
    if (isValid(date)) {
        return isAfter(date, Date.now());
    } else {
        return false;
    }
}

function isPast(date) {      
    if (isValid(date)) {
        return !isFuture(date);  
    } else {
        return false;
    }
}


// is the date a valid date?
/* const invalid = (callback, ary = 1) => {
    for (const s of [
        `new Date('')`,
        `new Date(NaN)`,
        `''`,
        `'2013-01-01'`,
        `NaN`,
    ]) {
        if (callback(...Array(ary).fill(eval(s)))) {
            //throw Error(`${callback.name}(${s}) should be false`)
            console.log(`${callback.name}(${s}) should be false`)
        }
    }
}


// isValid
console.log(!invalid(isValid))
console.log(isValid(new Date()))
console.log(isValid(Date.now()))
console.log(isValid(new Date('December 17, 1995 03:24:00')))
console.log(isValid(new Date(1488370835081)))
console.log(isValid(new Date('1995-12-17T03:24:00')))
console.log(isValid(new Date('1995-12-17T03:24:00').getTime()))
  
  // isAfter
console.log('after')
console.log(!invalid(isAfter, 2))
console.log(!isAfter(new Date('1992-01-01'), new Date('1992-01-02')))
console.log(!isAfter(new Date('2157-11-07'), new Date('2183-04-16')))
console.log(isAfter(new Date(2321, 11, 21), new Date(Date.now())))
console.log(isAfter(123123, 526))
  
  // isBefore
  console.log('before')
console.log(!invalid(isBefore, 2))
console.log(!isBefore(new Date(2321, 11, 21), new Date(Date.now())))
console.log(!isBefore(123123, 526))
console.log(isBefore(new Date('1992-01-01'), new Date('1992-01-02')))
console.log(isBefore(new Date('2157-11-07'), new Date('2183-04-16')))
  
  // isFuture
  console.log('future')
console.log(!invalid(isFuture))

console.log(!isFuture(new Date('1992-01-01')))
console.log(!isFuture(new Date(Date.now() - 1)))
console.log(isFuture(new Date(2077, 11, 31)))
console.log(isFuture(new Date(Date.now() + 1)))
  
  // isPast
  console.log('past')
console.log(!invalid(isPast))
console.log(!isPast(new Date(Date.now() + 1)))
console.log(!isPast(new Date(2077, 11, 31)))
console.log(isPast(new Date(1442, 11, 31)))
console.log(isPast(new Date(Date.now() - 1))) */