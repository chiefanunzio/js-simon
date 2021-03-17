// GOAL:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// creare funzione per numeri random
// fare un ciclo x 5 volte
// creo alert che stampa risultato del ciclo x 5 volte
// pusho nell-arrey

// creo un timer di 30 secondi
// scaduto il tempo ciclare 5 prompt per chiedere all'utente 5 numeri da indovinare
// pusho i numeri in un array
//controllo se i numeri del prompt sono inclusi nell'arrey


function getRandom(min, max) { //funzione random

    var maxRnd = max;
    var minRnd = min;

    var res = Math.floor(Math.random() * max + min);
    return res
}

function cycleNum() { //funzione ciclo x5 

    var num = [];

    while (num.length < 5) {
        var rndNum = getRandom(1, 10);
        if (!num.includes(rndNum)) {
            num.push(rndNum);
        }

    }

    alert(num);

    return num
}
var pcNumber = cycleNum();

setTimeout(function () {
    var win = [];
    var num = [];
    
    while (num.length < 5) {
        var numUser = parseInt(prompt('prova ad indovinare i 5 numeri!'));
        if (!num.includes(numUser)) {
            num.push(numUser)
            console.log(num)
            if (pcNumber.includes(numUser)) {
                win.push(numUser);
                
            }
        } else {
            alert('hai giá inserito questo numero');
        }

    }
    console.log('i numeri vincenti sono ' + win.length + ' = ' + win );
    
}, 1000);










// user();
// function checkRes(){
//     var pc = cycleNum();
//     var us = user();
//     var win = [];


// }

// checkRes();