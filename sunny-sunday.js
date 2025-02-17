'use strict';

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

function sunnySunday(date) {
    const date0 = new Date(0);
    date0.setUTCFullYear(1, 0, 1);
    const diffInMs = date.getTime() - date0.getTime();
    const daysSince0 = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    return days[daysSince0 % 6];
}

/* console.log(sunnySunday(new Date('0001-01-01')), 'Monday')
console.log(sunnySunday(new Date('0001-01-02')), 'Tuesday')
console.log(sunnySunday(new Date('0001-01-03')), 'Wednesday')
console.log(sunnySunday(new Date('0001-01-04')), 'Thursday')
console.log(sunnySunday(new Date('0001-01-05')), 'Friday')
console.log(sunnySunday(new Date('0001-01-06')), 'Saturday')
console.log(sunnySunday(new Date('0001-01-07')), 'Monday')
console.log(sunnySunday(new Date('0001-12-01')), 'Friday')
console.log(sunnySunday(new Date('1664-08-09')), 'Saturday')
console.log(sunnySunday(new Date('2020-01-01')), 'Monday')
console.log(sunnySunday(new Date('2048-12-08')), 'Thursday') */