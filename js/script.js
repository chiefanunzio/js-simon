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


function getRandom(min, max) { //funzione random

    var maxRnd = max;
    var minRnd = min;

    var res = Math.floor(Math.random() * max + min);
    return res
}

function cycleNum() { //funzione ciclo x5 

    var num = [];

    while(num.length < 5){
        var rndNum = getRandom(1, 6);
        if(!num.includes(rndNum)){
            num.push(rndNum);
        }

    }
    console.log([num]);
    return [num];

    
}

function user(){

    var num = [];

    while(num.length < 5){
        var numUser = parseInt(prompt('prova ad indovinare i 5 numeri!'));
        if(!num.includes(numUser)){
            num.push(numUser)
        }else{
            alert('hai giá inserito questo numero');
        }
        
    }
     
    return num;
}

user();
// function checkRes(){
//     var pc = cycleNum();
//     var us = user();
//     var win = [];
   

// }

// checkRes();