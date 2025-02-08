const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}
const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not a la negación');
console.log(true);
console.log(!true);// "!" invierte el valor booleano
console.log(regresaFalse());

console.warn('And');//operador and
console.log('===== && =====');
console.log(true && true);//true solo cuando ambos son true, sino false
regresaFalse() && regresaTrue();//solo ejecuta el primero porque ya retornó false
regresaTrue() && regresaFalse();//ejecuta ambos

console.warn('OR');//operador or
console.log('===== || =====');
console.log(false && false);//false solo cuando ambos son false, sino true
regresaTrue() || regresaFalse();//solo ejecuta el primero porque ya retornó true
regresaFalse() || regresaTrue();//ejecuta ambos

const esUndefined = undefined;
const esNull = null;
const esFalso = false;

const a1 = true && 'Hola Mundo' && 150;//asigna el último valor
const a2 = 'Hola' && 'Mundo' && esFalso && true;//asigna esFalso
const a3 = esFalso || 'Ya no es falso';//asigna el último
const a4 = esFalso || esUndefined || esNull || 'Ya no es falso otra vez';//asigna el último
const a5 = esFalso || esUndefined || regresaTrue || 'Ya no es falso otra vez';//asigna hasta regresaTrue

console.log({a1,a2,a3,a4,a5})
//no hacer pruebas de lógica tan complejas o rebuscadas
if(regresaFalse() || regresaTrue && true || false){
    console.log('aver')
} else {
    console.log('nel')
}