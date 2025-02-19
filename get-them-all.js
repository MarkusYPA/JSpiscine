
function getArchitects() {
    const elems = Array.from(document.body.getElementsByTagName("*"))

    let architects = [];
    let nonArchs = [];

    for (let e of elems) {
        if (e.tagName == 'A') {
            architects.push(e);
        }

        if (e.tagName == 'SPAN') {
            nonArchs.push(e);
        }
    }

    return [architects, nonArchs];
}

function getClassical() {
    const [architects, _] = getArchitects();

    let classy = [];
    let noClass = [];

    for (let arc of architects) {
        if (arc.classList.contains('classical')) {
            classy.push(arc)
        } else {
            noClass.push(arc)
        }
    }

    return [classy, noClass];

}

function getActive() {
    const [classy, _] = getClassical();

    const active = classy.filter(el => el.classList.contains("active"));
    const nonActive = classy.filter(el => !el.classList.contains("active"));

    return [active, nonActive];
}

function getBonannoPisano() {
    const [actives, _] = getActive();

    const bp = document.getElementById("BonannoPisano");
    const others = actives.filter(el => el.id != "BonannoPisano");

    return [bp, others]
}

/* function getArchitects() {
    return [
        document.querySelectorAll("body a"),
        document.querySelectorAll("body span"),
    ];
}

function getClassical() {
    return [
        document.querySelectorAll("a.classical"),
        document.querySelectorAll("a:not(.classical)"),
    ];
}

function getActive() {
    return [
        document.querySelectorAll("a.classical.active"),
        document.querySelectorAll("a.classical:not(.active)"),
    ];
}

function getBonannoPisano() {
    return [
        document.getElementById("BonannoPisano"),
        document.querySelectorAll("a.classical.active"),
    ];
} */

export { getArchitects, getClassical, getActive, getBonannoPisano };
