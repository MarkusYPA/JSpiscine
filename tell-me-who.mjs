import { readdir } from 'fs';
import { readdirSync } from 'fs';

function readDir(path) {
    if (!path) {
        path = './'
    }

    const dir = readdirSync(path)
    
    let formatted = dir.map((fn)=> fn.match(/[a-zA-Z0-9]+/g).slice(0,2).reverse().join(' '))
    formatted.sort((a,b) => a.localeCompare(b))

    let counter = 1;
    formatted.forEach(n => {
        console.log(counter + ". " + n)
        counter++
    })
}

readDir(process.argv[2])



