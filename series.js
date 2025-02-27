/**
 * 
 * @param {Array} funcs 
 * @returns Array
 */
async function series(funcs) {
    let results = []
    for (const fn of funcs) {
        results.push(await fn())
    }
    return results

    // This makes an array of promises, not resolved
    //return funcs.map(async (fn) => await fn())

    // This works too
/*     return await funcs.reduce(async (prev, fn) => {
        const acc = await prev;
        const res = await fn();
        return [...acc, res];
      }, Promise.resolve([])); */
}