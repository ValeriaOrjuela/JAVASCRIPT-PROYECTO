
function imprimir1100(){
    for (let i = 1; i <= 100; i++) {
        
        console.log("el que se imprime es " + i);
        
    }
}

imprimir1100();


// 1 - Crea una función que reciba el año actual y el año de nacimiento de una persona, y calcule su edad. Si la persona aún no ha nacido, la función debe devolver un mensaje indicando que el año de nacimiento no es válido.

function calcularEdad(actual, nacimiento){
    if (nacimiento>actual || nacimiento < 0){

        return "No ha nacido aun la persona o el anno no es valido";
        
    }else{
        let edad = actual - nacimiento;
        return edad;
    }
}

edad=calcularEdad(2024,1999);
if( edad != NaN){
    console.log("La persona tiene " + edad+ " años");
    
    
}else{
    console.log(edad);
}

