// if es una sentencia que nos dice si una condicion se cumple

/*
if(condicion){
    //la instruccion o lo que quiero que se devuelva    
}
*/

//asi puedo asignar varias variables a la vez
// Aqui asignamos

let a, b, c, d;

//Aqui inicializo

a= 18;

/*
!OPERADORES DE COMPARACION O RELACIONALES

= asignación
== Igual que, es un operador de igualdad (aqui solo voy a comparar valores y no el tipo de dato)
=== Operador de igualded pero estricto

!= Distinto
!== Distinto estricto


*/

//*parseFloat es para numeros decimales 

//EJEMPLO 1 Igual que pero sin ser estricto

if (a == "18"){
    console.log("Es un 18")
}else{
    console.log("Es un numero diferente a 18")
}

//EJEMPLO 2 Igual que pero estricto

if(a === "18"){
    console.log("me devuelves un 18?")

}else{
    console.log("No te puedo devolder un 18 porque el tipo de dato no es igual")
}

// if solo se va a ejecutar si la condicion dada es verdadera

a=23;

if (a == "18"){
    console.log("Es un 18")
}else{
    console.log("Es un numero diferente a 18")
}

//EJEMPLO 2 Igual que pero estricto

if(a === 23){
    console.log("me devuelves un 18?")

}else{
    console.log("No te puedo devolder un 18 porque el tipo de dato no es igual")
}


// Cuantos años tengo

let edad = parseInt(prompt("Por favor ingresa tu edad para ingresar al cheboli: "));



if (edad === 18){
    console.log("El pibe puede entrar")
}else{
    console.log("El pibe no puede entrar")
}

/*

>= Mayor o igual que (El numero es mayor o igual al que se esta comparando)
> Mayor que (el numero es mayor al que se esta comparando)

< Menor que
<= Menor o igual que 

*/

if (edad >= 18){
    console.log("El pibe puede entrar")
}else{
    console.log("El pibe no puede entrar")
}
// Si quiero comparar mas de una accion entra el elseif en donde puedo comparar o hacer multiples condiciones
//NOTAS DE EVALUACION
/*
90 el examen es optimo
75 el examen es correcto
60 el examen es bajo
menor de 60 el examen esta desaprobado

*/

let nota = parseFloat(prompt("Ingrese el valor de la nota"));

if(nota>=90){
    console.log("El examen es optimo con " + nota)
}else if (nota>=75 && nota<90) {
    console.log("El examen es correcto")
} else if(nota>=60 && nota<75) {
    console.log("El examen es bajo")
}else{
    console.log("DESAPROBADO")
}
//Aqui los && no son necesarios porque si entra a un if ya no entra a los demas entonces no seria necesario.

// Yo puedo ejeccutar varias lineas de codigo dentro de mi if o elseif

/*
OPERADORES LOGICOS

!AND &&
Se utiliza siempre y cuando tenga que comparar dos elementos y quiero que estrictamente los dos elementos sean verdaderos

a     b     a&&b
true true     (se va a ejecutar)
true false    (no se va a ejecutar)
false  true   (no se va a ejecutar)
false   false  (no se va a ejecutar)

*/

//!Los booleanos son solo true o false o 0 o 1
let edad1= 25;
let tieneLicencia=true;
if (edad1>=18 && tieneLicencia===true){
    console.log("El chico puede manejar")
}else{
    console.log("El chico no puede manejar")
}

/*
OPERADORES LOGICOS

!OR ||
Se va a ejecutar el bloque de codigo si al menos una de las condiciones es verdadera

a      b     a||b
true  true    (se va a ejecutar)
true  false   (se va a ejecutar)
false true    (se va a ejecutar)
false false   (no se va a ejecutar)

*/

let nombre="Juan";
let apellido="Perez";

if(nombre=== "Juan" || apellido === "Perez" ){
    console.log("La persona cumple con los criterios para completar la encuesta")
}else{
    console.log("La persona no cumple con los criterios")
}


/*
OPERADORES LOGICOS

NOT !
Se utiliza para negar alguna de las condiciones que tengo

true -> !true -> false
false ->!false -> verdadero

*/
let campoNombre = " ";
if (!campoNombre){
    console.log("el campo nombre esta vacio por favor completa el campo")
}else{
    console.log("el campo completado")
}


