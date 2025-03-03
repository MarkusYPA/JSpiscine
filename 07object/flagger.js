function flags(obj) {
    // returns the specific aliases and descriptions from the properties obj
    let result = {}
    result['alias'] = {}
    result['alias']['h'] = 'help'
    let descriptions = new Set()

    result['description'] = ''

    let inHelp = []
    if (obj.hasOwnProperty('help')) {
        inHelp = obj['help']
    }    

    for (const [key, val] of Object.entries(obj)) {
        const short = key.slice(0, 1)        
        const desc = `-${short}, --${key}: ${val}`
        if (inHelp.length > 0) {
            if (inHelp.includes(key)) {
                descriptions.add([key, desc])
            }
        } else {            
            descriptions.add([key, desc])
        }
        result['alias'][short] = key
    }

    // Add descriptions in the order they are in on help
    if (descriptions.size > 0) {
        if (inHelp.length != 0) {
            let sortedDesc = []
            while (sortedDesc.length != inHelp.length) {
                for (const h of inHelp) {
                    for (const dArray of descriptions){
                        if (h == dArray[0]) {
                            sortedDesc.push(dArray[1])
                        }
                    }
                }
            }
            result['description'] = sortedDesc.join('\n')
        } else {
            let descs = []
            for (const dArray of descriptions){
                descs.push(dArray[1])
            }
            result['description'] = descs.join('\n')
        }        
    }

    return result
}