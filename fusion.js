
function fusion(obj1, obj2) {

    let result = {}

    for (const [k, v1] of Object.entries(obj1)) {

        // combine if both have this property
        if (obj2.hasOwnProperty(k)) {
            const v2 = obj2[k]
            if (Array.isArray(v1) && Array.isArray(v2)) {
                result[k] = [...v1, ...v2]
            } else if (typeof v1 == 'string' && typeof v2 == 'string') {
                result[k] = v1 + ' ' + v2
            } else if (typeof v1 == 'number' && typeof v2 == 'number') {
                result[k] = v1 + v2
            } else if (typeof v1 == 'object' && typeof v2 == 'object' && v1 != null && v2 != null) {
                result[k] = fusion(v1, v2)
            } else {
                result[k] = v2
            }
        } else {
            // If only obj1 has it, take it from there
            result[k] = v1
        }
    }

    for (const [k, v2] of Object.entries(obj2)) {
        // If only obj2 has it, take it from there
        if (!obj1.hasOwnProperty(k)) result[k] = v2
    }

    return result
}