/** Arreglos */
var nombres = ['Joaquin', 'Paola', 'Cecilia', 'Jaime'];
var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');
console.log(nombres[3]);
console.log(vegetales[0]);

console.log('#-------||----------#');

nombres[3] = 'Alejandro';
vegetales[2] = 'Nabo';
console.log(nombres[3]);
console.log(vegetales[2]);

console.log('#-------||----------#');

console.log(nombres.length);
for(var i = 0; i <= nombres.length - 1; i++){
    console.log(nombres[i]);
}

console.log('#-------||----------#');

vegetales.forEach(function(elemento, indice){
    console.log(elemento, indice);
})

console.log('#-------||----------#');

console.log(nombres);
nombres.push('Pedro');
console.log(nombres);
nombres.unshift('Jaime');
console.log(nombres);
nombres.pop();
console.log(nombres);
nombres.shift();
console.log(nombres);
console.log('#-------||----------#');
var pos = nombres.indexOf('Joaquin');
console.log(pos);

nombres.splice(2, 2);
console.log(nombres);