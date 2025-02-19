import { colors } from './fifty-shades-of-cold.data.js';

function generateClasses() {
    const style = document.createElement("style");
    let css = "";

    colors.forEach(color => {
        css += `.${color} { background: ${color}; }\n`;
    });

    style.textContent = css;
    document.head.appendChild(style);
}

function generateColdShades() {
    const colds = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"];

    colors.forEach(color => {
        if (colds.some(coldColor => color.includes(coldColor))) {
            const colorBox = document.createElement("div");
            colorBox.classList.add(color);
            colorBox.textContent = color;
            colorBox.addEventListener("click", () => choseShade(color));

            document.body.appendChild(colorBox);
        }
    });    
}

function choseShade(color) {
    const allDivs = document.querySelectorAll("div");

    allDivs.forEach(div => {
        div.className = color;
    });
}

export {generateClasses, generateColdShades, choseShade};
