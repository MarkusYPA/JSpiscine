//const is = {}

is.num = (arg) => typeof arg == 'number'
is.nan = (arg) => typeof arg == 'NaN'
is.str = (arg) => typeof arg == 'string'
is.bool = (arg) => typeof arg == 'boolean'
is.undef = (arg) => typeof arg == 'undefined'
is.def = (arg) => typeof arg != 'undefined'
is.arr = (arg) => arg.isArray
is.obj = (arg) => typeof arg != 'object'
is.fun = (arg) => typeof arg == 'function'
is.truthy = (arg) => Boolean(arg)
is.falsy = (arg) => !Boolean(arg)
