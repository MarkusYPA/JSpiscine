//'use strict';

const vowels = /[AEIOUaeiou]/;

function vowelDots(str){
    let result = "";
    for (let e of str){
        result += e;
        if (vowels.test(e)) {
            result += '.';
        }
    }
    return result;
}

/* console.log(vowels.test('a') && !vowels.test('c'))
console.log(vowelDots('something') == 'so.me.thi.ng')
console.log(vowelDots('') == '')
console.log(vowelDots('rhythm') == 'rhythm')
console.log(vowelDots('Algorithm') == 'A.lgo.ri.thm') */
