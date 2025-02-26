/**
 * Basic throttle function - ensures a function is called at most once in a specified time period
 * @param {Function} fn - The function to throttle
 * @param {number} delay - The time in milliseconds to throttle invocations to
 * @returns {Function} - The throttled function
 */
function throttle(fn, delay) {
    let last = 0;

    return function () {
        const now = +new Date();
        if (now - last > delay) {   // If past delay, run function
            fn.apply(this, arguments);
            last = now;
        }
    };
}

/**
 * Advanced throttle function with options
 * @param {Function} fn - The function to throttle
 * @param {number} delay - The time in milliseconds to throttle invocations to
 * @param {Object} options - Configuration
 * @param {boolean} options.leading - invoke leading edge (default: false)
 * @param {boolean} options.trailing - invoke the trailing edge (default: true)
 * @returns {Function} - The throttled function
 */
function opThrottle(fn, delay, { leading = false, trailing = true } = {}) {
    let last = 0;
    let timer = null;

    return function () {
        const now = Date.now();    // number in ms
        const context = this;
        const args = arguments;

        // If first call and leading is false, update the timestamp without executing
        if (!last && !leading) {
            last = now;
        }

        // If past delay, run function
        if (now - last > delay) {
            // Reset timer
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }

            // Execute function and update timestamp
            fn.apply(context, args);
            last = now;
        }
        // Otherwise, if trailing is enabled and there's no timer yet
        else if (!timer && !trailing) {
            // Set up a timer for the trailing edge
            timer = setTimeout(() => {
                fn.apply(context, args);
                last = +new Date();
                timer = null;
            }, delay);
        }
    };
}