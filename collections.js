
function arrToSet(arr) {
    let st = new Set([]);
    for (const e in arr) {
        st.add(e);
    }
    return st;
}

function arrToStr(arr) {
    let str = '';
    for (const e in arr) {
        str += e;
    }
    return str;
}

function setToArr(st) {
    let arr = [];
    for (const e in st) {
        arr.push(e);
    }
    return arr;
}

function setToStr(st) {
    let str = '';
    for (const e in st) {
        str += e;
    }
    return str;
}

function strToArr(str) {
    let arr = [];
    for (const e in str) {
        arr.push(e);
    }
    return arr;
}

function strToSet(str) {
    let st = new Set([]);
    for (const e in str) {
        st.add(e);
    }
    return st;
}

function mapToObj(mp) {
    let obj = {};
    for (const [key, value] of Object.entries(mp)) {
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
    for (const e in arr) {
        obj[e] = e;
    }
    return obj;
}

function strToObj(str) {
    let obj = {};
    for (let i=0; i< str.length; i++) {
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
    if (Array.isArray(arg)) { return 'Array' }
    if (Object.prototype.toString.call(arg) === '[object Object]') { return 'Object' }
    if (typeof arg == 'function') { return 'Function' }
    if (arg instanceof Map) return 'Map';
    if (arg instanceof Set) return 'Set';

    return 'Other';

    //if (typeof arg != 'undefined') { return 'dunno what'}
    //if (Boolean(arg)) {return 'truthy'}
    //if (!Boolean(arg)) {return 'falsy'}



}