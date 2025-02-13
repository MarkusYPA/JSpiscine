function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null && b == null) return true; // maybe ok?
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    // Sort here if you wish
    // Clone first if you don't want originals modified

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}



module.exports = arraysEqual;
