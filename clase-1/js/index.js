// ESTO ES UN COMENTARIO DE SOLO UNA LINEA
/* ESTO ES UN COMENTARIO DE VARIAS
LINEAS DE CODIGO  */

// Manera de delcarar variables: let y const

// var numero = 25;

// ASI SE DEBEN DECLARAR MIS CONSTANTES LET Y CONST UNA CON CAMELCASE Y LA OTRA CON SNAKECASE

// AQUI TODAS MIS VARIABLES SON DIFERENTES DEBIDO A QUE ESTAN ESCRITAS DE UNA MANERA DISTINTA

let rosa = 21;
let Rosa =23;
let ROSA = 25;


// VARIABLE DECLARADA
let numero;

// ASIGNACION
numero = 1;

// VARIABLES DECLARADAS E INICIALIZADAS
let veinteYUno = 21;

const VEINTE_Y_DOS = 22;

// MI PRIMERA FUNCION: CONSOLE LOG
// Es para mostrar el valor de mi variable en pantalla

console.log(veinteYUno);

// voy a cambiar el valor y el tipo de dato de mi variable

veinteYUno = "veinte y uno"
console.log(veinteYUno);


console.log(VEINTE_Y_DOS);

/* NO PUEDO CAMBIAR EL VALOR DE MI CONSTANTE YA QUE ES UN VALOR QUE NO DEBE CAMBIAR NI MODIFICAR ENTONCES LA CONSOLA ME VA A ARROJAR UN ERROR 

VEINTE_Y_DOS = " veinte y dos"
console.log(VEINTE_Y_DOS);

*/

// LAS CONSTANTES NO DEBEN MODIFICAR SUS DATOS

//OPERADORES

let numeroUno =8;
let numeroDos = 10;

let suma = numeroUno + numeroDos;

console.log(suma);

suma = suma + numeroDos;
console.log(suma);

// DENTRO DEL CONSOLE LOG TAMBIEN PODEMOS DEJAR MENSAJES
// PUEDO HACER CONCATENACION 

console.log("el resultado de la suma es: " + suma);

let palabraUno = "cinco";

let palabraDos = "seis";

let palabras = palabraUno + palabraDos;

console.log(palabras);

palabras = palabraUno + " " +palabraDos;

console.log(palabras);

//PROMPT 
// ES PARA HACER QUE EL USUSARIO INGRESE DATOS POR PANTALLA

let promptPrueba = parseInt(prompt("Por favor ingresa un numero : "));

let promptPrueba2 = parseInt(prompt("Ingresa otro numero: "));

let sumaProm = promptPrueba + promptPrueba2;
console.log(sumaProm);

/* TODOS LOS DATOS QUE RECUPERA PROMPT LOS ALAMACENA COMO UNA CADENA DE CARACTERES.
PARA PODER HACER QE SE USEN NUMEROS CONVERTIRLOS COMO TAL DEBO UTILIZAR EL PARSEINT ANTES DEL PROMPOT ESE IRIA ENTRE PARENTESIS

*/

promptPrueba = prompt("Por favor ingresa un numero : ");

promptPrueba2 = prompt("Ingresa otro numero: ");

sumaProm = promptPrueba + promptPrueba2;
console.log(sumaProm);



