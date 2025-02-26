
// step = number of steps; start, end = points to interpolate between; callback = wah tyou run; duration = when you stop
function interpolation({ step, start, end, callback, duration } = {}) {

    const diff = (end - start) / step
    let i = 0
    const delay = duration / step

    let interp = setInterval(() => {
        if (i < step) {
            i++
            callback([start, delay * i])
            start += diff
        } else {
            clearInterval(interp);
        }
    }, delay);
}
