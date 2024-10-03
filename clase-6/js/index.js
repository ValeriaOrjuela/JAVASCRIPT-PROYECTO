// ARRAYS

/*
Un array es una lista o estructura de datos que se utiliza para almacenar una coleccion de valores.
Los valores array pueden ser de cualquier tipo, numeros, cadena de texto, objetos, y puedo tener un array de otras funciones

let array = []; // Esto es un array vacio sin informacion
Los arrays siempre inician en cero
Por consola puedo ver una palabra llamada lenght que me dice la longitud del array
*/

let strings = ["Numero", "Perro", "Jaime", "Tyrion"];
let numeros = [1, 2, 3, 4, 5];
let booleanos = [true, false, false, true];
let mixto = [1, "numero", false, 2];

//Los arrays me sirven para los objetos

let productos = [
    {
        pokemon: "Pikachu",
        tipo: "electrico"
    },
    {
        pokemon: "Ivi",
        tipo: "Normal"
    },
    {
        pokemon: "Lugia",
        tipo: "Legendario"
    }
]

console.log(strings);//Me muestra el array en consola
console.log(strings[2]);// ME muestra el elemento en la posicion 2
console.log(strings.length); // Asi puedo acceder  la longitud de mi array o pues cuantos elementos tiene

for (let i = 0; i < strings.length; i++) {
    console.log(strings[i]);
}

console.log(productos);
console.log(numeros);
console.log(booleanos);
console.log(mixto);

// for (let i = 0; i < strings.length; i++) {
//     console.log(productos[i].pokemon);
//     console.log(productos[i].tipo);

// }



// Lenght no es un metodo, es una propiedad, sirve para darnos o devolvernos la cantidad de elementos que posee el array


/*
Metodos en arays son funciones

*/

//METODO PUSH me permite agregar uno o mas elementos al final del array

strings.push("Agregar"); // ASI AGREGO UN ELEMENTO A MI ARRAY

console.log(strings);

//METODO POP  => Me va a eliminar un elemento o varios del array siempre y cuando esten al final 

strings.pop(); // ELIMINA EL ULTIMO ELEMENTO QUE HABIA EN MI ARRAY
console.log(strings);

// METODO UNSHIFT() => agrega elementos al inicio del array
// Y METODO SHIFT() => elimina elementos al inicio del array

strings.unshift("Bryan sarmiento"); // AGREGUE UN ELEMENTO AL INICIO DE MI ARRAY
console.log(strings);


strings.shift(); // ELIMINE EL PRIMER ELEMENTO DEL ARRAY
console.log(strings);

// METODO SPLICE =>  splice se utiliza para modificar el array eliminando agregando o reemplazando elementos en posiciones especificas.

//Elimina elementos de un array orignal y estos se pueden asignar dentro de uno nuevo


let miNuevoArray = strings.splice(1, 2);
console.log(miNuevoArray);
console.log(strings);


const productos1 = [
    { nombre: 'Manzana', precio: 2 },
    { nombre: 'Banana', precio: 1.5 }
];

// Aqui accedo a todos los elementos dentro de los objetos

for (let i = 0; i < productos1.length; i++) {
    // Accediendo a las propiedades del objeto

    for (const propiedad in productos1[i]) {
        console.log(propiedad, productos1[i][propiedad]);
    }
}


strings.push("perro");
strings.push("Jaime");

// METODO JOIN => me convierte los elementos de un array en una cadena de texto y los une a traves de un separador. 

let pasoAString = strings.join(" "); // todo lo que esta en strings lo paso a string
console.log(pasoAString); // Me sale una cadena de texto

// METODO INDEXOF => Me sirve para buscar el primer elemento de un array que se repita
// Es para saber la posicion en la que aparece porr primera vez un elemento del array
let frutas = ["manzana", "pera", "banana","mazana", "naranja"];
let indice = frutas.indexOf("manzana");
console.log("el indice de manzana es: "+ indice);

//METODO INCLUDES => Me dice si un elemento existe o no en el array, me devuelve un booleano

let existe = frutas.includes("frutilla");
console.log(existe);

// METODO REVERSE => Si quiero que mi array se de vuelta, invierte el orden de los elementos de mi array

let Invertir = frutas.reverse();
console.log(Invertir);

// METODO CONCAT => Se utiliza para combinar dos o mas arrays en uno nuevo

let array1 = [1,2,3,4];
let array2 =  [ 5,6,7,8];
let array3 = [9,10,11,12];

let concatenacion = array1.concat(array2,array3);

console.log(concatenacion);

// METODO SLICE => Se  utiliza para extraer una porcion de una array y devolverlo en un nuevo array, este nuevo array no modifica el array original

let sliceArray = array1.slice(1,4);
console.log(array1);
console.log(sliceArray);



// fOR OF => ES UNA ESTRUCTURA DE CONTROL DE FLUJO, SE UTILIZA PARA RECORRER Y OPERAR EN ELEMENTOS DE UN ITERABLE

// ES UN BUCLE

const lenguajes = ["ingles", "espanol", "italiano", "frances"];

for (const lenguaje of lenguajes) {
    console.log(lenguaje);
}