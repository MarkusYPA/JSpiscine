function filterShortStateName(strs) {
    return strs.filter((s) => s.length < 7)
}

function containsVowel(s) {
    let re = /[aeiouAEIOU]/;
    return re.test(s);
}

function filterStartVowel(strs) {
    return strs.filter((s) => containsVowel(s[0]))
}

function filter5Vowels(strs) {
    return strs.filter((s) => {
        let founds = 0;
        for (char of s) {
            if (containsVowel(char)) founds++;
        }
        return founds > 4;
    });
}

function filter1DistinctVowel(strs) {
    return strs.filter((s) => {
        let vowels = new Map();
        for (char of s) {
            if (containsVowel(char)) vowels.set(String(char).toLowerCase(), true);
        }
        return vowels.size == 1;
    });
}

function multiFilter(objs) {
    return objs.filter((o) => {
        if (o.capital.length < 8) return false;
        if (containsVowel(o.name[0])) return false;
        if (!containsVowel(o.tag)) return false;
        if (o.region == 'South') return false;
        return true;
    });
}


/* const arr1 = Object.freeze([
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
])

const arr2 = Object.freeze(
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
    ].map((e) => Object.freeze(e))
) */


// check that the code did use filter properly
/* console.log(JSON.stringify(filterShortStateName(arr1)) == JSON.stringify([
    'Alaska',
    'Hawaii',
    'Idaho',
    'Iowa',
    'Kansas',
    'Maine',
    'Nevada',
    'Ohio',
    'Oregon',
    'Texas',
    'Utah',
]))



// check that the code did use filter properly
console.log(JSON.stringify(filterStartVowel(arr1)) == JSON.stringify([
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Utah',
]))



// check that the code did use filter properly
console.log(JSON.stringify(filter5Vowels(arr1)) == JSON.stringify([
    'California',
    'Louisiana',
    'North Carolina',
    'South Carolina',
    'South Dakota',
    'West Virginia',
])) */



// check that the code did use filter properly
/* console.log(JSON.stringify(filter1DistinctVowel(arr1)) == JSON.stringify([
    'Alabama',
    'Alaska',
    'Arkansas',
    'Kansas',
    'Maryland',
    'Mississippi',
    'New Jersey',
    'Tennessee',
])) */



// check that the code did use filter properly
/* console.log(JSON.stringify(multiFilter(arr2)) == JSON.stringify([
    { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
    { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
    {
        tag: 'MO',
        name: 'Missouri',
        capital: 'Jefferson City',
        region: 'Midwest',
    },
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
])
) */