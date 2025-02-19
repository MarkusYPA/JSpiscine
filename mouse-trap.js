let down = false;
let latest;
let box;
let inX = false;
let inY = false;
let lockX = false;
let lockY = false;

const offset = 25;

function createCircle() {
    document.addEventListener('mousedown', ev => { // 'click' would fire at mouse up
        down = true;

        let crcl = document.createElement('div');
        crcl.style.background = 'white';
        crcl.classList.add('circle');
        //crcl.style.position = 'absolute'; // set in css file
        crcl.style.left = ev.x - offset + 'px';
        crcl.style.top = ev.y - offset + 'px';
        document.body.appendChild(crcl);

        latest = crcl;
    });

    document.addEventListener('mouseup', () => {
        down = false
        lockX = false;
        lockY = false;
    });
}

function moveCircle() {
    document.addEventListener('mousemove', ev => {

        if (down) {
            [inX, inY] = wouldBeInsideBox(ev.x, ev.y);

            if (inX && inY) {
                latest.style.background = "var(--purple)";
                lockX = false;
                lockY = false;
            } else {
                if (latest.style.background == "var(--purple)") {
                    lockX = !inX;
                    lockY = !inY;
                }
            }
            

            if (down) {
                if (!lockX) latest.style.left = ev.x - offset + 'px';
                if (!lockY) latest.style.top = ev.y - offset + 'px';
            }
        }
    });
}


// If circle x axis and y axis would be inside the box
function wouldBeInsideBox(x, y) {
    const bR = box.getBoundingClientRect();
    return (
        [
            x - offset > bR.left && x + offset < bR.right,  // x axis inside
            y - offset > bR.top && y + offset < bR.bottom   // y axis inside
        ]
    );
}

function setBox() {
    box = document.createElement('div')
    box.classList.add('box')
    box.style.left = 37.5 + 'vw';
    box.style.top = 37.7 + 'vh';
    document.body.appendChild(box);
}

export { createCircle, moveCircle, setBox };