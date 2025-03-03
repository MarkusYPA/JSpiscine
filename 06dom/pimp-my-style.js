import { styles } from './pimp-my-style.data.js'

let counter = -1;
let add = true;

function pimp(){
    let butt = Array.from(document.body.getElementsByTagName('BUTTON'))[0];

    if (add) counter++;
    if (counter > styles.length -1 ) {
        add = false;
    }

    if (!add) {
        counter--;
    }
    if (counter < 0 ) {
        counter = 0;
        add = true;
    }

    if (add) {
        butt.classList.remove("unpimp");
        butt.classList.add(styles[counter]);
        if (counter == 14) butt.classList.add("unpimp");
    }
    
    if (!add) {
        butt.classList.add("unpimp");
        butt.classList.remove(styles[counter]);
        if (counter == 0) butt.classList.remove("unpimp");
    }
}

export { pimp }