
function isValid(date) {
    return (date instanceof Date) || isNaN(date.getTime());
}

function isAfter(date1, date2) {
    return getTime(date1) > getTime(date2);
}

function isBefore(date1, date2) {
    return !isAfter(date1, date2);
}

function isFuture(date) {
    return isAfter(Date.now() , date);
}

function isPast(date) {
    return !isFuture(date);
}