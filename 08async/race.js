
// returns the first to finish
async function race(obj) {
    return new Promise(resolve => {
        for (const elem of Object.values(obj)) {
            elem.then(resolve).catch((e) => { resolve(e.message) })
        }
    });
}

async function some(inputs, count) {
    if (inputs.length == 0 || count == 0) return []

    // Returns the first <count> elements resolved. Wrong! 
    /*     const newIns = inputs.slice(0, count)
        return await Promise.all(newIns) */


    // Returns the fastest <count> promises to resolve. Wrong!
    /*     return new Promise(resolve => {
            const results = [];
            for (const elem of inputs) {
                elem.then(value => {
                    results.push(value);
                    if (results.length === count) resolve(results);
                }).catch(error => {
                    results.push(error.message);
                    if (results.length === count) resolve(results);
                });
            }
        }); */


    // Returns the fastest <count> promises in original order. Right!
    const longArray = await new Promise(resolve => {
        const results = Array(inputs.length);
        let resolved = 0;

        for (let i=0; i<inputs.length; i++) {
            const elem = inputs[i];
            elem.then(value => {
                results[i] = value;
                resolved++;

                if (resolved === count) resolve(results);
            }).catch(error => {
                results[i] = error.message;
                resolved++;

                if (resolved === count) resolve(results);
            });
        }
    });

    const shortArray = longArray.filter((_, index) => longArray.hasOwnProperty(index));

    return shortArray;

}
