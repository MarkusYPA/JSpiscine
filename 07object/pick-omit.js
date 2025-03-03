function pick(obj, str) {
    let keys = {}

    if (typeof str == 'string') {
        Object.entries(obj).forEach(([key, value]) => {
            //if (str.includes(key)) {
            if (str == key) {
                keys[key] = value
            }
        })
    }

    if (Array.isArray(str)) {
        for (const elem of str) {
            Object.entries(obj).forEach(([key, value]) => {
                //if (elem.includes(key)) {
                if (elem == key) {
                    keys[key] = value
                }
            })
        }
    }

    return keys
}

function omit(obj, str) {
    let keys = {}

    if (typeof str == 'string') {
        Object.entries(obj).forEach(([key, value]) => {
            //if (!str.includes(key)) {
            if (str != key) {
                keys[key] = value
            }
        })
    }

    if (Array.isArray(str)) {
        Object.entries(obj).forEach(([key, value]) => {
            let found = false
            for (const elem of str) {
                //if (!elem.includes(key)) {
                if (elem == key) {
                    found = true
                }

            }
            if (!found) {
                keys[key] = value
            }
        })
    }
    return keys
}