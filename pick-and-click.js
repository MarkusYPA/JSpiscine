
function colorValues(x, y, winW, winH) {
    let hue = Math.round((x / winW) * 360);
    let lum = Math.round((y / winH) * 100);
    return ([hue, lum]);
}

function pick() {
    // Three divs to display numeric information
    let hueDiv = document.createElement('div')
    hueDiv.classList.add('hue');
    hueDiv.classList.add('text');
    hueDiv.style.left = 80.0 + 'vw';
    hueDiv.style.top = 5.0 + 'vh';
    document.body.appendChild(hueDiv);

    let lumDiv = document.createElement('div')
    lumDiv.classList.add('luminosity');
    lumDiv.classList.add('text');
    lumDiv.style.left = 5.0 + 'vw';
    lumDiv.style.top = 90.0 + 'vh';
    document.body.appendChild(lumDiv);

    let hslDiv = document.createElement('div')
    hslDiv.classList.add('hsl')
    hslDiv.style.left = 40.0 + 'vw';
    hslDiv.style.top = 40.0 + 'vh';
    document.body.appendChild(hslDiv);
    const hslRect = hslDiv.getBoundingClientRect();

    // Svg with two lines to crosshair the cursor
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100vw');
    svg.setAttribute('height', '100vh');
    svg.setAttribute('style', 'position: absolute; top: 0; left: 0;');
    document.body.appendChild(svg);

    const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisX.setAttribute('y1', '0');
    axisX.setAttribute('y2', window.innerHeight);
    axisX.id = ('axisX');
    axisY.setAttribute('x1', '0');
    axisY.setAttribute('x2', window.innerWidth);
    axisY.id = ('axisY');
    svg.appendChild(axisX);
    svg.appendChild(axisY);

    // Variables updated in mousemove
    let [hue, lum] = [0, 0];
    let hslString = '';
    let x = 0;
    let y = 0;
    let winW = 0;
    let winH = 0;


    document.addEventListener('mousemove', ev => {
        x = ev.clientX;
        y = ev.clientY;
        winW = window.innerWidth;
        winH = window.innerHeight;

        [hue, lum] = colorValues(x, y, winW, winH);   // ev.clientX is standardized and more widely supported than ev.x
        hslString = `hsl(${hue}, 50%, ${lum}%)`;
        hslDiv.style.left = -hslRect.width / 2 + winW / 2;
        hslDiv.style.top = -hslRect.height / 2 + winH / 2;
        hueDiv.textContent = hue;
        lumDiv.textContent = lum;
        hslDiv.textContent = hslString;

        document.body.style.background = hslString;

        axisX.setAttribute('x1', x);
        axisX.setAttribute('x2', x);
        axisX.setAttribute('y2', winH);
        axisY.setAttribute('y1', y);
        axisY.setAttribute('y2', y);
        axisY.setAttribute('x2', winW);

        console.log(hue, lum, hslString);
    });

    document.addEventListener('click', () => {
        navigator.clipboard.writeText(hslString)
    });
}

export { pick };
