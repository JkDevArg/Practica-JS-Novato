/** if anidados */

var nombre = 'JkDev';
var edad = '29';

// edad < 12 es un niño.
// edad > 11, es < 18, es un adolescente.
// edad > 17, es < 60, es un adulto.
// edad > 60 es un anciano.
if(edad < 12){
    console.log(nombre + ' es un niño.')
} else if((edad > 11) && (edad < 18)){
    console.log(nombre + ' es un adolescente')
} else if((edad > 17) && (edad < 60)){
    console.log(nombre + ' es un adulto');
} else {
    console.log(nombre + ' es un anciano');
}