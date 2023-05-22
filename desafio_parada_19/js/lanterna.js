const ligar = document.getElementById ('ligar');
const desligar = document.getElementById ('desligar');
const lant = document.getElementById ('lant');

function lantOn () {
    lant.src = './img/ligada.png'
}

function lantOff () {
    lant.src = './img/desligada.png'
}

ligar.addEventListener ('click', lantOn);
desligar.addEventListener ('click', lantOff);
