const heroes = ['Batman','Superman','Flash','Linterna Verde']

console.warn('For tradicional')
for( let i=0; i < heroes.length; i++ ){
    console.log(heroes[i])
}

console.warn('For in');
for( let i in heroes ){//la i creada en el for solo "vive" hasta que el for termina
    console.log(heroes[i]);
}

console.warn('For off');//realiza un barrido en un array
for( let heroe of heroes ){//se usa el singular como nombre de la variable como estandar
    console.log(heroe);
}

