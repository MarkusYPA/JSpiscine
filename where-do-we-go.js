import { places } from './where-do-we-go.data.js'

window.history.scrollRestoration = "manual";

function sortPlaces() {
    const latRegEx = /^\d+°\d+'\d+\.\d+"/;    // find the first part of this: `39°56'7.3"N 119°36'1.88"E`
    const numsRegEx = /\d+/g;
    places.forEach((place) => {
        const lat = place.coordinates.match(latRegEx)[0] // latitude
        const latNums = lat.match(numsRegEx)             // array of numbers
        for (let i = 0; i < latNums.length; i++) {
            while (latNums[i].length < 2) {
                latNums[i] = '0' + latNums[i]             // add leading zeros
            }
        }
        let mult = 1
        if (place.coordinates[lat.length] == 'S') mult = -1
        place.order = Number(latNums.join('')) * mult       // something to sort by
    })
    places.sort((a, b) => b.order - a.order)
}

function slamSections() {
    places.forEach((place) => {
        let sec = document.createElement('section')
        sec.style.width = window.innerWidth
        sec.style.height = window.innerHeight
        // name until first comma, lowercased, dashes
        const urlName = place.name.match(/(\w|\s)*(?=,)/)[0].toLowerCase().replaceAll(' ', '-')
        sec.style.background = 'url(./where-do-we-go_images/' + urlName + '.jpg)'
        sec.style.backgroundSize = 'cover'
        sec.style.backgroundPosition = 'center'
        document.body.appendChild(sec)
    })
}

function formatCoords(co) {
    let result = ''
    for (const char of co) {
        switch (char) {
            case '°':
                result += '%C2%B0'
                break
            case '"':
                result += '%22'
                break
            case ' ':
                result += '%20'
                break
            default:
                result += char
        }
    }
    return result
}

function updateLocationIndicator(locInd, place) {
    locInd.textContent = place.name + '\n' + place.coordinates
    locInd.style.color = place.color
    //const coords = encodeURI(place.coordinates);  // Not necessary
    const coords = formatCoords(place.coordinates);    
    
    //locInd.href = 'https://www.google.com/maps?q=' + place.coordinates    // Gets converted automatically but not the way the tests like it
    //locInd.href = 'https://www.google.com/maps?q=' + coords
    locInd.href = `https://www.google.com/maps/place/${coords}`;    // Force this format
    locInd.target = '_blank'

    // The test
/*     const testCo = locInd.textContent.split('\n')[1]
    const testConvUrl = locInd.href
    .split('%C2%B0')
    .join('°')
    .split('%22')
    .join('"')
    .split('%20')
    .join(' ')
    console.log(testConvUrl.includes(testCo))
    console.log(testConvUrl, testCo) */

}

// Section height is set to window.innerHeigth
function getPI() { return Math.round(window.scrollY / window.innerHeight) }

function makeCompass() {
    let compass = document.createElement('div')
    compass.classList.add('direction')
    compass.textContent = 'S'
    compass.style.left = 90.0 + 'vw';
    compass.style.top = 5.0 + 'vh';
    document.body.appendChild(compass)

    return compass;
}

function explore() {
    sortPlaces();
    slamSections();
    let placeIndex = getPI()

    // Text that tells where we are
    let locInd = document.createElement('a')
    locInd.classList.add('location')
    locInd.target = '_blank'
    document.body.appendChild(locInd)
    updateLocationIndicator(locInd, places[placeIndex])

    let compass = makeCompass()
    let prevScroll = 0;

    //window.scrollTo(0, window.innerHeight + 200)

    document.addEventListener("scroll", () => {
        placeIndex = getPI()
        updateLocationIndicator(locInd, places[placeIndex])
        if (window.scrollY > prevScroll) {
            compass.textContent = 'S'
        } else {
            compass.textContent = 'N'
        }
        prevScroll = window.scrollY;
    })
}

export { explore }
