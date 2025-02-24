
function filterEntries(obj, func) {
    let result = {}
    for (const [key, val] of Object.entries(obj)) {
        if (func([key, val])) {
            result[key] = val
        }
    }
    return result
}

function mapEntries(obj, func) {
    let result = {}
    for (const [key, value] of Object.entries(obj)) {
        const [newKey, newVal] = func([key, value])
        result[newKey] = newVal
    }
    return result
}

function reduceEntries(obj, func, acc) {
    let skipfirst = false
    if (arguments.length < 3 || arguments[2] === undefined) {
        skipfirst = true
    }
    for (const [key, value] of Object.entries(obj)) {
        if (skipfirst) {
            skipfirst = false
            continue
        }
        acc = func(acc, [key, value])
    }
    return acc
}


function lowCarbs(cart) {
    const lows = filterEntries(cart, (([k, v]) => {
        return nutritionDB[k].carbs * v / 100 < 50
    }))
    return lows
}


function totalCalories(cart) {
    const cals = reduceEntries(cart, ((acc, [k, v]) => {
        return acc + nutritionDB[k].calories * v / 100
    }), 0)
    return Math.round(cals * 10) / 10
}



function cartTotal(cart) {
    const facts = mapEntries(cart, (([k, v]) => {
        let newVal = {}

        for (const [key, value] of Object.entries(nutritionDB[k])) {
            newVal[key] = Math.round(value * v * 10) / 1000
        }
        // key is the same, val is object of adjusted nutritionals
        return [k, newVal]
    }))
    return facts
}

const groceriesCart = { orange: 500, oil: 20, sugar: 480 }
