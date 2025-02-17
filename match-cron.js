function matchCron(str, date) {

    //let date = new Date();

    const crons = String(str).split(' ');
    const dateVals = [
        date.getMinutes(),
        date.getHours(),
        date.getDate(),
        date.getMonth()+1,
        date.getDay(),    
    ]

    for (let i = 0; i < crons.length; i++) {
        if (crons[i] != '*' && dateVals[i] != crons[i]) {
            return false;
        }

    }

    return true;
}


//console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00'))) // -> true
//console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00'))) // -> true
//console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00'))) // -> false


/* console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00')))

console.log(matchCron('* * * 2 *', new Date('2021-02-01 00:00:00')))
console.log(matchCron('* * 9 * *', new Date('2020-06-09 00:00:00')))

console.log(matchCron('* 3 * * *', new Date('2020-05-31 03:00:00')))
console.log(matchCron('1 * * * *', new Date('2020-05-30 19:01:00')))
console.log(matchCron('3 3 * 3 3', new Date('2021-03-03 03:03:00')))
console.log(matchCron('* * * * *', new Date())) */
//t(({ ctx }) => matchCron('* 7 * * *', new Date(`201${ctx}-01-01 07:00:00`)))

/* console.log()
console.log(!matchCron('* * * * 1', new Date('2020-06-02 00:00:00')))
console.log(!matchCron('* * * 2 *', new Date('2021-03-01 00:00:00')))
console.log(!matchCron('* * 8 * *', new Date('2020-06-09 00:00:00')))
console.log(!matchCron('* 2 * * *', new Date('2020-05-31 03:00:00')))
console.log(!matchCron('1 * * * *', new Date('2020-05-30 19:00:00')))
console.log(!matchCron('3 3 * 3 3', new Date('2021-03-02 03:03:00'))) */
//t(({ ctx }) => !matchCron('* 7 * * *', new Date(`201${ctx}-01-01 06:00:00`)))