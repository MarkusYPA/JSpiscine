function words(str){
    return String(str).split(' ');
}

function sentence(arr){
    return arr.join(' ');
}

function yell(str){
    return String(str).toUpperCase();
}

function whisper(str){
    return '*'+String(str).toLowerCase()+'*';
}

function capitalize(str){
    return yell(str[0])+ String(str).slice(1).toLowerCase();
}

console.log(yell('howdy stranger ?'))