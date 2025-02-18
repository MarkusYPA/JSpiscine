
function hasCity(country, cities) {
    return ((city) => {
        if (cities.includes(city)) {
            return city + ' is a city form ' + country; 
        } else {
            return city + ' is not a city form ' + country; 
        }
    });
}