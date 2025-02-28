import { readdir } from 'fs';
import { readdirSync } from 'fs';

function readDir(path) {
    if (!path) {
        path = './'
    }

    // with sync
/*     const dir = readdirSync(path)
    console.log(dir.length) */

    // with ascync (func doesn't return anything)
    readdir(path, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file', err);
        } else {
            console.log(data.length)
        }
    })
}

readDir(process.argv[2])