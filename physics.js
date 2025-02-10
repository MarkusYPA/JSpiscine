/* const thing = {
    f: 10,
    m: 5,
    Δv: 100,
    Δt: 50,
    t: 1,
    d: 10
} */

function getAcceleration(obj) {
    let fm = 'f' in obj && 'm' in obj;
    let vt = 'Δv' in obj && 'Δt' in obj;
    let dt = 'd' in obj && 't' in obj;

    if (!fm && !vt && !dt) {
        return 'impossible';
    }

    if (fm) {
        return obj.f / obj.m;
    }

    if (vt) {
        return obj.Δv / obj.Δt;
    }

    if (dt) {
        return ((obj.d*2) / (obj.t**2));
    }
}

//console.log(getAcceleration(thing))
