import { gossips } from './gossip-grid.data.js';

function makeGossip(goss) {
    let gDiv = document.createElement('div')
    gDiv.classList.add('gossip')
    gDiv.textContent = goss
    return gDiv
}

function sendGossip(event, textArea, form) {
    event.preventDefault(); // Don't refresh

    const goss = textArea.value.trim();
    if (goss !== "") {
        const newGossDiv = (makeGossip(goss));
        const firstGossip = document.querySelector('div.gossip')
        form.parentNode.insertBefore(newGossDiv, firstGossip)
        textArea.value = "";
    }
}

function grid() {
    // First gossip is a way to publish more
    let newGoss = document.createElement('form')
    newGoss.classList.add('gossip')
    let textArea = document.createElement('textarea'); // Store a reference
    newGoss.appendChild(textArea);
    let suBut = document.createElement('input')
    suBut.type = 'submit'
    suBut.value = 'Share gossip!'
    newGoss.appendChild(suBut)
    document.body.appendChild(newGoss)
    newGoss.addEventListener('submit', (ev) => sendGossip(ev, textArea, newGoss))

    // Old gossips form list
    gossips.forEach((goss) => document.body.appendChild(makeGossip(goss)));

    // Three sliders and their parent
    let widthR = document.createElement('input')
    widthR.classList.add('range')
    widthR.type = 'range'
    widthR.min = '200'
    widthR.max = '800'
    widthR.value = '250'
    widthR.addEventListener('input', () => setWidths(widthR))

    let fontR = document.createElement('input')
    fontR.classList.add('range')
    fontR.type = 'range'
    fontR.min = '20'
    fontR.max = '40'
    fontR.value = '20'
    fontR.addEventListener('input', () => setFonts(fontR))

    let bgR = document.createElement('input')
    bgR.classList.add('range')
    bgR.type = 'range'
    bgR.min = '20'
    bgR.max = '75'
    bgR.value = '50'
    bgR.addEventListener('input', () => setBgs(bgR))

    let wrp = document.createElement('div')
    wrp.classList.add('ranges')
    wrp.appendChild(widthR)
    wrp.appendChild(fontR)
    wrp.appendChild(bgR)
    document.body.appendChild(wrp)
}

function setWidths(widthR) {
    const gossips = document.querySelectorAll(".gossip");
    gossips.forEach(goss => {
        goss.style.width = widthR.value + "px";
    });
}

function setFonts(fontR) {
    const gossips = document.querySelectorAll(".gossip");
    gossips.forEach(goss => {
        goss.style.fontSize = fontR.value + "px";
    });
}

function setBgs(bgR) {
    const gossips = document.querySelectorAll(".gossip");
    gossips.forEach(goss => {
        // override global style for each gossip
        goss.style.backgroundColor = `hsla(280, 50%, ${bgR.value}%)`;
    });
}

export { grid }
