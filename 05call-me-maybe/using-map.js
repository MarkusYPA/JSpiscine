
function citiesOnly(objs) {
  return objs.map((o) => o.city);
}

function ups(s) {
  let words = String(s).split(' ');
  words.forEach((word, index, arr) => {
    arr[index] = word.charAt(0).toUpperCase() + word.slice(1);
  });
  return words.join(" ");
}

function upperCasingStates(strs) {
  return strs.map((city) => ups(city))
}

function fToC(s) {
  return Math.floor((String(s).slice(0, -2) - 32) * (5 / 9)) + '°C'
}

function fahrenheitToCelsius(fahTemps) {
  return fahTemps.map((temp) => fToC(temp));
}

function trimTemp(objs) {
  return objs.map((o) => {
    let trimmedTemp = '';
    for (let char of o.temperature) {
      if (char != ' ') trimmedTemp += char;
    }
    /* let clone = {...o}
    clone.temperature = trimmedTemp
    return clone; */  // wrong order in tests

    return { city: o.city, state: o.state, region: o.region, temperature: trimmedTemp };
  });
}

function tempForecasts(objs) {
  return trimTemp(objs).map((o) => fToC(o.temperature) + 'elsius in ' + o.city + ', ' + ups(o.state))
}

/* 
const states = [
  {
    city: 'Los Angeles',
    temperature: '101 °F',
    state: 'california',
    region: 'West',
  },
  {
    city: 'San Francisco',
    temperature: '84 °F',
    state: 'california',
    region: 'West',
  },
  {
    city: 'Miami',
    temperature: ' 112 °F',
    state: 'Florida',
    region: 'South',
  },
  {
    city: 'New York City',
    temperature: ' 0 °F',
    state: 'new york',
    region: 'North East',
  },
  { city: 'Juneau', temperature: ' 21° F', state: 'Alaska', region: 'West' },
  {
    city: 'Boston',
    temperature: '45 °F',
    state: 'massachussetts',
    region: 'North East',
  },
  {
    city: 'Jackson',
    temperature: ' 70°F  ',
    state: 'mississippi',
    region: 'South',
  },
  {
    city: 'Utqiagvik',
    temperature: ' -1 °F',
    state: 'Alaska',
    region: 'West',
  },
  {
    city: 'Albuquerque',
    temperature: ' 95 °F',
    state: 'new mexico',
    region: 'West',
  },
]

const cities = [
  'alabama',
  'new jersey',
  'alaska',
  'new york',
  'california',
  'new hampshire',
  'ohio',
  'texas',
  'west virginia',
]

Object.getPrototypeOf([]).proto = ' [avoid for..in] '



// citiesOnly
console.log(JSON.stringify(citiesOnly(states)) == JSON.stringify([
  'Los Angeles',
  'San Francisco',
  'Miami',
  'New York City',
  'Juneau',
  'Boston',
  'Jackson',
  'Utqiagvik',
  'Albuquerque',
]))


// upperCasingStates

console.log(JSON.stringify(upperCasingStates(cities)) == JSON.stringify([
  'Alabama',
  'New Jersey',
  'Alaska',
  'New York',
  'California',
  'New Hampshire',
  'Ohio',
  'Texas',
  'West Virginia',
]))

const temps = ['86°F', '100°F', '41°F', '55°F', '10°F', '70°F', '-2°F']
// fahrenheitToCelsius
console.log(JSON.stringify(fahrenheitToCelsius(temps)) == JSON.stringify([
  '30°C',
  '37°C',
  '5°C',
  '12°C',
  '-13°C',
  '21°C',
  '-19°C',
])
)

// trimTemp
console.log(JSON.stringify(trimTemp(states)) == JSON.stringify([
  {
    city: 'Los Angeles',
    state: 'california',
    region: 'West',
    temperature: '101°F',
  },
  {
    city: 'San Francisco',
    state: 'california',
    region: 'West',
    temperature: '84°F',
  },
  { city: 'Miami', state: 'Florida', region: 'South', temperature: '112°F' },
  {
    city: 'New York City',
    state: 'new york',
    region: 'North East',
    temperature: '0°F',
  },
  { city: 'Juneau', state: 'Alaska', region: 'West', temperature: '21°F' },
  {
    city: 'Boston',
    state: 'massachussetts',
    region: 'North East',
    temperature: '45°F',
  },
  {
    city: 'Jackson',
    state: 'mississippi',
    region: 'South',
    temperature: '70°F',
  },
  { city: 'Utqiagvik', state: 'Alaska', region: 'West', temperature: '-1°F' },
  {
    city: 'Albuquerque',
    state: 'new mexico',
    region: 'West',
    temperature: '95°F',
  },
])
)


// tempForecasts
console.log(JSON.stringify(tempForecasts(states)) == JSON.stringify([
  '38°Celsius in Los Angeles, California',
  '28°Celsius in San Francisco, California',
  '44°Celsius in Miami, Florida',
  '-18°Celsius in New York City, New York',
  '-7°Celsius in Juneau, Alaska',
  '7°Celsius in Boston, Massachussetts',
  '21°Celsius in Jackson, Mississippi',
  '-19°Celsius in Utqiagvik, Alaska',
  '35°Celsius in Albuquerque, New Mexico',
])
) */

