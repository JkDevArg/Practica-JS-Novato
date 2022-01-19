/** Funciones */
/** Mensaje */

function mensaje(){
    return 'Mensaje como argumento de la función';
}
var msj = mensaje();
console.log(msj);

console.log('#--------------------#');
/** Sumar */

var sumar = function (a, b, c=3){
    return a + b + c;
}
var result = sumar(4, 5, 8);
var result1 = sumar(3, 7);
console.log(result1);
console.log(result);

console.log('#--------------------#');
/** Funciones Recursivas */

var factorial = function(n){
    if((n == 0) || (n == 1))
        return 1;
    else
        return(n * factorial(n - 1));
}

console.log(factorial(4));  