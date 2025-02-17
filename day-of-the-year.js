function dayOfTheYear(date) {

    const yr = date.getFullYear();
    const date0 = new Date(0);
    date0.setUTCFullYear(yr, 0, 1); // Year, January 1st

    const diffInMs = date.getTime() - date0.getTime();
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24)) + 1;
}

/* console.log(dayOfTheYear(new Date('0001-01-01')), 1)
console.log(dayOfTheYear(new Date('1664-08-09')), 222)
console.log(dayOfTheYear(new Date('1600-12-31')), 366)
console.log(dayOfTheYear(new Date('2020-06-22')), 174)
console.log(dayOfTheYear(new Date('2048-12-08')), 343)
console.log(dayOfTheYear(new Date('2048-11-08')), 313) */