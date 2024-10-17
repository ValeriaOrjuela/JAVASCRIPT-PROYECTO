// FUNCIONES DE ORDEN SUPERIOR 1


/*

ABSTRACCION 
Es la manera en la cual podemos reducir la complejidad y permitir una implementacion y diseño eficiente de datos.
1- vamos a evitar el duplicado de codigo
2- Poder crear multiples instancias con una sola abstraccion
3- Encapsular datos
4- Evitamos codigo de bajo nivel
*/

function sumar(a, b) {
    return a + b;
}
console.log(sumar(3, 5));

/*
Las funciones de orden superior me permiten escribir codigo mucha mas legible y mas utilizable.

Es una funcion que toma una o mas funciones como argumentos o devuelve una funcion como resultado.

*/

function mayorQue(x) {
    return (num) => num > x;
}

const mayorQueDiez = mayorQue(10);
const mayorQueVeinte = mayorQue(20);

//El mayorQueDiez se convierte en una funcion y lo que le ingreso va a ser lo que dice num

console.log(mayorQueDiez(11));
// Una funcion puede contener dentro otras funciones

function asignarOperacion(operacion) {
    if (operacion === "sumar") {
        return function (c, d) {
            return c + d;
        }
    } else if (operacion === "restar") {
        return function (c, d) {
            return c - d;
        }
    } else if (operacion === "multiplicar") {
        return (c, d) => c * d;
    } else {
        return console.log("Opcion no valida");

    }
}

const OPERACION = asignarOperacion("sumar");

console.log(OPERACION(3, 3));

// Una funcion padre puede recibir otra funcion cojo argumento


function operar(num1, num2, operacion) {
    operacion(num1, num2)
    console.log(operacion);
    return operacion(num1, num2)

}

function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function multiplicacion(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}

console.log(operar(10, 12, multiplicacion));

// FOR EACH

const FRUTAS = ['manzana', 'pera', 'kiwi', 'naranja'];
/*
 
El metodo for each es una funcion que se utiliza para iterar sobre elementos de un array y permite ejecutar una funcion especifica para cada elemento del array

parametros 
1- Elemento = elemento actual del array que se procesa
2- Indice (opcional) el indice actual del elemento
3- arreglo (opcional)
*/

FRUTAS.forEach(function(frutas, indice){
    console.log(`${indice}: ${frutas}`);
})

const numeros = [1,2,3,4,5];

let suma1=0;
numeros.forEach(numero => {
    suma1+= numero;
})

console.log(suma1);

// METODO FIND

/*
Lo que hace es devolver el primer elemento de un arreglo que cumpla con una condicion dada
Si no cumple ningun elemento con la condicion devuelve undefined

El metodo find siempre va a trabajar con una funcion dentro

*/
const numeros2= [5,6,7,8];
const primerPar = numeros2.find(num3 => num3%2 === 0);
console.log(primerPar);


 // METODO FILTER 
/*
lO QE DEVUELVE EN UN NUEVO ARREGLO
El metodo filter me va a devolver un nuevo array con todos los elementos que pasen las condiciones dadas por el programador. 

*/

let edad = [15,25,10,20,22,37,40];
let mayoresEdad = edad.filter(mayores => mayores>=18);
console.log(mayoresEdad);

// METODO SOME

/*
El some verifiva si un elemento en el arreglo cumple o no con  una  condicion dada
Devuelve true si al menos un elemento pasa pasa la prueba y false si no lo pasa


*/

const nnumeros = [1,3,5,8];

const par = nnumeros.some(numm => numm %2 ===0);

console.log(par);


// METODO MAP

/*
Me crea un nuevo arreglo con el resultado de aplicar una funcion a cada elemento del array
- Me devuelve un nuevo array con los resultados de aplicar una funcion sobre los elementos del array original

*/

const PRECIOS = [100,200,150,300];

let precioAumentos = PRECIOS.map(aumento => (aumento*0.05)+aumento);
console.log(precioAumentos);

// METODO REDUCE
/*
Reduce => reduce un array a una unica expresion


*/

const sumap = PRECIOS.reduce((acum, nummm) => acum+nummm, 0);

console.log(sumap);

/*
METODO SORT
sort=> Me permite ordenar un array, siempre y cuando se declare una funcion de comparacion
Dentro del metodo sort tengo que generar una funcion de comparacion

*/

const sortnum = [5,4,10,25,38];

sortnum.sort((a,b)=>a-b);
console.log(sortnum);


const stringg =["manzana", "banana", "anana", "kiwi"];
// LOCAL COMPARE para ordenar mis strings sin tener en cuenta el coso unicode
stringg.sort((c,d)=> c.localeCompare(d));
console.log(stringg);
