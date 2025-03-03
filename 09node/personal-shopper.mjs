import fs from 'fs';

const helpMessage = `Commands:
- create: takes a filename as argument and create it (should have \'.json\' extension specified)
- delete: takes a filename as argument and delete it
- add: adds
- rm: removes
- help: this message
- ls: lists the list element`

function getList(file) {
    let list;
    try {
        list = fs.readFileSync(file, 'utf8')
    } catch (err) {
        if (err.code === 'ENOENT') {    // error no entry / entity
            throw err
        } else {
            throw err
        }
    }
    return JSON.parse(list);
}

function printList(list) {
    if (!list || Object.keys(list).length == 0) {
        console.log('Empty list.')
        return
    }
    for (const [key, val] of Object.entries(list)) {
        console.log(`- ${key} (${val})`)
    }
}


function shop(file, act, elem, num) {

    console.log()

    if (!String(file).endsWith('.json')) {
        console.log('filename must end with .json');
        return;
    }

    if (!file) {
        console.log('Provide some arguments, please');
        return;
    }

    if (!elem && (act == 'add' || act == 'rm')) {
        console.error('No elem specified.');
        return;
    }

    let list = {};
    let toAdd = 0;

    switch (act) {

        case ('create'):
            fs.writeFileSync(file, JSON.stringify(list));
            break;

        case ('delete'):
            fs.unlinkSync(file)
            break;

        case ('add'):
            list = getList(file)
            toAdd = 1;
            if (num && !isNaN(num)) toAdd = Number(num);
            if (list.hasOwnProperty(elem)) {
                list[elem] += toAdd;
                if (list[elem] <= 0) delete list[elem];
            } else if (toAdd > 0) {
                list[elem] = toAdd;
            }
            break;

        case ('rm'):
            list = getList(file);
            if (list.hasOwnProperty(elem)) {
                if (num && !isNaN(num)) {
                    list[elem] -= Number(num);
                    if (list[elem] <= 0) delete list[elem];
                } else if (num && isNaN(num)) {
                    console.log('Unexpected request: nothing has been removed');
                    return;
                } else {
                    delete list[elem];
                }
            } else if (num && !isNaN(num) && num < 0) {
                list[elem] = Number(num) * -1;
            }
            break;

        case ('help'):
            console.log(helpMessage);
            return;

        case ('ls'):
            list = getList(file);
            printList(list);
            break;

        default:
            console.log(helpMessage);
            return;
    }


    fs.writeFile(file, JSON.stringify(list), (err) => {
        if (err) throw err;
    })
}

shop(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);