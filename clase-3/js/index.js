/*
//Realizá un programa que permita ingresar 3 notas pertenecientes  para cierto alumno de nivel secundario. Debe calcularse y mostrarse la nota promedio.
let nota1 = parseFloat(prompt("Ingrese la nota 1: "));
let nota2 = parseFloat(prompt("Ingrese la nota 2: "));
let nota3 = parseFloat(prompt("Ingrese la nota 3: "));
let promedio= (nota1+nota2+nota3)/3;
//to fixed es para poner los decimales y poner cuantos quiero que salgan.
console.log(promedio.toFixed(3));
//Realizá un programa que permita ingresar un número entero. Debe mostrarse el número ingresado: a. Multiplicado por 5. b. Dividido por 2
let numero= parseInt(prompt("Ingrese un número entero"));
let multiplicacion= numero*5;
let division = multiplicacion/2;

console.log("El número: " + numero + " multiplicado por 5 es: "+ multiplicacion +" y esto dividido por 2 es: "+ division);

//Realiza un programa que permita ingresar el valor monetario de una hora de trabajo y la cantidad de horas trabajadas por día por un trabajador. Debes mostrar el valor del salario semanal, sabiendo que trabaja todos los días hábiles y la mitad de las horas del día hábil los sábados. (Todas las horas valen lo mismo.) 

let costo = parseInt(prompt("Ingrese el valor de la hora de trabajo: "));
let horas = parseInt(prompt("Cuantas horas son laboradas: "));
let horasTotales= (horas * 5) + (horas/2);
let salarioSemanal= horasTotales*costo;

console.log("El salario semanal es: "+ salarioSemanal);

// Realiza un programa que permita ingresar valores del mismo tipo para las variables num1 y num2. Una vez cargadas, mostrar ambas variables por pantalla, intercambiá sus valores (que lo cargado en num1 quede en num2, y viceversa) y volvé a mostrarlas actualizadas. [EC]

let num1= parseInt(prompt("Ingresa el primer numero: "));
let num2= parseInt(prompt("Ingresa el segundo número: "));
console.log("el numero 1 es: "+ num1 + " el numero 2 es: "+ num2);

let cambio= num1;
num1=num2;
num2=cambio;

console.log("el numero 1 es: "+ num1 + " el numero 2 es: "+ num2);
*/

/*
CICLOS
ciclos por conteo: Es el que utilizo cuando ya se de antemano cuantas veces quiero que se repita mi código.
FOR
ciclo por condición o condicional: Este a diferencia del ciclo por conteo, puede repetirse infinitas veces hasta que una condicion se de o se cumpla.
Los ejemplos clasicos de los ciclos condicionales sonel while y el do while
*/

/*

CICLO POR CONTEO

OPERADORES IMPORTANTES: 
Cuando yo quiera incrementar algo lo hago a traves de:
INCREMENTO: ++ -> i+1
Cuando yo quiera decrementar algo uso el:
DECREMENTO: -- -> i-1

*/
// i ++ -> es un post-incremento
//Este va a sumar despues de que se utilice la expresion
let x=5;
let y = x ++;

console.log(y);
console.log(x);

//++ i -> es un pre-incremento
//El valor de la variable incrementa antes de que se utilice
let c= 5;
let i= ++c;
console.log(i);
console.log(c);

/*
CICLO FOR 
ciclo por conteo
Posee 3 partes
-Inicializacion (desde) -> Nos va a dar la variable de control inicial
-Condicion (Hasta )-> Es el hasta donde quiero que se repita, se verifica antes de cada iteracion, si la condicion es verdadera el ciclo continua y si es falsa termina
-Actualizacion -> Es la parte donde se genera el incremento o decremento de la variable
for (let inicializacion = desde; condicion < ahasta; actualizacion++) {
    const element = array[i];
    
}
*/
let h=1;
for (let k = 0; k < 10; k++) {
    //la actualizacion se ejecuta al final de cada iteracion, se suma y se vuelve a evaluar
    console.log(k)
    h=h+1;

}
console.log(h);

//tabla de multiplicar
n=5;
for(let i=1; i<=10;i++){
    let tabla=n*i;
    console.log(n+" * "+ i + " = "+ tabla);
}

//SENTENCIA CONTINUE, Se utiliza para saltar una iteración y continuar con la siguiente
for(let i =1; i<=10; i++){
    if(i===3){
        continue
    }
    console.log(i);
}
//SENTENCIA BREAK, Se utiliza cuando quiero que el bucle se frene y se salga

for(let i =1; i<=10; i++){
    if(i===3){
        break
    }
    console.log(i);
}

/*WHILE
while es una estructura de control que va a repetir un conjunto de instrucciones mientras se cumpla una condicion especifica

while(condicion){
bloque de codigo a ejecutar
}
*/
let contador=1;
while(contador != 10){

    console.log("numero: "+contador);
    contador++

}
/* DO WHILE
do while se utiliza para ejecutar un bloque de codigo al menos una vez y luego repetirlo mientras se cumpla una condicion especifica


do{
bloque de codigo a ejecutar
}while(condicion)
*/
let p=1;
let intentos=0;
const maxIntentos=3;
do{

    p=prompt("Ingrese la contraseña");
    intentos++;
    if (intentos>=3){
        alert("contraseña incorrecta")
        break
    }
    if(p==="clave123"){
        alert("contraseña correcta")
    }
    


}while(p !== "clave123")



