/*
1C = one of club
1D = one of Diamond
1H = one of Heart
1S = one of Spade
*/
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const otros = ['A','J','Q','K'];

let puntosPlayer = 0;
let puntosCPU = 0;

//Referencias del HTML
const puntosHTML = document.querySelectorAll('small');
const btnPedir = document.querySelector('#btnPedir');
const btnNuevo = document.querySelector('#btnNuevo');
const btnDetener = document.querySelector('#btnDetener');

const divCartasPlayer = document.querySelector('#player-cartas')
const divCartasCPU = document.querySelector('#cpu-cartas')

//Esta función crea el deck barajado
const crearDeck = ()=> {
    for ( let i = 2; i <= 10; i++ ){
        for( let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    for( let otro of otros){
        for( let tipo of tipos){
            deck.push(otro + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
};

//Esta función me permite tomar una carta
const tomarCarta = () => {
    if(deck.length === 0) {
        throw 'no hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta
}

//Esta función asigna un valor a una carta
const valorCarta = ( carta ) => {           
    const valor = carta.substring(0, carta.length-1);
    return ( isNaN(valor) ) ? 
    (valor === 'J' ) ? 11 : 10
    : valor*1;
}

crearDeck();

//Turno del cpu
const turnoCPU = ( puntosMinimos ) => {
    do{
        const carta = tomarCarta();
        puntosCPU  += valorCarta( carta );
        console.log(puntosCPU)
        puntosHTML[1].innerHTML = puntosCPU;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasCPU.append( imgCarta );
        if(puntosMinimos > 21) {
            break;
        }
    } while( (puntosCPU < puntosMinimos) && (puntosMinimos <= 21) ) ;
    setTimeout(() => {
    
    if( puntosCPU === puntosMinimos) {
        alert('Nadie gana :c');
    } else if ( puntosMinimos > 21 ){
        alert('La CPU gana esta ronda');
    } else if ( puntosCPU > 21 ) {
        alert('EL jugador gana esta ronda');
    } else {
        alert('La CPU gana esta ronda');
    }
    }, 20 )
}

//Eventos
btnPedir.addEventListener('click', () => {
    const carta = tomarCarta();
    puntosPlayer  += valorCarta( carta );
    console.log(puntosPlayer)
    puntosHTML[0].innerHTML = puntosPlayer;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasPlayer.append( imgCarta );

    if( puntosPlayer > 21) {
        console.warn('Perdiste')
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoCPU( puntosPlayer );
    } else if( puntosPlayer === 21 ) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoCPU( puntosPlayer );
        console.warn('Llegaste a 21.')
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoCPU( puntosPlayer );
});

btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = crearDeck();
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    puntosPlayer = 0;
    puntosCPU = 0;
    divCartasPlayer.innerHTML = '';
    divCartasCPU.innerHTML = '';
});

