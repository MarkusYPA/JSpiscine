import { readFileSync, readdirSync, write, writeFile } from 'fs';

function cypher(file, instruction, newFileName) {
    if (!file || !instruction) {
        console.log('Give file name and instruction as arguments')
        return
    }

    // read file 
    let content = readFileSync(file, 'utf-8')

    // encode or decode
    let dest = ''
    if (instruction == 'encode') {
        content = Buffer.from(content).toString('base64')
        dest = 'cypher.txt'
    } else if (instruction == 'decode') {
        content = Buffer.from(content, 'base64')
        dest = 'clear.txt'
    } else {
        console.log('Instruction should be \'encode\' or \'decode\'')
        return
    }

/*     Don't use:    
    content = btoa(content)
    content = atob(content)
    they use strings to represent binary data and predate the introduction of typed arrays */

    // write file
    if (newFileName) dest = newFileName
    writeFile(dest, content, ((err) => { if (err) throw err }))
}

cypher(process.argv[2], process.argv[3], process.argv[4])