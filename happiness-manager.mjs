import fs from 'fs';
import path from 'path'

function manage(dir, fileName) {

    let oldList;
    try {
        oldList = JSON.parse(fs.readFileSync(fileName, 'utf8'))
    } catch (err) {
        oldList = {};
    }

    // Get all yes people: read dir, parse and filter jsons
    const files = fs.readdirSync(dir)
    const filePaths = files.map((f) => path.join(dir, f))
    const vips = filePaths.map(fp => {
        const fileContent = fs.readFileSync(fp, 'utf8');
        return JSON.parse(fileContent);
    }).filter((obj) => obj.answer === 'yes')

    if (vips.length == 0) {
        console.log('No one is coming.');
        return;
    }

    // Add to list
    let list = {}
    for (const vip of vips) {
        switch (vip.drink) {
            case 'iced-tea':
                list['iced-tea-bottles'] = (list['iced-tea-bottles'] || 0) + 1 / 6
                break;
            case 'water':
                list['water-bottles'] = (list['water-bottles'] || 0) + 1 / 4
                break;
            case 'soft':
                list['soft-bottles'] = (list['soft-bottles'] || 0) + 1 / 4
                break;
            case 'sparkling-water':
                list['sparkling-water-bottles'] = (list['sparkling-water-bottles'] || 0) + 1 / 4
                break;
        }

        switch (vip.food) {
            case 'carnivore':
                list['burgers'] = (list['burgers'] || 0) + 1
                break;
            case 'fish':
                list['sardines'] = (list['sardines'] || 0) + 1
                break;
            case 'veggie':
            case 'vegan':
                list['eggplants'] = (list['eggplants'] || 0) + 1 / 3
                list['hummus'] = (list['hummus'] || 0) + 1 / 3
                list['courgettes'] = (list['courgettes'] || 0) + 1 / 3
                list['mushrooms'] = (list['mushrooms'] || 0) + 1
                break;
            case 'everything':
                list['kebabs'] = (list['kebabs'] || 0) + 1
                break;
        }

        list['potatoes'] = (list['potatoes'] || 0) + 1
    }


    // Update old list
    for (const key of Object.keys(list)) {
        oldList[key] = Math.ceil(list[key])
    }

    // write file
    fs.writeFileSync(fileName, JSON.stringify(oldList));
}

manage(process.argv[2], process.argv[3]);
