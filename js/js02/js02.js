console.log("Sesión Js02");

/*
Funciones declaradas / funciones definidas
(function declaration / function statement)

Una característica de las funciones declaradas es que tienen hoisting (elevación).
Desde que se declaran están en memoria.
*/

function multiplica( a, b){
    return a * b;
}

console.log("El resultado de 5 * 10 = " + multiplica(5, 10) );

/*
Funciones expresadas (function expressions)

Son funciones que son declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anonimas(no tienen nombre). 
No tienen hoisting. 
LLevan punto y coma al final de la expresión.
Hasta que se utilizan se ponen en memoria.
*/

/**
 * Suma dos valores
 * @param {number} a primer operador para sumar
 * @param {number} b segundo operador para sumar
 * @returns resultado de a + b;
 */
const suma = function ( a, b ) {  
    return a+b;
};

/* esta es otra forma de escribir la misma funcion de arriba
const suma = function ( a, b ) { 
    const result = a + b;
    return result;
};
*/

console.log("La sumatoria de 4 + 6 = " + suma(4, 6) );


/*
Funciones autoinvocadas. (selft-invoking functions)
Son funciones que se ejectutan en su definición.
Pueden ser anónimas.
Debe llamarse o invocarse con los parentesis al final.
*/

(function saludo(){
    console.log("Hola, me estoy autoinvocando");
})();


/*
Funciones flecha(arrow function)
Son similares a las funciones expresadas, pero no requiere la palabra function. Además, si sólo tiene una instrucción y es el retorno, no requiere la instrucción retorno NI las llaves {}.
Son las más utilizadas.
No tienen hoisting. (Hay que definirlas antes de utilizarlas).
*/

//EJ. 1 con función expresada
const restaExpresada = function(a,b){
    return a-b;
}
console.log("La resta de 20-2 = " + restaExpresada(20,2));

const resta = (a,b) => a-b; //EJ. 1 con función flecha, se elimina function y se pone la flecha =>, se eliminan las llaves.
console.log("La resta de 20-2 = " + resta(20,2));

const exponente = (a,b) => {
    const result = a**b;
    return result;
}
console.log("El número 4^3 = " + exponente(4,3));

//cuando solo tenemos un parametro, no se requieren los parentesis
const exponenteAlCuadrado = a => a ** 2;
console.log("El numero 4 ^2 = " + exponenteAlCuadrado(4));

//si no se tienen parametros..igual se ponen los parentesis
const imprimeSaludo = () => console.log("Holi Crayoli");
imprimeSaludo();

/*
Funciones con parámetros inicializados.
*/
function divide(a,b){
    return a/b;
}

console.log("La divisón de 3/1 = " + divide(3)); //da not a number(NaN), porque la b llega como undefined, entonce 3 entre undefined es NaN.


function divideDos(a=3,b=1){
    return a/b;
}
console.log("La divisón de 3/1 = " + divideDos());//los valores por defecto con los que se inicializo se respetan si no se le mandan despues


function divideDos(a=3,b=1){
    return a/b;
}
console.log("La divisón de 3/1 = " + divideDos(5,2));//esta funcion toma los parametros que se le envian el en console log


/*
Rest parameters
El parámetro rest nos permite representar una serie de valores indefinidos en los argumentos como un array.
Tiene que ir al final de todos los parámetros de nuestra función.
*/
function sumatoriaIndefinida(a,b,...restoDatos){
    let sumatoria = a+b;
    for (let i = 0; i < restoDatos.length; i++) {
        sumatoria += restoDatos[i]; //sumatoria = sumatoria + restoDatos[i];
    }
    return sumatoria;
}
console.log("Sumar varios números: " + sumatoriaIndefinida(2,3,5,10,11));

/*
Funciones recursivas.
Es una función que se llama a si misma.
*/
// Factorial de 0=1
// Factorial de 3=3*2*1
// Factorial de 5=5*4*3*2*1

function factorialConCicloFor(a){
    let total=1;
    for ( i = 1; i <= a; i++) {
        total *= i;
    }
    return total;
}

function factorialConRecursion(a){
    if(a < 1) return 1; //condición de paro
    return a * factorialConRecursion(a - 1); //este sería el else, pero en este caso no es necesario ponerlo
}

console.log("Factorial 3= " + factorialConCicloFor(3)); //6
console.log("Factorial 5= " + factorialConCicloFor(5)); //120
console.log("Factorial 3= " + factorialConRecursion(3)); //6
console.log("Factorial 5= " + factorialConRecursion(5)); //120

/*Hacer una recursión que muestre en consola un saludo en consola como:
Saludo 1
Saludo 2
Saludo 3....saludo 10

Saludo(10)
*/

function saludoConRecursion (a, b = 1){
    
    console.log('saludo ' + b);
        if(a === b){
            return;
        }else{
            saludoConRecursion( a , b+1);
        }
}

console.log("Saludo " + saludoConRecursion(10));


//otra forma, la de serge tal cual
function saludo( cantidad, iteracion=1 ){
    console.log("saludo" + iteracion);
    if( iteracion >= cantidad) 
        return 1;
    return saludo( cantidad, iteracion+1 );
}
saludo(10);

