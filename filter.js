function filter(arr, func) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

function reject(arr, func) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

function partition(arr, func) {
    return [filter(arr, func), reject(arr, func)]
}


/* 
const check1 = (el) => el % 2 === 0
const check2 = (el, i) => el % 3 === 0 && i % 2 === 0
const check3 = (el) => Array.isArray(el)
const check4 = (el, i, arr) =>
    typeof el !== 'number' && i % 2 !== 0 && arr.includes(true)
const check5 = (el, i) =>
    (typeof el === 'number' || typeof el === 'boolean') && i > 5
const check6 = (el) => el.region === 'South' || el.region === 'West'

const onlyNumbers = Object.freeze([
    10,
    -10,
    20,
    -95,
    15,
    86,
    2,
    3,
    5,
    32,
    33,
    45,
    450,
    950,
    66,
    150,
])
const mixedTypes = Object.freeze([
    1,
    2,
    4,
    8,
    'hello',
    12,
    -10,
    ['how', 'are', 'the', 2],
    'of',
    ['iu', 2],
    'well',
    2,
    65,
    'good',
    2,
    2678,
    'be',
    true,
])

const statesData = Object.freeze(
    [
        { tag: 'AL', name: 'Alabama', capital: 'Montgomery', region: 'South' },
        { tag: 'AK', name: 'Alaska', capital: 'Juneau', region: 'West' },
        { tag: 'AZ', name: 'Arizona', capital: 'Phoenix', region: 'West' },
        { tag: 'AR', name: 'Arkansas', capital: 'Little Rock', region: 'South' },
        { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
        { tag: 'CO', name: 'Colorado', capital: 'Denver', region: 'West' },
        {
            tag: 'CT',
            name: 'Connecticut',
            capital: 'Hartford',
            region: 'Northeast',
        },
        { tag: 'DE', name: 'Delaware', capital: 'Dover', region: 'South' },
        {
            tag: 'DC',
            name: 'District Of Columbia',
            capital: 'Washington',
            region: 'South',
        },
        { tag: 'FL', name: 'Florida', capital: 'Tallahassee', region: 'South' },
        { tag: 'GA', name: 'Georgia', capital: 'Atlanta', region: 'South' },
        { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
        { tag: 'ID', name: 'Idaho', capital: 'Boise', region: 'West' },
        {
            tag: 'IL',
            name: 'Illinois',
            capital: 'Springfield',
            region: 'Midwest',
        },
        {
            tag: 'IN',
            name: 'Indiana',
            capital: 'Indianapolis',
            region: 'Midwest',
        },
        { tag: 'IA', name: 'Iowa', capital: 'Des Moines', region: 'Midwest' },
        { tag: 'KS', name: 'Kansas', capital: 'Topeka', region: 'Midwest' },
        { tag: 'KY', name: 'Kentucky', capital: 'Frankfort', region: 'South' },
        { tag: 'LA', name: 'Louisiana', capital: 'Baton Rouge', region: 'South' },
        { tag: 'ME', name: 'Maine', capital: 'Augusta', region: 'Northeast' },
        { tag: 'MD', name: 'Maryland', capital: 'Annapolis', region: 'South' },
        {
            tag: 'MA',
            name: 'Massachusetts',
            capital: 'Boston',
            region: 'Northeast',
        },
        { tag: 'MI', name: 'Michigan', capital: 'Lansing', region: 'Midwest' },
        { tag: 'MN', name: 'Minnesota', capital: 'St. Paul', region: 'Midwest' },
        { tag: 'MS', name: 'Mississippi', capital: 'Jackson', region: 'South' },
        {
            tag: 'MO',
            name: 'Missouri',
            capital: 'Jefferson City',
            region: 'Midwest',
        },
        { tag: 'MT', name: 'Montana', capital: 'Helena', region: 'West' },
        { tag: 'NE', name: 'Nebraska', capital: 'Lincoln', region: 'Midwest' },
        { tag: 'NV', name: 'Nevada', capital: 'Carson City', region: 'West' },
        {
            tag: 'NH',
            name: 'New Hampshire',
            capital: 'Concord',
            region: 'Northeast',
        },
        {
            tag: 'NJ',
            name: 'New Jersey',
            capital: 'Trenton',
            region: 'Northeast',
        },
        { tag: 'NM', name: 'New Mexico', capital: 'Santa Fe', region: 'West' },
        { tag: 'NY', name: 'New York', capital: 'Albany', region: 'Northeast' },
        {
            tag: 'NC',
            name: 'North Carolina',
            capital: 'Raleigh',
            region: 'South',
        },
        {
            tag: 'ND',
            name: 'North Dakota',
            capital: 'Bismarck',
            region: 'Midwest',
        },
        { tag: 'OH', name: 'Ohio', capital: 'Colombus', region: 'Midwest' },
        {
            tag: 'OK',
            name: 'Oklahoma',
            capital: 'Oklahoma City',
            region: 'South',
        },
        { tag: 'OR', name: 'Oregon', capital: 'Salem', region: 'West' },
        {
            tag: 'PA',
            name: 'Pennsylvania',
            capital: 'Harrisburg',
            region: 'Northeast',
        },
        {
            tag: 'RI',
            name: 'Rhode Island',
            capital: 'Providence',
            region: 'Northeast',
        },
        {
            tag: 'SC',
            name: 'South Carolina',
            capital: 'Columbia',
            region: 'South',
        },
        { tag: 'SD', name: 'South Dakota', capital: 'Pierre', region: 'Midwest' },
        { tag: 'TN', name: 'Tennessee', capital: 'Nashville', region: 'South' },
        { tag: 'TX', name: 'Texas', capital: 'Austin', region: 'South' },
        { tag: 'UT', name: 'Utah', capital: 'Salt Lake City', region: 'West' },
        {
            tag: 'VT',
            name: 'Vermont',
            capital: 'Montpelier',
            region: 'Northeast',
        },
        { tag: 'VA', name: 'Virginia', capital: 'Richmond', region: 'South' },
        { tag: 'WA', name: 'Washington', capital: 'Olympia', region: 'West' },
        {
            tag: 'WV',
            name: 'West Virginia',
            capital: 'Charleston',
            region: 'South',
        },
        { tag: 'WI', name: 'Wisconsin', capital: 'Madison', region: 'Midwest' },
        { tag: 'WY', name: 'Wyoming', capital: 'Cheyenne', region: 'West' },
    ].map((e) => Object.freeze(e)),
)





// Tests begin here


// Filter

    console.log(JSON.stringify(filter(onlyNumbers, check1)) == JSON.stringify([
        10,
        -10,
        20,
        86,
        2,
        32,
        450,
        950,
        66,
        150,
    ]),
)
 console.log(JSON.stringify(filter(onlyNumbers, check2)) == JSON.stringify([15, 33, 450, 66]))

    console.log(JSON.stringify(filter(mixedTypes, check3)) == JSON.stringify([
        ['how', 'are', 'the', 2],
        ['iu', 2],
    ]),
)

    console.log(JSON.stringify(filter(mixedTypes, check4)) == JSON.stringify([
        ['how', 'are', 'the', 2],
        ['iu', 2],
        'good',
        true,
    ]),
)

    console.log(JSON.stringify(filter(mixedTypes, check5)) == JSON.stringify([-10, 2, 65, 2, 2678, true]),
)

// Reject
 console.log(JSON.stringify(reject(onlyNumbers, check1)) == JSON.stringify([-95, 15, 3, 5, 33, 45]))

    console.log(JSON.stringify(reject(onlyNumbers, check2)) == JSON.stringify([
        10,
        -10,
        20,
        -95,
        86,
        2,
        3,
        5,
        32,
        45,
        950,
        150,
    ]),
)

    console.log(JSON.stringify(reject(mixedTypes, check3)) == JSON.stringify([
        1,
        2,
        4,
        8,
        'hello',
        12,
        -10,
        'of',
        'well',
        2,
        65,
        'good',
        2,
        2678,
        'be',
        true,
    ]),
)


    console.log(JSON.stringify(reject(mixedTypes, check4)) == JSON.stringify([
        1,
        2,
        4,
        8,
        'hello',
        12,
        -10,
        'of',
        'well',
        2,
        65,
        2,
        2678,
        'be',
    ]),
)

    console.log(JSON.stringify(reject(mixedTypes, check5)) == JSON.stringify([
        1,
        2,
        4,
        8,
        'hello',
        12,
        ['how', 'are', 'the', 2],
        'of',
        ['iu', 2],
        'well',
        'good',
        'be',
    ]),
)

// Partition

    console.log(JSON.stringify(partition(onlyNumbers, check1)) == JSON.stringify([
        [10, -10, 20, 86, 2, 32, 450, 950, 66, 150],
        [-95, 15, 3, 5, 33, 45],
    ]),
)

    console.log(JSON.stringify(partition(onlyNumbers, check2)) == JSON.stringify([
        [15, 33, 450, 66],
        [10, -10, 20, -95, 86, 2, 3, 5, 32, 45, 950, 150],
    ]),
)

    console.log(JSON.stringify(partition(mixedTypes, check3)) == JSON.stringify([
        [
            ['how', 'are', 'the', 2],
            ['iu', 2],
        ],
        [
            1,
            2,
            4,
            8,
            'hello',
            12,
            -10,
            'of',
            'well',
            2,
            65,
            'good',
            2,
            2678,
            'be',
            true,
        ],
    ]),
)

    console.log(JSON.stringify(partition(mixedTypes, check4)) == JSON.stringify([
        [['how', 'are', 'the', 2], ['iu', 2], 'good', true],
        [1, 2, 4, 8, 'hello', 12, -10, 'of', 'well', 2, 65, 2, 2678, 'be'],
    ]),
)

    console.log(JSON.stringify(partition(mixedTypes, check5)) == JSON.stringify([
        [-10, 2, 65, 2, 2678, true],
        [
            1,
            2,
            4,
            8,
            'hello',
            12,
            ['how', 'are', 'the', 2],
            'of',
            ['iu', 2],
            'well',
            'good',
            'be',
        ],
    ]),
)

/// Filter on an object

    console.log(JSON.stringify(filter(statesData, check6)) == JSON.stringify([
        {
            tag: 'AL',
            name: 'Alabama',
            capital: 'Montgomery',
            region: 'South',
        },
        { tag: 'AK', name: 'Alaska', capital: 'Juneau', region: 'West' },
        { tag: 'AZ', name: 'Arizona', capital: 'Phoenix', region: 'West' },
        {
            tag: 'AR',
            name: 'Arkansas',
            capital: 'Little Rock',
            region: 'South',
        },
        {
            tag: 'CA',
            name: 'California',
            capital: 'Sacramento',
            region: 'West',
        },
        { tag: 'CO', name: 'Colorado', capital: 'Denver', region: 'West' },
        { tag: 'DE', name: 'Delaware', capital: 'Dover', region: 'South' },
        {
            tag: 'DC',
            name: 'District Of Columbia',
            capital: 'Washington',
            region: 'South',
        },
        {
            tag: 'FL',
            name: 'Florida',
            capital: 'Tallahassee',
            region: 'South',
        },
        { tag: 'GA', name: 'Georgia', capital: 'Atlanta', region: 'South' },
        { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
        { tag: 'ID', name: 'Idaho', capital: 'Boise', region: 'West' },
        {
            tag: 'KY',
            name: 'Kentucky',
            capital: 'Frankfort',
            region: 'South',
        },
        {
            tag: 'LA',
            name: 'Louisiana',
            capital: 'Baton Rouge',
            region: 'South',
        },
        {
            tag: 'MD',
            name: 'Maryland',
            capital: 'Annapolis',
            region: 'South',
        },
        {
            tag: 'MS',
            name: 'Mississippi',
            capital: 'Jackson',
            region: 'South',
        },
        { tag: 'MT', name: 'Montana', capital: 'Helena', region: 'West' },
        { tag: 'NV', name: 'Nevada', capital: 'Carson City', region: 'West' },
        {
            tag: 'NM',
            name: 'New Mexico',
            capital: 'Santa Fe',
            region: 'West',
        },
        {
            tag: 'NC',
            name: 'North Carolina',
            capital: 'Raleigh',
            region: 'South',
        },
        {
            tag: 'OK',
            name: 'Oklahoma',
            capital: 'Oklahoma City',
            region: 'South',
        },
        { tag: 'OR', name: 'Oregon', capital: 'Salem', region: 'West' },
        {
            tag: 'SC',
            name: 'South Carolina',
            capital: 'Columbia',
            region: 'South',
        },
        {
            tag: 'TN',
            name: 'Tennessee',
            capital: 'Nashville',
            region: 'South',
        },
        { tag: 'TX', name: 'Texas', capital: 'Austin', region: 'South' },
        {
            tag: 'UT',
            name: 'Utah',
            capital: 'Salt Lake City',
            region: 'West',
        },
        { tag: 'VA', name: 'Virginia', capital: 'Richmond', region: 'South' },
        { tag: 'WA', name: 'Washington', capital: 'Olympia', region: 'West' },
        {
            tag: 'WV',
            name: 'West Virginia',
            capital: 'Charleston',
            region: 'South',
        },
        { tag: 'WY', name: 'Wyoming', capital: 'Cheyenne', region: 'West' },
    ]),
) */