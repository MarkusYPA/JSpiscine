function filterValues(nutrients, func) {
    let result = {}
    for (const [key, val] of Object.entries(nutrients)) {
        if (func(val)) {
            result[key] = val
        }
    }
    return result
}

function mapValues(nutrients, func) {
    let result = {}
    for (const [key, val] of Object.entries(nutrients)) {
        result[key] =func(val)
    }
    return result
}

function reduceValues(nutrients, func, acc = 0) {
    for (const [key, val] of Object.entries(nutrients)) {
        acc = func(acc, val)
    }
    return acc
}