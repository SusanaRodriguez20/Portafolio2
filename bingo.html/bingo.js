var usedNums = new Array(76);
var juegoEnProgreso = false;
function newCard(tablaSelector) {
    for (var i = 0; i < 25; i++) {
        setSquare(tablaSelector, i);
    }
}

function setSquare(tablaSelector, thisSquare) {
    var currSquare = "square" + thisSquare;
    var newNum;

    do {
        newNum = getNewNum();
    } while (usedNums[newNum]);

    usedNums[newNum] = true;
    
   
    var numString = newNum.toString();
    if (newNum < 10) {
        numString = "0" + numString;
    }

    document.querySelector(tablaSelector + ' td[id="' + currSquare + '"]').textContent = numString;
}

function getNewNum() {
    return Math.floor(Math.random() * 99) + 1;}

function limpiarTabla(tablaSelector) {
    usedNums = new Array(76); 
     const celdas = document.querySelectorAll(tablaSelector + ' td');
    celdas.forEach((celda) => {
        celda.textContent = '';
        celda.classList.remove('tachado');
    });
}

function anotherCard() 
{
    if (juegoEnProgreso) {
        mostrarMensajeGanador();
    }{
    
    limpiarTabla('.cartonJugador table');
    newCard('.cartonJugador table');

    
    limpiarTabla('.cartonCpu table');
    newCard('.cartonCpu table');
    
}
}

function comprobarGanador() {
    if (todosTachados('.cartonJugador table')) {
        alert("¡El jugador ha ganado!");
        anotherCard(); 
    } else if (todosTachados('.cartonCpu table')) {
        alert("¡La CPU ha ganado!");
        anotherCard(); 
    }
}

function todosTachados(tablaSelector) {
    const celdas = document.querySelectorAll(tablaSelector + ' td');
    for (const celda of celdas) {
        if (!celda.classList.contains('tachado')) {
            return false; 
        }
    }
    return true; 
}

function sacarBola() {
    const bola = document.getElementById('bola');
    const randomNumber = getNewNum(); 
    bola.textContent = randomNumber;

    
    tacharNumeroEnTabla('.cartonJugador table', randomNumber);
    tacharNumeroEnTabla('.cartonCpu table', randomNumber);
    comprobarGanador();
}

function tacharNumeroEnTabla(tablaSelector, numero) {
    const celdas = document.querySelectorAll(tablaSelector + ' td');
    celdas.forEach((celda) => {
        if (celda.textContent == numero) {
            celda.classList.add('tachado');
        }
    });
}

const sacarBolaButton = document.querySelector('#bingo button');
sacarBolaButton.addEventListener('click', sacarBola);
