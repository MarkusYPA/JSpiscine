
function deepCopy(arg) {
    if (Array.isArray(arg)) {
        let arr = []
        for (const ele of arg) {
            arr.push(deepCopy(ele))
        }
        return arr
    } else if (typeof arg == 'object' && !(arg instanceof RegExp)) {
        let obj = {}
        for (const [key, val] of Object.entries(arg)) {
            obj[key] = deepCopy(val)
        }
        return obj
    } else {
        return arg
    }
}