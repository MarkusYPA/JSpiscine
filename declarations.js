const escapeStr = '\`\\\/\"\'';     // actually: '\/"'
const arr = Object.freeze([4, '2']);
const obj = Object.freeze({
    str: '',
    num: 0,
    bool: false,
    undef: undefined,
});
const nested = Object.freeze({
    arr: Object.freeze([4, undefined, '2']),
    obj: Object.freeze({
        str: '',
        num: 0,
        bool: false,
    }),
});
