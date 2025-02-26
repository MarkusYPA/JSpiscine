
/**
 * 
 * @param {number} count - max *re*tries 
 * @param {Function} callback - async funtion invoked at every attempt
 * @returns {Function} - invokes callback, passes arguments to it and returns the same thing, catching errors
 */
function retry(count, callback) {

    return async function (...args) {
        let attempts = 0

        while (attempts <= count) {
            try {
                return await callback(...args)
            } catch (error) {
                attempts++
                if (attempts > count) {
                    throw error
                }
            }
        }
    }
}

/**
 * 
 * @param {number} delay - max waiting time
 * @param {Function} callback - async function to be invoked
 * @returns {Function} - invokes returns from callback (passing args), if nothing before delay, return Error('timeout')
 */
function timeout(delay, callback) {

    return async function (...args) {

        // Create a promise that only rejects after the delay
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('timeout')), delay);
        });

        // Race the callback against the timeout
        return Promise.race([
            callback(...args),
            timeoutPromise
        ]);
    };
}
