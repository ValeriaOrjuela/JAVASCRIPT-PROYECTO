function anoAct (act, nac){
    // Esta variable solo existe dentro de mi funcion, no afuera
    let edad;
    if (nac > act || nac < 0){
        return "El anno de nacimiento no es valido"
    } else {
        edad=act-nac;
        return edad;
    }
}
//Esta varial existe en mi entorno global
let edad = anoAct(2024,2025);

console.log(edad);

/*
Escribe un programa que pida un número entero y determine si es par 
o impar utilizando una función.
*/

function parOImpar (num){
    if(num%2===0){
        return `El numero ${num} es par`;
    }else{
        return `El numero ${num} es impar`;
    }
}

let numero = parseInt(prompt("Ingrese un numero entero"));

console.log(parOImpar(numero));

/*
Crea una función que imprima la tabla de multiplicar de un número que el
usuario ingrese, desde 1 hasta 10.
*/

function tablaMultipicar (num){
    for(let i = 1; i<=10; i++){
        console.log(num + " * " + i +" = "+ (i*num));
    }

}
let tabla = parseInt(prompt("Ingrese un numero"));
// Aqui no es necesario utilizar console.logo porque no esoy devolviendo nada en mi funcion por lo que al final devolvera undefined

tablaMultipicar(tabla);

/*
Escribe una función que reciba un número y determine si es primo. Un número primo es aquel que solo se puede dividir por 1 y por sí mismo.
*/

function primo (numero){
    let factorial =1;
    for (i = 1; i<=numero-1;i++){
        factorial = factorial * i;
    }
    factorial += 1;
    if (factorial % numero === 0) {
        return `el numero ${numero} es primo`
    }else{
        return `el numero ${numero} no es primo`
    }
}

console.log(primo(7));

/*
Crea una función que reciba dos números y un operador (+, -, *, /) y realice la operación correspondiente. Si el operador no es válido, devuelve un mensaje de error.
*/

function calculadora(a,b, operacion){
    operacion(a,b);
    return operacion(a,b);
}

function suma(a,b){
    return a+b;
}
function resta(a,b){
    return a+b;
}
function multiplicacion(a,b){
    return a+b;
}
function division(a,b){
    return a+b;
}

// Aqui lo que le pase como parametro fue el nombre de otra funcion, y dentro de mi funcion padre o grande a operacion le estoy asignando los valores que va arecibir mi otra funcion

console.log(calculadora(3,2, suma));
