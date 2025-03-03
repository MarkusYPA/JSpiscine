
function pronoun(str) {
    const words = String(str).match(/\w+/g).map((wd) => wd.toLowerCase())
    const prons = ['i', 'you', 'he', 'she', 'it', 'they', 'we']
    let result = {}

    for (const pr of prons) {
        let count = 0;
        for (let i = 0; i < words.length; i++) {
            const wd = words[i]

            if (pr == wd) {
                count++

                if (count == 1) {
                    result[pr] = {}
                    result[pr]['word'] = []
                }

                result[pr]['count'] = count

                if (i < words.length - 1 && !prons.includes(words[i + 1])) {
                    result[pr]['word'].push(words[i + 1])
                }

            }
        }
    }

    return result
}
