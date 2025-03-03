
/* process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
}); */

function veryDisco(){
    const arg = process.argv[2];
    if (!arg) return;
    
    const words = String(arg).split(/\s+/);

    const discos = words.map((w) => {
        const cutoff = Math.ceil(w.length / 2);
        return w.slice(cutoff) + w.slice(0, cutoff);
    })

    return discos.join(' ')
}

console.log(veryDisco())




