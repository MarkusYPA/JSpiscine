
function pathToArr(path) {
    let levels = [];
    let key = '';
    for (let i = 0; i < path.length; i++) {
        if (path[i] == '.') {
            levels.push(key);
            key = '';
        } else {
            key += path[i];
        }
    }
    levels.push(key);
    return levels;
}

function get(src, path) {
    let levels = pathToArr(path);
    let thing = src;
    while (levels.length > 0) {
        thing = thing[levels[0]]; // set value to first available level
        levels.shift();  // remove first level
    }
    return thing;
}

/* const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'
console.log(get(src, path)) // -> 'peekaboo' */
