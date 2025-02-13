const miModulo = ( () => {//Módulo de patrón
    
    'use strict';//js es estricto al evaluar el código

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          otros = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];//ultimo jugador siemrpe sera el cpu

    //Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
    btnNuevo = document.querySelector('#btnNuevo'),
    btnDetener = document.querySelector('#btnDetener');
    
    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');
    
    //Esta función incia el juego
    const initGame = ( numJugadores = 2) => {
        
        deck = crearDeck();
        puntosJugadores = [];

        for ( let i = 0; i<numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach( elem => elem.innerHTML = '');
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }
        
    //Esta función crea el deck barajado
    const crearDeck = ()=> {

        deck = [];

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

        return _.shuffle(deck);
    };

    //Esta función me permite tomar una carta
    const tomarCarta = () => {

        if(deck.length === 0) {
            throw 'no hay cartas en el deck';
        }

        return deck.pop();
    }

    //Esta función asigna un valor a una carta
    const valorCarta = ( carta ) => {        

        const valor = carta.substring(0, carta.length-1);

        return  ( isNaN(valor) ) ? 
                ( valor === 'J' ) ? 11 : 10
                : valor*1;
    }

    const acumularPuntos = ( carta, turno ) => {

        puntosJugadores[turno] += valorCarta( carta );
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }
    
    const creaCarta = ( carta , turno) => {

        const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`;
            imgCarta.classList.add('carta');
            divCartasJugadores[turno].append( imgCarta );
    }

    const determinarGanador = () => {

        const [ puntosMinimos, puntosCPU] = puntosJugadores;

        setTimeout( () => {
        
            if( puntosCPU === puntosMinimos) {
                alert('Nadie gana :c');
            } else if ( puntosMinimos > 21 ){
                alert('La CPU gana esta ronda');
            } else if ( puntosCPU > 21 ) {
                alert('EL jugador gana esta ronda');
            } else {
                alert('La CPU gana esta ronda');
            }
        }, 120 )
    }

    //Turno del cpu
    const turnoCPU = ( puntosMinimos ) => {

        let puntosCPU = 0;

        do{
            const carta = tomarCarta();
            puntosCPU = acumularPuntos(carta, puntosJugadores.length-1)
            creaCarta(carta, puntosJugadores.length-1)

        } while( (puntosCPU < puntosMinimos) && (puntosMinimos <= 21) ) ;
        
        determinarGanador();
    }

    //Eventos
    btnPedir.addEventListener('click', () => {

        const carta = tomarCarta();
        const puntosPlayer = acumularPuntos( carta, 0 );
        
        creaCarta(carta, 0)

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
        turnoCPU( puntosJugadores[0] );
    });

    return  {
        nuevoJuego: initGame
    };

})();