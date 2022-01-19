/** Operadores Lógicos, unarios y de asignación */
var edadAna, edadMaria, diferenciaEdad;

edadAna = 33;
edadMaria = 34;

//Op Lógicos
var mayorAna = !(edadAna === edadMaria);
console.log(mayorAna);
console.log('---------------------------------------');
//Op Unarios
edadAna++;
console.log(edadAna);
edadAna--;
console.log(edadAna);
console.log('---------------------------------------');
//Op Asignación
var a = 12;
var b = 5;
var c = a % 5; //Residuo o resto de una división
console.log(c);
a += b;
console.log(a);
console.log('---------------------------------------');