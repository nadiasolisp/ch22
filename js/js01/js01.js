console.log("Sesión Js01");

/*Son 7 datos primitivos de javascript:
-String ("Hola mundo")
-Number (1800)
    Los numeros utilizan 64 bits para almacenar pero solo se  usan 53 bits para representar el numero
    max numero de javascript 9,007,199,254,740,991

-bigInt (1800n)
    No hay limite numérico. Sólo es para números enteros.
    Convertir un dato numerico a bigInt

    let bigIntVar = BigInt( maxNumber );
    bigIntVar + 1n (para hacer una sumatoria de un numero bigint, poner al valor a sumar n al final)

-Boolean (true or false)
    
-Undefined
    Cuando un dato no se define, solo se declara.
        ej:
        let datoNoDefinido;
        undefined
-Null
    Intencionalmente se borra el tipo de dato.
-Symbol

Tipos de datos Object:
-Object
    const myObject = {};
-Array
    const myArray = [];
Funciones

*/


//como leer o acceder al valor de un objeto, dos formas:
let myObject = {clave:"valor", edad:18, 5:5};
console.log( myObject.edad); 
console.log( myObject['edad'] );

const propiedad = 'edad';
console.log( myObject[propiedad] );


//arrays. 
const myArray = [15, "holi", true];
myArray

//como leer array "holi"
myArray[1];

//como modificar array 
myArray[0] = "Esto es";
myArray


//Conversiones de datos de string a number:
/*parseInt y parseFloat

*/

//conversiones de datos de number a string
//().toString( radix );