// En la segunda sintaxis se llama a la etiqueta o atributo y se utiliza la palabra reservada on u el tipo de evento. Una vez que se llama se debe ejecutar una funcion donde le voy a decir que es lo que quiero que haga el evento.
const miBoton = document.getElementById('miBoton');
miBoton.onclick = function(){
    alert("se ejecuto el evento de la segunda manera")
}

// .on es un metodo que me sirve para asignar eventos

// La otra manera para declarar un evento es addEventListener
/*
Es una forma mas flexible y la mas recomendada para gestionar eventos.
addEventListener(tipo de evento, poner la funcion)
*/
const botonDos = document.getElementById('Boton2');
botonDos.addEventListener('click',function(){
    console.log("Ejecucion del evento en la tercera sintaxis")
})

// addEventListener es un metodo de JS que se utiliza para asignar eventos, me permite ejecutar funciones cuando ocurre un evento especifico.

const botonNoche = document.getElementById('modoNoche');
botonNoche.addEventListener(
    'click', function(){
        // Aqui estoy incorporando una clase
        // classList => propiedad que nos permite mnipular las clases en css
        // toggle => me permite a;adir o quitar, en este caso la clase

        document.body.classList.toggle('modo-noche');

        if(document.body.classList.contains('modo-noche')){
            botonNoche.textContent = "Modo noche";
        }else{
            botonNoche.textContent = "Modo dia"
        }
    }
)

// Eventos de raton, eventos de teclado, eventos pensados para formularios
/*
!EVENTOS DE RATON
mouseover: Se va a activar cuando el puntero del raton este sobre el elemento
mouseout: Se va a activar cuando el puntero del raton salga del elemento
*/
const pasarRaton = document.getElementById('pasarRaton');

pasarRaton.addEventListener('mouseover', function(){
    pasarRaton.style.backgroundColor = 'lightgreen';

})
pasarRaton.addEventListener('mouseout', function(){
    pasarRaton.style.backgroundColor = 'lightBlue';
    
})

/*
mousedown => se dispara cuando un boton del raton es presionado
mouseup => se dispara cuando el click del raton se suelta

*/

pasarRaton.addEventListener('mousedown', function(){
pasarRaton.textContent = "PRESIONASTE LA CAJA";
});

pasarRaton.addEventListener('mouseup', function(){
    pasarRaton.textContent = "SOLTASTE EL DIV";
    });

// !EVENTOS DE TECLADO
/*
keydown => se dispara cuando se presiona una tecla
keyup => se dispara cuando se suelta una tecla
keypress=> ya esta en desuso( se dispara cuando una tecla es presionada)
*/

const estado = document.getElementById('estado');
// DOCUMENT PORQUE ESTOY ACCEDIENDO A TODO EL DOCUMENTO NO TENGO QUE OPRIMIR ALGUN LUGAR N ESPECIFICO

document.addEventListener('keydown', function(event){
    // key es una propiedad del evento de teclado que nos sirve para obtener el valor de la tecla que fue presionada

    estado.textContent = ` tecla presionada : ${event.key}`
    estado.style.color = 'lightBlue';
})
document.addEventListener('keyup', function(event){
    // key es una propiedad del evento de teclado que nos sirve para obtener el valor de la tecla que fue presionada

    estado.textContent = ` tecla soltada : ${event.key}`
    estado.style.color = 'lightgreen';
})

//! EVENTOS DE FORMULARIO

/*
submit => se activa cuando el formulario se envia y me sirve para validar datos
change => se activa cuando el valor de un elemento de un formulario cambia y se pierde foco. 

*/
const formulario =document.getElementById('formulario');
formulario.addEventListener('submit', function(evento){
    const nombreInput =document.getElementById('nombre').value
    if(nombreInput === ''){
        alert('por favor ingresa un nombre');
        evento.preventDefault() //Evitar que el formulario se envie
    }

})

const colorSeleccionado = document.getElementById('color');
colorSeleccionado.addEventListener('change', function(eventi){
    alert(`Seleccionaste ${eventi.target.value}`)
})