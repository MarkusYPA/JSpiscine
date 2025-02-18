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
