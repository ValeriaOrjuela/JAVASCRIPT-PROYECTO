// FUNCIONES ANONIMAS Y FUNCIONES FLECHA
/* 
FUNCIONES ANONIMAS
Es una funcion que no tiene un nombre especifico, se define en el momento y se puede asignar a una variable

let nombreVariable = function(parametros){
return bla bla;
}
console.log(nombreVariable(argumentos));

Las funciones anonimas
Se utilizan en callbacks de funciones de orden superior (mas adelante lo vemos)
Cuando sabemos que la funcion no la vamos a volver a utilizar

*/

//EJEMPLO 
let suma = function (a, b) {
    return (a + b);
}
console.log(suma(5, 3));

/*
FUNCIONES FLECHA

let resta = (a,b) => {
        Aqui ingreso el codigo;
    }

    Tiene una sintaxis mucho mas concisa (se utiliza mas que nada en funciones cortas)
    No posee argumentos
    el return esta implicito y cuando la funcion se expresa en una sola linea de codigo no es necesario ponerle las llaves

*/

//  EJEMPLO

let resta = (a, b) => a - b;

console.log(resta(3, 2));

/* 
Funciones normales vs funciones flecha

Una funcion flecha la voy a utilizar uando necesite sintaxis limpia y concisa, cuando necesite mantener el contexto de this (objetos) y cuando utilizamos con metodos de arrays.

Funcion normal
Cuando hablo de un contexto propio de this, cuando necesitamos acceder a argumentos, cuando creemos un objeto y cuando son funciones complejas.

*/
// OBJETOS

/*

Es algo que tiene varias caracteristicas => una coleccion de propiedades
Donde cada propiedad se compone de una clave y un valor 
En JS lo utilizamos para almacenar datos 

Como se declara?

let nombre = {
    // coleccion de propiedades

    clave: valor,
    clave1:valor1;
}


*/

// Piedo guardar la informacion que yo quiera en un objeto
let persona = {
    nombre: "Valeria",
    edad: 25,
    estudio: "Programacion"
}

console.log(persona);
console.log(persona.edad);


let producto = {
    id: 1,
    nombre: "Jarron",
    material: "marmol",
    precio: 25000,
    stock: 100
}

//DOS MANERAS DE ACCEDER A LOS ATRIBUTOS

console.log(producto.precio);
console.log(producto["material"]);

// MODIFICAR LA INFORMACION DE MIS OBJETOS

producto.stock = 98;

console.log(producto);

// OBJETOS CONSTRUCTORES
/*
Son una forma de crear objetos a partir de plantillas
Es una funcion para crear varios objetos qu tengan la misma informacion 
Me permite crear objetos a partir de plantillas, que se definen a partir de una funcion
Aqui lo que voy a poder hacer es instanciar y crear multiples objetos

1. Definir una funcion que inicia las propieades del objeto
2. Tenemos que pasar la informacion a traves de una palabra clave llamada new

Para reconocer un objeto constructor escribimos su primera letra en mayuscula

this => es una palabra que refiere al contexto de ejecucion, el valor this puede cambiar dependiendo de como invoquemos la funcion.

Instanciar refiere al proceso de crear un objeto a partir de una clave
*/

// EJEMPLO

function Auto(marca, modelo, anno) {
    this.marca = marca;
    this.modelo = modelo;
    this.anno = anno;
    // AQUI UTILIZO UNA FUNCION ANONIMA

    this.info= function(){
        return `${this.marca} ${this.modelo}, anno ${this.anno}`
    }

}

let auto1 = new Auto("Mitsubishi", "Montero", 1998);
let auto2 = new Auto("Toyota", "Corolla", 2021);
console.log(auto1);
console.log(auto2.info());


// CLASES
/*

Son una manera mas moderna de hacer objetos,
Es una manera mas facil en cuanto a la sintaxis y mas claro.
Las clases funcionan de la siguiente manera
Dentro de la clase se crea un constructor que nos sirve para inicializar las propiedades del objeto

class Auto1 {
    constructor (marca1, modelo1, anno1){
        this.marca =marca1;
        this.edad = edad1;
        this.anno = anno1;
    }
}
*/

class Auto1c {
    constructor (marca1, modelo1, anno1){
        this.marca =marca1;
        this.modelo = modelo1;
        this.anno = anno1;
    }
    info(){
        return `${this.marca}, el modelo es ${this.modelo}, el anno es ${this.anno}`
    }
}

let auto3= new Auto1c('honda', 'civic', 2021);
console.log(auto3.info());

console.log(auto3.anno);
// AQUI TENGO UN OBJETO DENTRO DE UN OBJETO
class Personas{
    constructor(nombre, edad, calle, ciudad, codigoPostal, habilidades){
        this.Nombre= nombre;
        this.edad = edad;
        this.direccion = {
            calle: calle,
            ciudad:ciudad,
            codigoPostal: codigoPostal,
        }
        this.habilidades= habilidades;
    }
}
let persona1 = new Personas("valeria", 25, "Mazuren","Bogota", 111165, "Programar");
console.log(persona1.direccion.codigoPostal);
console.log(persona1);






