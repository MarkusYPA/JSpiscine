// prettier-ignore
/* const personnel = {
    lukeSkywalker: { id: 5, pilotingScore: 98, shootingScore: 56, isForceUser: true },
    sabineWren: { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
    zebOrellios: { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
    ezraBridger: { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true },
    calebDume: { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true },
} */


function defaultCurry(o1) {
    const myFunc = (o2) => {
        let newO = {}
        for (const k of Object.keys(o1)) {
            if (o2.hasOwnProperty(k)) {
                newO[k] = o2[k]
            } else {
                newO[k] = o1[k]
            }
        }
        for (const k of Object.keys(o2)) {
            if (!o1.hasOwnProperty(k)) {
                newO[k] = o2[k]
            }
        }
        return newO
    }

    // return function that gets next argument or returns the previous two merged
    if (arguments.length > 0) {
        return myFunc
    } else {
        return myFunc()
    }
}


function mapCurry(func) {
    return function (obj) {
        let newObject = {}
        for (const [key, value] of Object.entries(obj)) {
            newObject[func([key, value])[0]] = func([key, value])[1]
        }
        return newObject
    };
}

function reduceCurry(func) {
    return ((obj, acc) => {
        for (const [k, v] of Object.entries(obj)) {
            acc = func(acc, [k, v])
        }
        return acc
    })
}

function filterCurry(func) {
    return ((obj, acc) => {
        let newObj = {}
        for (const [k, v] of Object.entries(obj)) {
            if (func([k, v])) {
                newObj[k] = v
            }
        }
        return newObj
    })
}



function reduceScore(personnel, acc) {
    // sum of scores of force users
    const users = filterCurry(([, v]) => v.isForceUser == true)(personnel)
    const scores = reduceCurry((acc, [k, v]) => acc + v.pilotingScore + v.shootingScore)(users, acc)
    return scores
}


function filterForce(personnel) {
    // force users with shootingScores >= 80
    return filterCurry(([, v]) => v.isForceUser == true && v.shootingScore >= 80)(personnel)
}

function mapAverage(personnel) {
    // Object of average scores
    const avgScores = mapCurry(([k, v]) => [
        k,
        (v.pilotingScore + v.shootingScore) / 2,
    ])(personnel)

    // average scores to persons
    for (const key in avgScores) {
        personnel[key]["averageScore"] = avgScores[key]
    }

    return personnel
}