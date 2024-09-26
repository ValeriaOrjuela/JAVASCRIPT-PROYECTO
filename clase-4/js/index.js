// SENTENCIA SWITCH
/*
switch(expresion){
    
    case valor1:
    //codigo de ejecucion;
    break;

    case valor2:
    //codigo de ejecucion;
    break;

    case valor3:
    //codigo de ejecucion;
    break;

    default: //se ejecuta si ninguna de las opciones anteriores se cumplen;

}

    */

// EJEMPLO
/*
const NUM1 =parseFloat(prompt("Ingrese un numero"));
const OPERACION =prompt("Ingrese la informacion que quiera hacer ( + - * /)");
const NUM2 = parseFloat(prompt("Ingrese otro numero"));
let total;
switch(OPERACION){
    case "+":
        total= NUM1 + NUM2;
        console.log( NUM1 + " + " + NUM2 + " = "+ total)
        break;
    case "-":
        total= NUM1 - NUM2;
        console.log( NUM1 + " - " + NUM2 + " = "+ total)
        break;
    case "*":
        total= NUM1 * NUM2;
        console.log( NUM1 + " * " + NUM2 + " = "+ total)
        break;
    case "/":
        total= NUM1 / NUM2;
        console.log( NUM1 + " / " + NUM2 + " = "+ total)
        break;
    default: console.log("No ingresaste una opcion valida")

}
*/

// FUNCIONES
//Es un bloque de codigo reutilizable que va a realizaar una tarea especifica
// Sirven para reutilizar codigo, modularizar y organizar codigo, facilitar el mantenimiento y actualizaciones

/*
ESTRUCTURA
function nombreFunciuon(parametros){
//escribir el codigo a ejecutar
}
nombreFuncion();


*/

// Las funciones suelen ser verbos de acciones
//Las funciones se escriben en camelCase

function saludar (){
    console.log("Buenas noches pibes todos sufran con esto");
}
saludar();


function sumar(){
    let num1 = parseInt(prompt("Ingresa un numero"));
    let num2 = parseInt(prompt("Ingresa otro numero"));

    let suma= num1+num2;
    console.log("La suma es: "+ suma);

}

sumar();

let nombrIngresado= prompt("Ingresa tu nombre");
console.log("El nombre ingresado es "+ nombrIngresado);

function ingresarNombre (nombre){
    console.log("El nombre ingresado es " + nombre)
}
ingresarNombre("cindy");

// Argumento es el valor del parametro 

function datosPersona(nombre, apellido, edad){//Parametros
    console.log("Esta persona se llama "+ nombre+" " + apellido + " y tiene "+ edad + " annos.")
    let x =25;
    return x;
}

datosPersona('Valeria', 'Orjuela', '25');//Argumentos

valor= datosPersona('Valeria', 'Orjuela', '25');

console.log(valor)

//Cuando llamamos a una funcion los datos que se usan se llaman argumentos, estos argumentos ingresan a la funcion como parametros

function calcularIntereses(montoInicial, tasaInteres){
    return montoInicial * tasaInteres;
}
function calcular(montoInicial){
    let tasaInteres = 0.05;

    let intereses = calcularIntereses(montoInicial, tasaInteres);
    let total = montoInicial + intereses;
    return total;

}

console.log(calcular(100))
