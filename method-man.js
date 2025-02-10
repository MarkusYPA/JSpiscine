function words(str){
    return String(str).split(' ');
}

function sentence(arr){
    return arr.join(' ');
}

function yell(str){
    return String(str).toLocaleUpperCase;
}

function whisper(str){
    return '*'+String(str).toLocaleLowerCase+'*';
}

function capitalize(str){
    return yell(str[0])+ String(str).slice(1).toLocaleLowerCase;
}
