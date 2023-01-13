console.log("Sesión JS03");

const datoUsuario = {nombre:"Jessica", ciudad: "cdmx"};

//Declaración de bloque
{
    //Esto es una declaración de bloque 
    //en donde las variables declaradas con let y const
    //solo tendrán alcance(scope) dentro del bloque 
    //o bloques anidados dentro
    const datoUsuario = {nombre:"wicho", ciudad: "aguascalientes"};
    const numPersonas = 49;
    console.log(`${datoUsuario.nombre} nos saluda de ${datoUsuario.ciudad}`);
    //nos imprime wicho y no jessica porque siempre dara preferencia a los valores del bloque local
    {
        console.log(`${datoUsuario.nombre} nos saluda de ${datoUsuario.ciudad}`);
    }
}


console.log(`${datoUsuario.nombre} nos saluda de ${datoUsuario.ciudad}`);
//console.log(`En este momento hay ${numPersonas} personas escuchando rolitas de shakira`); //la variable numPersonas no está definida.

//condicional if
/*Sintaxis
    if(condiciónVerdadera) instrucción;

    if(condiciónVerdadera) {
        instrucciones;
    }
*/

/*Sintaxis con else
    if(condiciónVerdadera) instrucción;
    else instruccion_
*/

const respuesta = false;//confirm("¿Te gusta shakira?");
console.log(respuesta);
let mensaje;

if(respuesta){
    //mensaje = "entonces te canto waka waka"; //variable local
    mensaje = "te fe-li-ci-to que bien actuas"; //variable local
}
else 
    mensaje = "Tampoco a piqué";
console.log(mensaje);

//Operador ternario.
//se utiliza en instrucciones que no sean tan largas
/* Sintaxis
    condición ? condición_verdadera : condición_falsa;
*/

let teamFrio = true; //confirm("te gusta el frio?");
//let mensajeTernario = teamFrio ? "hielito" : "ponche";
//console.log(`te voy a servir ${mensajeTernario}`);

console.log(`te voy a servir ${teamFrio ? "hielito" : "ponche"}`); //es lo mismo que las dos lineas pasadas, pero así me ahorro una línea de código


let cantante = "bad bunny"; 
console.log(`Tu reloj es ${ cantante ==='shakira' ? "rolex" : 
                            cantante ==="pique" ? "casio" : "el sol"}`); //operador ternario anidado...si tu cantante no es ni shakira ni pique entonces tu reloj es el sol

/* Código pasado pero con condicion if anidada(no hacer mas de dos o 3): 

    let marcaReloj;
    if(cantante === "shakira") marcaReloj = Rolex;
    else{
        if(cantante === "pique") marcaReloj = "casio";
        else marcaReloj = "el sol";
    }
    console.log(`Tu reloj es ${marcaReloj});
*/


//Condicional If, Else, Else If
/*Sintaxis con else
    if(condiciónVerdadera) instrucción; //si esta no cumple, se evalua la sig condici
    else if (segundaCondicion) instrucción
    else if (terceraCondicion) instrucción
    else if (condicion n) instrucción
    else instrucción; //si ningun if ni else if cumplió, se ejecuta esta
*/

let nombrePersona = "bad bunny";
let marcaReloj;
    if(nombrePersona === "shakira") marcaReloj = "Rolex";
    else if(nombrePersona === "pique") marcaReloj = "casio";
    else if(nombrePersona === "nadia") marcaReloj = "huawei";
    else marcaReloj = "hubolt";
    
    console.log(`${nombrePersona} tu reloj es ${marcaReloj}`);


//Operadores lógicos and(&&) y or (||) 
//si en la misma linea hay un and y un or, se le da preferencia al and
/* AND
    A        B   ->      C
   true     true        true
   true     false       false
   false    true        false
   false    false       false
   

   OR
   A        B   ->      C
   true     true        true
   true     false       true
   false    true        true
   false    false       false
*/
let nombrePersona2 = "karla";
let marcaReloj2;
    if(nombrePersona2 === "shakira") 
        marcaReloj = "Rolex";
    else if(nombrePersona2 === "pique" || nombrePersona2 === "karla") 
        marcaReloj2 = "casio";
    else if(nombrePersona2 === "nadia") 
        marcaReloj2 = "huawei";
    else marcaReloj2 = "hubolt";
    
    console.log(`${nombrePersona2} tu reloj es ${marcaReloj2}`);


//Condicional Switch
/*Sintaxis:
    switch(expresion){
        case valor1:
            instrucciones;
            break;
        case valor2:
            instrucciones;
            break;
        case valorn:
            instrucciones;
            break;
        default:
            instrucciones;
    }
*/

let nombrePersona3 = "Mon";
let marcaReloj3 = "";

switch(nombrePersona3){
    case "shakira": //nombrePersona3 === "shakira";
        marcaReloj3 = "Rolex";
        break;
        case "pique": //pique o karla
        case "karla":
            marcaReloj3 = "casio";
            break;
        case "nadia":
            marcaReloj3 = "huawei";
            break;
        case "Mon" :
            marcaReloj3 = "ferrari";
            break;
        default: 
            marcaReloj3 = "hubolt";
}
console.log(`Switch - ${nombrePersona3} tu reloj es ${marcaReloj3}`);


/*
con switch
preguntar el numero de mes, del 1 al 12 y de acuerdo al mes indicado, desplegar en consola la estacion del año:
mes 12, 1, 2 =invierno
mes 3, 4, 5 =primavera
mes 6, 7, 8 =verano
mes 9, 10, 11 = otoño

La estación del año es invierno
    Mes: 1
    En enero la estación del año es invierno
    mes: 6
    En junio la estación del año es verano

*/

let respuestaMes = prompt("¿Qué número de mes es?");
let estacion = "";
let mes = "";

switch(respuestaMes){
    case "12":
        estacion = "invierno";
        mes = "diciembre";
        break;
    case "1": 
        estacion = "invierno";
        mes = "enero";
        break;
    case "2":
        estacion = "invierno";
        mes = "febrero";
        break;
    case "3":
        estacion = "primavera";
        mes = "marzo";
        break;
    case "4": 
        estacion = "primavera";
        mes = "abril";
        break;
    case "5":
        estacion = "primavera";
        mes = "mayo";
        break;
    case "6":
        estacion = "verano";
        mes = "junio";
        break;
    case "7": 
        estacion = "verano";
        mes = "julio";
        break;
    case "8":
        estacion = "verano";
        mes = "agosto";
        break;
    case "9":
        estacion = "otoño";
        mes = "septiembre";
        break;
    case "10": 
        estacion = "otoño";
        mes = "octubre";
        break;
    case "11":
        estacion = "otoño";
        mes = "noviembre";
        break;
}
console.log(`En ${mes} la estacion es ${estacion}`);

//ejercicio pasado pero con else if


/*---------EJERCICIO: Refactorizar esta función usando un operador ternario
function factorial( number ){
    if( number < 1) 
        return 1;
    return number * factorial( number - 1 )
}
console.log("Factorial 5 = " + factorial(5) ); //120
*/

function factorial( number ){
    return number < 1 ? 1 : number * factorial( number - 1 );
}
console.log("Factorial 5 = " + factorial(5) );