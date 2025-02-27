import { writeFile } from 'fs';

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

function veryDiscoForever(){
    const content = veryDisco()
    writeFile('verydisco-forever.txt', content, (err) => {
        if (err) throw err;
    })
}

veryDiscoForever()
