function countLeapYears(date) {
    const yr = date.getFullYear();
    let leaps = 0;
    for (let i = 4; i <= yr; i+=4) {
        if (yr % 100 !== 0 || yr % 400 === 0) {
            leaps++;
        }
    }
    return leaps;
}