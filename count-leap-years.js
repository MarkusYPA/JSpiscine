function countLeapYears(date) {
    const yr = date.getFullYear();
    let leaps = 0;
    for (let i = 4; i < yr; i+=4) {
        if (i % 400 == 0 || i % 100 != 0) {
            if (i % 100 == 0) {
                console.log(i);
            }
            leaps++;
        }
        
    }
    return leaps;
}