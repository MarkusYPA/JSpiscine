function debounce(func, delay = 0) {
    // delays func every time by delay milliseconds

    let timeout;

    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), delay);
    };
}

function opDebounce(func, delay, options = {}) {
    let timer = null;
    let first = true;
    const leading = !!options.leading;  // double inversion creates boolean

    return function (...args) {
        const context = this;

        if (first && leading) {
            func.apply(context, args);
            first = false;
        }

        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}