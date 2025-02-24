function replica(...ins){
    let target = arguments[0]

    if (arguments.length > 1) {
        for (let i = 1; i < arguments.length; i++) {
            for (const [k, v] of Object.entries(arguments[i])) {

                // its an object at all
                if (!Array.isArray(v) && typeof v == 'object' && !(v instanceof RegExp) && !Array.isArray(target[k])){
                    
                    // new object base
                    if (!target.hasOwnProperty(k) || !(typeof target[k] == 'object' && !(target[k] instanceof RegExp))) {
                        target[k] = {};
                    }

                    replica(target[k], v)
                } else {

                    target[k] = v
                }
            }
        }
    }
    return target
}