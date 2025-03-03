

function neuron(lines) {
    if (lines.length == 0) return {}

    let result = {}

    const reStart = /^(questions|affirmations|orders)/
    const reFirst = /(?<=:)[^-]+/   // from :, anything but - 
    const reLettered = /\w+/g
    const reSecond = /(?<=Response:).+/   // from Response: everything

    lines.forEach(line => {

        // found a good line
        if (reStart.test(line.toLowerCase())) {

            // 'questions', 'affirmations' or 'orders', lowest level
            const prop = line.toLowerCase().match(reStart)[0]
            if (!result.hasOwnProperty(prop)) {
                result[prop] = {}
            }

            // first is the actual question/order/affirmation, lowKey is the same formatted, second is its response
            const first = line.match(reFirst)[0].trim()
            const lowKey = String(first).toLowerCase().match(reLettered).join('_')
            const second = line.match(reSecond)[0].trim()

            // Add the formatted one as property if necessary
            if (!result[prop].hasOwnProperty(lowKey)) {
                result[prop][lowKey] = {}
            }
            // repeat prop in singular and under it put the question or whatever
            result[prop][lowKey][prop.slice(0,-1)] = first        

            // start array of responses when necessary
            if (!result[prop][lowKey].hasOwnProperty('responses')) {
                result[prop][lowKey]['responses'] = []
            }
            
            // push response to array
            result[prop][lowKey]['responses'].push(second)
            
        }
    });

    return result
}


/* 
let exampleOutput = {
    questions: {
        what_is_it: { question: 'What is it?', responses: ['This', 'It's that'] },
        where: { question: 'Where?', responses: ['Here!'] }
    },
    orders: {
        spy_on_him: { order: 'Spy on him!', responses: ['Yes', 'I shall'] },
        betray_everyone: { order: 'Betray everyone', responses: ['Hmm', 'We\'ll see'] },
    }
}
 */