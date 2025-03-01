/**
 * 
 * @param {string} path 
 * @param {Object} params 
 */
async function getJSON(path, params) {
    /* 
        First test case arguments and desired path:

        /test
        { query: 'hello world', b: 5 }
        '/test?query=hello+world&b=5'
     */

    let first = true
    for (const [key, val] of Object.entries(params)) {
        if (first) { path += '?'; first = false }
        path += key.trim() + '=' + String(val).trim() + '&'
    }
    path = path.replaceAll(' ', '+').slice(0, -1)

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
}
