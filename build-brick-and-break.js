'use strict'

function build(amount, count = 1) {
    if (count > amount) return;

    const brick = document.createElement('div')
    brick.id = `brick-${count}`
    if (count % 3 == 2) {
        //brick.setAttribute("foundation", "true");
        brick.dataset.foundation = "true";  // if passes, this is preferable
        //brick.setAttribute("data-foundation", "true");
    }
    document.body.appendChild(brick);

    setTimeout(() => build(amount, count + 1), 5) // set to 100 
}

function repair(...ids) {
    //console.log(ids)
    let re = /\d+$/;

    for (let i of ids) {
        let b = document.getElementById(i);

        if (b != null) {
            let num = String(i).match(re)[0]
            if (num % 3 == 2) {
                b.dataset.repaired = "in progress";
                //b.dataset.repaired = `${num}-in progress`;
            } else {
                b.dataset.repaired = "true";
                //b.dataset.repaired = `${num}-repaired`;
            }
        }
    }

}

function destroy() {
    const divs = document.querySelectorAll("div")
    if (divs.length > 0) {
        divs[divs.length - 1].remove();
    }
}

export { build, repair, destroy }