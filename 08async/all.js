
async function all(promises) {
    var result = {};
    if (Object.keys(promises).length === 0) return {};

    // Not asynchronous
    for (let key in promises) {
        result[key] = await promises[key];
    }
    return result;
}
