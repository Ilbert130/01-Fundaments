

const regresaTrue = () => {

    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    
    console.log('Regresa false');
    return false;
}

//Operador Negacion '!'
console.warn('Not o la negacion');
console.log(true); //true
console.log(!true); //false
console.log(!false); //true


console.log(!regresaFalse());

//Operador AND &&
console.log(true && true);  // true
console.log(true && false); // false

console.log('===========');
console.log(regresaFalse() && regresaTrue());//tambien lo usamos para disparar una opcion, regresa el contenido de la funcion
console.log(regresaTrue() && regresaFalse());

//Operador OR ||
console.log('===========');
console.log(true||false); // true
console.log(false || false); //false, porque todos los valores evaluados son falsos
console.log(regresaTrue() || regresaFalse());
console.log(regresaFalse() || regresaTrue());

// console.log('===========');
// regresaFalse() || regresaTrue();

console.log('===== Asingnacion con operadores ======');
//////////////////////////////////// Pro tip: Asingnacion con operadores
console.warn('Asignaciones');

const soyUndifined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola Mundo' && 150; // Si es true, devuleve el ultimo valor. Si es falso devuelve falso // print 150
const a2 = 'Hola' && 'Mundo' && soyFalse; //print false
const a3 = soyFalse || 'Ya no soy falso'; // Devuelver 'Ya no soy falso' porque evalua si una de las condiciones es verdadera
const a4 = soyFalse || soyUndifined || soyNull ||'Ya no soy falso'; //null and undifined es considerado falso

console.log({a1,a2,a3, a4});

if(true || true || true){
    console.log('Hacer algo');
}else{
    console.log('Halgo hecho');
}