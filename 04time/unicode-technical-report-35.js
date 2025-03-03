
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function two(num) {
    return String(num % 100).padStart(2, "0");
}

function four(num) {
    return String(num % 10000).padStart(4, "0");
}

function format(date, frmt) {
    const re = /(\w+|:|\/| )|\(|\)|<|>|\[|\]/g;
    const forms = frmt.match(re);

    const dateVals = {
        secs: date.getSeconds(),
        mins: date.getMinutes(),        
        hours: date.getHours(),
        day: date.getDay(),
        date: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),            
    }

    let dom = 'AD'
    let domini = 'Anno Domini'
    if (dateVals.year < 0) {
        dom = 'BC'
        domini = 'Before Christ'
        dateVals.year *= -1
    }

    let h12 = 'AM'
    if (dateVals.hours > 12) {
        h12 = 'PM'
    }

    let out = '';
    for (let form of forms) {
        switch (form) {
            case 'y':
                out += dateVals.year
                break;
            case 'yy':
                out += two(dateVals.year)
                break;
            case 'yyyy':
                out += four(dateVals.year)
                break;
            case 'G':
                out += dom
                break;
            case 'GGGG':
                out += domini
                break;
            case 'M':
                out += String(Number(dateVals.month) + 1)
                break;
            case 'MM':
                out += String(two(Number(dateVals.month) + 1))
                break;
            case 'MMM':
                for (let i = 0; i < 3; i++) {
                    out += months[dateVals.month][i]
                }
                break;
            case 'MMMM':
                out += months[dateVals.month]
                break;
            case 'd':
                out += dateVals.date
                break;
            case 'dd':
                out += two(dateVals.date)
                break;
            case 'E':
                for (let i = 0; i < 3; i++) {
                    out += days[dateVals.day][i]
                }
                break;
            case 'EEEE':
                out += days[dateVals.day]
                break;
            case 'H':
                out += dateVals.hours
                break;
            case 'HH':
                out += two(dateVals.hours)
                break;
            case 'h':
                if (dateVals.hours > 12) {
                    out += dateVals.hours -12
                } else {
                    out += dateVals.hours
                }                
                break;
            case 'hh':
                if (dateVals.hours > 12) {
                    out += two(dateVals.hours -12)
                } else {
                    out += two(dateVals.hours)
                }
                break;
            case 'm':
                out += dateVals.mins
                break;
            case 'mm':
                out += two(dateVals.mins)
                break;
            case 's':
                out += String(dateVals.secs)
                break;
            case 'ss':
                out += String(two(dateVals.secs))
                break;
            case 'a':
                out += h12
                break;
            default:
                out += form;
        }
    }
    return out;
}

/* const landing = new Date('July 20, 1969, 20:17:40')
const returning = new Date('July 21, 1969, 17:54:12')
const eclipse = new Date(-585, 4, 28)
const ending = new Date('2 September 1945, 9:02:14')

// year
console.log(format(eclipse, 'y') == '585')
console.log(format(landing, 'y') == '1969')
console.log(format(eclipse, 'yyyy') == '0585')
console.log(format(landing, 'yyyy') == '1969')
console.log(format(eclipse, 'yyyy G') == '0585 BC')
console.log(format(landing, 'yyyy G') == '1969 AD')
console.log(format(eclipse, 'yyyy GGGG') == '0585 Before Christ')
console.log(format(landing, 'yyyy GGGG') == '1969 Anno Domini')

// month
console.log(format(eclipse, 'M') == '5')
console.log(format(eclipse, 'MM') == '05')
console.log(format(eclipse, 'MMM') == 'May')
console.log(format(eclipse, 'MMMM') == 'May')
console.log(format(landing, 'M') == '7')
console.log(format(landing, 'MM') == '07')
console.log(format(landing, 'MMM') == 'Jul')
console.log(format(landing, 'MMMM') == 'July')
console.log(format(ending, 'M') == '9')
console.log(format(ending, 'MM') == '09')
console.log(format(ending, 'MMM') == 'Sep')
console.log(format(ending, 'MMMM') == 'September')

// day
console.log(format(landing, 'd') == '20')
console.log(format(ending, 'd') == '2')
console.log(format(landing, 'dd') == '20')
console.log(format(ending, 'dd') == '02')
console.log(format(landing, 'E') == 'Sun')
console.log(format(returning, 'E') == 'Mon')
console.log(format(landing, 'EEEE') == 'Sunday')
console.log(format(returning, 'EEEE') == 'Monday')

// time
console.log(format(landing, 'H:m:s') == '20:17:40')
console.log(format(landing, 'HH:mm:ss') == '20:17:40')
console.log(format(returning, 'H:m:s') == '17:54:12')
console.log(format(returning, 'HH:mm:ss') == '17:54:12')
console.log(format(ending, 'H:m:s') == '9:2:14')
console.log(format(ending, 'HH:mm:ss') == '09:02:14')

console.log(format(returning, 'h:m:s a') == '5:54:12 PM')
console.log(format(returning, 'hh:mm:ss a') == '05:54:12 PM')
console.log(format(landing, 'h:m:s a') == '8:17:40 PM')
console.log(format(landing, 'hh:mm:ss a') == '08:17:40 PM')
console.log(format(ending, 'h:m:s a') == '9:2:14 AM')
console.log(format(ending, 'hh:mm:ss a') == '09:02:14 AM')

// mix
console.log(format(ending, 'HH(mm)ss [dd] <MMM>') == '09(02)14 [02] <Sep>')
console.log(format(ending, 'dd/MM/yyyy') == '02/09/1945') */
