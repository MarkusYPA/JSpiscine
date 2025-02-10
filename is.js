//const is = {}

is.num = (arg) => typeof arg == 'number'
is.nan = (arg) => Number.isNaN(arg)
//is.nan = (arg) => isNaN(arg)
is.str = (arg) => typeof arg == 'string'
is.bool = (arg) => typeof arg == 'boolean'
is.undef = (arg) => typeof arg == 'undefined'
is.def = (arg) => typeof arg != 'undefined'
is.arr = (arg) => Array.isArray(arg)
is.obj = (arg) => typeof arg == 'object'
is.fun = (arg) => typeof arg == 'function'
is.truthy = (arg) => Boolean(arg)
is.falsy = (arg) => !Boolean(arg)

/* console.log(is.num(12))
console.log(is.num('a'))
console.log(is.nan('sd'))
console.log(is.nan(12))
console.log(is.arr([12, 'e', false]))
console.log(is.arr(12))

console.log(is.obj({cool: 'yes', down: true}))
console.log(is.obj(12))
console.log(is.fun((arg) => arg%0 == 0))
console.log(is.fun(0))

console.log(is.truthy(1))
console.log(is.truthy(0))
console.log(is.falsy(0))
console.log(is.falsy(1)) */


/* console.log(is.nan(NaN))
console.log(is.nan([NaN]))
console.log(is.nan('sd'))
console.log(is.nan(12)) */