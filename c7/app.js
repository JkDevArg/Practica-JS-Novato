/** Elementos DOM y como darles Eventos */
console.log(document.title);
var titulo = document.title = 'Prueba de título';
console.log('Título cambiado a: ' + titulo);
//console.log(document.body);
var h1 = document.getElementsByTagName('h1');
h1[0].innerHTML = 'H1 Se cambio desde app.js';
console.log(h1);

var boton = document.getElementById('boton');
console.log(boton);
boton.addEventListener('click', mensaje);

function mensaje(){
    alert("Esto es un mensaje desde App.js");
}