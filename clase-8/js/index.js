// EL OBJETO MATH

/*
Me proporciona algunas propiedades y objetos para realiar operaciones matematicas comunes,. 
Funciona como un contenedor de herramientas y metodos para realizar operaciones matematicas.
* El objeto math me permite a traves de propuedades y metodos realizar operaciones complejas. 


! MIN Y MAX

Devuelven el valor minimo o maximo entre los numeros proporcionados como argumentos.

*/
let minimo = Math.min(5,10,-3,7);

console.log(minimo); // ? Aqui me arroja el numero que es menor de los que ingrese.

let maximo = Math.max(5, 10,25,98,-100);
console.log(maximo); // ? Aqui determina cual es el mayor de los argumentos ingresados.

/*
PAra redondear numeros:
! CEIL
Lo utilizo cuando quiero redondear hacia arriba un numero decimal.

*/

let numero = 4.2;

let redmas = Math.ceil(numero); //? Redondea mi numero hacia el entero mayor
console.log(redmas); 

// ! FLOOR => Me permite redondear un numero hacia abajo

let numero1 =4.2;
let redmenos= Math.floor(numero1); // ? Redondea mi numero hacia el enero menor 
console.log(redmenos);

// ! round => Cuando quiero que se redondee hacia el numero entero mas cercano

let redondeoJs = Math.round(numero1); //? Redondea mi numero hacia el entero mas cercano
console.log(redondeoJs);

// ! RANDOM => Me da un numero pseudo aleatorio que va entre el 0 y el 1
let aleaorio = Math.random();
console.log(aleaorio);

// * Si quiero que los numeros vayan entre el 1 y el 10

let numerosEntreUnoYDiez = Math.round(Math.random()*(10))+1; // ? Le sumo un uno despues para que no tenga en cuenta el 0
console.log(numerosEntreUnoYDiez);

// * REDONDEAR PRECIOS

let precioOriginales = [19.95, 5.75, 2.99 , 3.50 ,12.30 ,7.99]

let precioRedondeado = precioOriginales.map(redondeo => Math.floor(redondeo)); //? Aqui utilice el metodo map para redndear todos mis precios al entero menor mas cercano.
console.log(precioRedondeado);


let objetos = [
    {
        nombre: "jordan",
        precio: 750.30
    },
    {
        nombre: "nike",
        precio: 850.75
    },
    {
        nombre: "adidas",
        precio: 345.1
    },
    {
        nombre: "NB",
        precio: 235.30
    }
]
console.log(objetos[3].nombre);

let redondeoOb = objetos.map(redondeo => Math.floor(redondeo.precio));
console.log(redondeoOb);

let sumaTotal = objetos.reduce((acum,precio)=> acum +precio.precio,0);// ? Aqui el que va a acceder a mi objeto es el parametro de precio no accedo desde antes sino desde el momento en que lo voy a llamar 

console.log(sumaTotal);

let sumaT = redondeoOb.reduce((acum,precio)=> acum +precio,0);
console.log(sumaT);

//! POW=> Me sirve para elevar un numero a una potencia especifica
let elevado = Math.pow(2,3);
console.log(elevado);
// ! SQUARE ROOT =>  Me saca la raiz cuadrada de un numero
let raiz = Math.sqrt(64);
console.log(raiz);

//Min y max solo funcionan sobre numeros
// Voy a extaer los precios de mi array objetos
let pre = objetos.map(producto => producto.precio);
console.log(pre);
let preciomax = Math.max(...pre); // ? ... lo voy a ver mas adelante, aqui solo busco el precio mas alto
console.log(preciomax);
let productoPrecioMax = objetos.find(producto => producto.precio === preciomax); // ? Aqui busco el producto con el precio mas alto 
console.log(productoPrecioMax);

// LA CLASE DATE
// Esta dise;ada para representar fechas
// Podemos crear, manipular y formatear fechas
// Puedo calcular cosas relacionadas con el tiempo 

let fechaActual = new Date(); // ? Aqui me da tanto la fecha como el dia la hora y la region 
console.log(fechaActual);

// ! anno, mes, dia, horas, minutos, segundos, milisegndos => orden para ngresar datos nosotros

// Los meses inician en cero, van de cero a 11

let fechaPropia = new Date(1999,3,21,21,30,50); // ? Aqui le estoy dando los datos que quiero que guarde, lo puedo utilizar cuando alguien se registra
console.log(fechaPropia);

/*
Existen metodos en DAE que me permiten obtener la informacion de la fecha
Esto se hace con la palagra get al inicio
*/
console.log(fechaActual.getFullYear()); //? Me da el anno
console.log(fechaActual.getMonth()); //? Me da el mes
console.log(fechaActual.getDate()); //? Me da el dia
console.log(fechaActual.getDay()); //? Me da el dia de la semanan en el que esta esa fecha
console.log(fechaActual.getHours());//? Me da la hora en la que esta
console.log(fechaActual.getMinutes()); //? Me da los minutos

// Si nosotros queremos establecer o setear un datp en vez de utilizar get utiizo set => para setear la informacion

let fecha = new Date();
fecha.setFullYear(2025); //? Aqui modifique mi el a;o que tenia mi variable.
console.log(fecha);

console.log(fechaActual.toDateString()); //? AQUI SOLO ME DEVUELVE  LA FECHA, SIN LA HORA NI NADA MAS
console.log(fechaActual.toLocaleString()); //? AQUI SOLO ME DEVUELVE  LA FECHA Y LA HORA 
console.log(fechaActual.toLocaleDateString()); //? AQUI SOLO ME DEVUELVE  LA FECHA, EN FORMATO NUMERO
console.log(fechaActual.toTimeString()); //? AQUI SOLO ME DEVUELVE  LA HORA Y EL ESPACIO







