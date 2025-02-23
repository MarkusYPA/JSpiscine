function invert(obj){
    let inverseObj = {};
    Object.entries(obj).forEach(([key, val]) => inverseObj[val] = key);
    return inverseObj;
}