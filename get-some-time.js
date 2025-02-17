'use strict';

const days = [
    "Sunday",   // 0 1
    "Monday",   // 1 0
    "Tuesday",  // 2 6
    "Wednesday",// 3 5
    "Thursday", // 4 4
    "Friday",   // 5 3 
    "Saturday", // 6 2
]

function firstMonday(day) {
    if (day > 1){
        return 8-day; 
    } else {
        return 1-day;
    }
}

function formatCorrectly(date){
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const yyyy = date.getFullYear();
    let strY = String(yyyy)

    while (strY.length < 4) {
        strY = '0' + strY;
    }

    return `${dd}-${mm}-${strY}`;
}

function firstDayWeek(weekIn, yearIn) {
    let week = Number(weekIn);
    const year = Number(yearIn);

    const date = new Date(0);
    date.setUTCFullYear(year, 0, 1); // year, month, day
    const monday1 = firstMonday(date.getDay()); // First monday 0-7

    if (week == 1 && monday1 != 0) {
        return formatCorrectly(date);
    }

    if (monday1 == 0) {
        week++;
    }

    date.setDate(date.getDate() + monday1 + 7 * (week - 2));

    return formatCorrectly(date);
}

/* console.log(firstDayWeek(1, '1000'), '01-01-1000', (firstDayWeek(1, '1000') == '01-01-1000'))
console.log(firstDayWeek(52, '1000'), '22-12-1000', (firstDayWeek(52, '1000') == '22-12-1000'))
console.log(firstDayWeek(2, '0001'), '08-01-0001', (firstDayWeek(2, '0001') == '08-01-0001'))

console.log();

console.log(firstDayWeek(43, '1983'), '17-10-1983', (firstDayWeek(43, '1983') == '17-10-1983'))
console.log(firstDayWeek(23, '0091'), '04-06-0091', (firstDayWeek(23, '0091') == '04-06-0091'))
console.log(firstDayWeek(2, '2017'), '02-01-2017', (firstDayWeek(2, '2017') == '02-01-2017')) */