function suma (numero1, numero2){
    var resultado = numero1 + numero2
    return `La suma de ${numero1} + ${numero2} es ${resultado}`;
}
function resta (numero1, numero2){
    var resultado = numero1 - numero2
    return `La resta de ${numero1} - ${numero2} es ${resultado}`;
}
function multiplicacion (numero1, numero2){
    var resultado = numero1 * numero2
    return `La multiplicación de ${numero1} * ${numero2} es ${resultado}`;
}
function division (numero1, numero2){
    var resultado = numero1 / numero2
    return `La división de ${numero1} / ${numero2} es ${resultado}`;
}
module.exports = {
    suma,
    resta, 
    multiplicacion,
    division
};