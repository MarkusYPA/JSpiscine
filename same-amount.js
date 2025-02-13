//'use strict';

function sameAmount(str, re1, re2) {
    const m1 = String(str).match(new RegExp(re1, 'g'));
    const m2 = String(str).match(new RegExp(re2, 'g'));

    if (m1== null && m2 == null) {
        return true;
    }

    if (m1==null || m2 == null) {
        return false;
    }

    return m1.length === m2.length;
}

/* const tests = [];
const t = (f) => tests.push(f)

t(() => sameAmount('hello how are you', /l/, /e/))
t(() => sameAmount('hello how are you', /h/, /e/))
t(() => sameAmount('hello how are you', /he/, /ho/))

const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
 ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`

t(() => sameAmount(data, /i/, /p/))
t(() => !sameAmount(data, /h/, /w/))
t(() => sameAmount(data, /qqqq /, /qqqqqqq/))
t(() => !sameAmount(data, /q /, /qqqqqqq/))
t(() => sameAmount(data, /fs[^q]/, /q /))
t(() => sameAmount(data, /^[qs]/, /^[gq]/))
t(() => sameAmount(data, /j/, /w/))
t(() => !sameAmount(data, /j/, / /))
t(() => sameAmount(data, /fs./, /jn./)) */

// tests.forEach((test, index) => {    // forEach provides 2 arguments
//     console.log(`Test ${index + 1}:`, test());
// });