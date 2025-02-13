function ionOut(str) {
    //every >letters> +'t' followed by 'ion'
    const re = /[a-zA-A]*t(?=ion)/g;

    let matches = str.match(re);
    if (matches == null) {
        return [];
    }
    
    return matches;

}

/* console.log(ionOut('attention, direction'), ['attent', 'direct'])
console.log(ionOut('promotion, provision'), ['promot'])
console.log(ionOut('transfusion'), [])
console.log(ionOut(' 1st position is the vision of the 2nd position'), ['posit', 'posit']) */
