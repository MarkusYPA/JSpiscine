//'use strict';

function letterSpaceNumber(str) {
    const re = /[a-zA-Z] \d(?!\d|[a-zA-Z])/g;
    // [a-zA-Z] one letter
    //   space
    // \d one digit
    // ( | ) this or that
    // ?! negative lookahead (?= would be positive) for both sides of OR
    // \d digit
    // [a-zA-Z] letter
    // g global, so finds all matches

    let matches = str.match(re);
    if (matches == null) {
        return [];
    }

    return matches;
}

/* console.log(letterSpaceNumber('example 1, example 22'))

console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'), ['s 8', 'r 9'])
console.log(letterSpaceNumber('I like 7up.'), [])
console.log(letterSpaceNumber("It's 20 past 3"), ['t 3'])
console.log(letterSpaceNumber('example 1, example 2'), ['e 1', 'e 2'])
console.log(letterSpaceNumber(''), [])
console.log(letterSpaceNumber('Definitely 9.'), ['y 9']) */