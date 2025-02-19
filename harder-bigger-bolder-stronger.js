function generateLetters() {
    for (let i = 1; i <= 120; i++) {
        const letter = document.createElement('div');
        const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        letter.textContent = randomLetter;
        console.log(randomLetter);

        const size = 10 + i;
        letter.style.fontSize = String(size)+'px';

        if (i < 41) {
            letter.style.fontWeight = 300;
        } else if (i < 81) {
            letter.style.fontWeight = 400;
        } else {
            letter.style.fontWeight = 600;
        }

        document.body.appendChild(letter);
    }
}

export { generateLetters }