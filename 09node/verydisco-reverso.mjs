import { readFile } from 'fs';
import { readFileSync } from 'fs';

function direVesco(ocsid) {
    const words = String(ocsid).split(/\s+/);
    const discos = words.map((w) => {
        const cutoff = Math.floor(w.length / 2);
        return w.slice(cutoff) + w.slice(0, cutoff);
    })
    return discos.join(' ')
}

function reverseFile(path) {
    if (!path) {
        console.error('Give text file path as argument')
        return
    }

    // with sync
    //console.log(direVesco(readFileSync(path, 'utf8')))

    // with ascync (func doesn't return anything)
    readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file', err);
        } else {
            console.log(direVesco(data))
        }
    })
}

reverseFile(process.argv[2])