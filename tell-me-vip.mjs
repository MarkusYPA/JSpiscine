import { readFileSync, readdirSync, writeFile } from 'fs';

function whoSaidYes(path) {
    if (!path) {
        path = './'
    }

    let dir = readdirSync(path)

    // only json, if parsed object has answer and it's "yes", accept
    dir = dir.filter((file) => {
        if (file.slice(-5) === '.json') {
            const content = JSON.parse(readFileSync(path + "/" + file, 'utf-8'))
            return (content.hasOwnProperty("answer") && content.answer == "yes")
        }
        return false
    })

    let formatted = dir.map((fn) => fn.match(/[a-zA-Z0-9]+/g).slice(0, 2).reverse().join(' '))
    formatted.sort((a, b) => a.localeCompare(b))

    let counter = 1;
    let outStrings = []
    formatted.forEach(n => {
        outStrings.push(counter + ". " + n)
        counter++
    })

    writeFile('vip.txt', outStrings.join("\n"), (err) => {
        if (err) throw err;
    })
}

whoSaidYes(process.argv[2])


