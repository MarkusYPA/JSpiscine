const earthYear = 31557600;
const planets = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}

function dogYears(planet, ageSecs) {
    let earthAge = ageSecs / earthYear;
    return parseFloat((earthAge * 7 / planets[planet]).toFixed(2));
}

//console.log(dogYears('earth', 1000000000))