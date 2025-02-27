Promise.myAll = function (values) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        values.forEach((singlePromise, index) => {
            singlePromise
                .then((res) => {
                    results[index] = res;
                    completed++;
                    if (completed === values.length) resolve(results);
                })
                .catch((e) => {
                    reject(e);
                });
        });
    });
};


/**
 * 
 * @param {string} serverName 
 * @param {string} q 
 */
async function queryServers(serverName, q) {
    const path1 = `/${serverName}?q=${q}`
    const path2 = `/${serverName}_backup?q=${q}`

    // await here
    return await Promise.race([
        getJSON(path1),
        getJSON(path2)
    ]);
}

/**
 * 
 * @param {string} q 
 */
async function gougleSearch(q) {

    // create a promise that resolves to an error
    const timeoutPromise = new Promise((resolve) => {
        //setTimeout(resolve, 80, Error('timeout'))

        // same as above
        setTimeout(() => {
            resolve(new Error('timeout'))
        }, 80);
    })

    // race it against server queries
    const mymy = await Promise.race([
        timeoutPromise,
        Promise.all([
            queryServers('web', q),
            queryServers('image', q),
            queryServers('video', q),
        ])
    ])

    // servers won
    if (Array.isArray(mymy)) {
        return {
            web: mymy[0],
            image: mymy[1],
            video: mymy[2],
        }
    }

    // error in timeout
    throw mymy
}


/**
 * 
 * @param {string} path 
 * @param {Object} params 
 */
/*async function getJSON(path) {
    try {
        const response = await fetch(path)
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const res = await response.json()
        if (res.error) {
            throw new Error(res.error)
        }
        return res.data
    } catch (error) {
        throw error
    }
} */