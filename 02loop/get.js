
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
        if (thing[levels[0]] !== undefined) {
            thing = thing[levels[0]];   // set value to first available level
            levels.shift();             // remove first level
        } else {
            return undefined;
        }

    }
    return thing;
}

/* const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'
console.log(get(src, path)) // -> 'peekaboo'

// work with simple key / values
console.log(get({ key: 'value' }, 'key') === 'value')

// work with nested objects
console.log(get({ nested: { key: 'value' } }, 'nested.key') === 'value')

// return undefined without error if the value do not exist
console.log(get({ key: 'value' }, 'nx') === undefined)
console.log(get({ nested: { key: 'value' } }, 'nested.nx') === undefined)
console.log(get({ nested: { key: 'value' } }, 'nx.nx') === undefined)

// work with nested arrays too
let t = "woo";
console.log(get({ a: [{ b: t }] }, 'a.0.b') === t)
console.log(get({ a: [{ b: t }] }, 'a.0.b.toString') === t.toString) */
