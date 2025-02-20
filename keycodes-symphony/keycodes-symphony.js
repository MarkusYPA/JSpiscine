
document.addEventListener('keydown', compose);

function toHex(num) {
    let out = num.toString(16);
    while (out.length < 2) {
        out = '0' + out;
    }
    return out;
}


// Handler function defined in the global scope
function compose(event) {
    if (event) {
        if (event.key >= 'a' && event.key <= 'z') {
            let noteDiv = document.createElement('div')
            noteDiv.classList.add("note");
            noteDiv.textContent = event.key;

            let chCo = String(event.key).charCodeAt(0) - 110; // -13 to 12

            let re = 0x85;  // start by some color
            let gr = 0x39;
            let bl = 0x0F;
            re += Math.round(7 * chCo)
            gr -= Math.round(4 * chCo)
            bl -= chCo;
            const shade = `#${toHex(re)}${toHex(gr)}${toHex(bl)}`

            noteDiv.style.background = shade;
            document.body.appendChild(noteDiv);
        }

        if (event.key == 'Backspace') {
            const divs = document.querySelectorAll("div")
            if (divs.length > 0) {
                divs[divs.length - 1].remove();
            }
        }

        if (event.key == 'Escape') {
            document.querySelectorAll("div").forEach(e => e.remove())
        }
    }
}


export { compose };