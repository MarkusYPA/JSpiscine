function dayOfTheYear(date) {

    const yr = date.getFullYear();
    const date0 = new Date(0);
    date0.setUTCFullYear(yr, 0, 1); // Year, January 1st

    const diffInMs = date.getTime() - date0.getTime();
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}