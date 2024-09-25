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