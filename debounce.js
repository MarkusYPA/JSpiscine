function debounce(func, wait = 0){
    // Create a deb func that delays func every time by wait milliseconds

    let timeout;
    
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function opDebounce(){
    
}


const log = debounce(() => console.log('Executed!'), 1000);

log();  // Call at T=0ms
setTimeout(log, 500);  // Call at T=500ms
setTimeout(log, 1200); // Call at T=1200ms

// "Executed!" will only appear once at ~2200ms, since each call resets the timer.
