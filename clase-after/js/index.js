// INGRESAR VALORES DE PRODUCTOS A TRAVES DE UN PROMPT, QUE EL USUARIO ESCRIBA SI PARA FINALIZAR LA CARGA DE PRODUCTOS, QUE ESOS VALORES SE SUMEN Y DEN UN RESULTADO EN PANTALLA

let productos = parseInt(prompt("Cuantos productos vas a ingresar: "));
let cantidad, precio, total,suma, multiplicacion,cont;
suma=0;

for (let i = 0; i < productos; i++) {
    cont=i+1;
    console.log("Producto " + cont + ":");
    cantidad= parseInt(prompt("Que cantidad quieres del producto "+ cont));
    precio=parseInt(prompt("Cuanto cuesta el producto "+ cont));
    multiplicacion= cantidad * precio;
    console.log("El total del producto " + cont + " es: "+ multiplicacion);
    suma=suma+multiplicacion;

    
}
total=suma;
console.log("El total de la compra es: " + total);

let input;
let total1=0;

// Aqui mi variable que declaro dentro del while solo vive en el while, en lo de afuera no existe esa variable por lo que cada vez que se reinicia mi bucle while la variable se elimina.
while(true){
    input=prompt("Ingresa el valor del producto o escribe 'terminar' para finalizar");
    if(input.toLowerCase()==='terminar'){
        break;
    }
    let valorProducto =parseFloat(input);

    if(!isNaN(valorProducto)&& valorProducto>0){
        total1 +=valorProducto;
        console.log(total1);

    }else{
        alert("Por favor ingresa un numero correcto");

    }
}

console.log("El total de la compra es: " + total1.toFixed(2));

//Realizá un programa que permita ingresar un número entero e indique si se trata de un número par o impar. 
numero=parseInt(prompt("Ingresa un numero: "));

if(numero%2==0){
    console.log("El numero "+ numero + " es par");
}else{
    console.log("El numero "+ numero + " es impar");
}
//Realizá un programa que permita ingresar dos números enteros e indique cuál de ellos es el mayor.

mun1=parseInt(prompt("Ingresa el primer numero: "));
mun2=parseInt(prompt("Ingresa el segundo numero: "));

if(mun1>mun2){
    console.log("El numero 1: "+ mun1 + " es mayor que el numero 2: "+ mun2);

}else{
    console.log("El numero 2: "+ mun2 + " es mayor que el numero 1: "+ mun1);
}

let costo = parseInt(prompt("Ingrese el valor de la hora de trabajo: "));
let horas = parseInt(prompt("Cuantas horas son laboradas: "));
let horasTotales= (horas * 5) + (horas/2);
let salarioSemanal= horasTotales*costo;

console.log("El salario semanal es: "+ salarioSemanal);