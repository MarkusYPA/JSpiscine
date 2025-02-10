const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
  }

function get(key){
    return sourceObject[key];
}

function set(key, value) {
    sourceObject[key] = value;
    return value;
}

/* console.log(get('num'))
console.log(get('str'))
console.log(set('num', 4))
console.log(set('str', 'nu thang'))
console.log(sourceObject) */
