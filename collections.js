
function arrToSet(arr) {
    let st = new Set([]);
    for (const e of arr) {  // OF and not IN to get value
        console.log(e)
        st.add(e);
    }

    return st;
}

function arrToStr(arr) {
    let str = '';
    for (const e of arr) {
        str += e;
    }
    return str;
}

function setToArr(st) {
    let arr = [];
    for (const e of st) {
        arr.push(e);
    }
    return arr;
}

function setToStr(st) {
    let str = '';
    for (const e of st) {
        str += e;
    }
    return str;
}

function strToArr(str) {
    let arr = [];
    for (const e of str) {
        arr.push(e);
    }
    return arr;
}

function strToSet(str) {
    let st = new Set([]);
    for (const e of str) {
        st.add(e);
    }
    return st;
}

function mapToObj(mp) {
    let obj = {};
    for (const [key, value] of mp) {    // both key and value in map
        obj[key] = value;
    }
    return obj;
}

function objToArr(obj) {
    return Object.values(obj);
}

function objToMap(obj) {
    return new Map(Object.entries(obj));
}

function arrToObj(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {  // Don't use of..in for arrays
        obj[i] = arr[i];
    }
    return obj;
}

function strToObj(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        obj[i] = str[i];
    }
    return obj;
}

function superTypeOf(arg) {
    if (typeof arg == 'number') { return 'Number' }
    if (Number.isNaN(arg)) { return 'Number' }
    if (typeof arg == 'string') { return 'String' }
    if (typeof arg == 'boolean') { return 'Boolean' }
    if (typeof arg == 'undefined') { return 'undefined' }
    if (arg === null) { return 'null' } // strict equality
    if (Array.isArray(arg)) { return 'Array' }
    if (Object.prototype.toString.call(arg) === '[object Object]') { return 'Object' }
    if (typeof arg == 'function') { return 'Function' }
    if (arg instanceof Map) return 'Map';
    if (arg instanceof Set) return 'Set';

    return 'null';
}

//console.log(arrToSet([1, 'ctx', 'ctx', 3, 3]))
//console.log(mapToObj(new Map([['ctx', 'ctx'], ['a', 2],]),))