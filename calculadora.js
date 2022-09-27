function suma (numero1, numero2){ 
    return numero1 + numero2;
}
function resta (numero1, numero2){
    return numero1 - numero2;
}
function multiplicacion (numero1, numero2){
    return numero1 * numero2;
}
function division (numero1, numero2){
    if(numero2===0){
        throw "No se puede dividir por 0";
    }
        return numero1 / numero2; 

}
module.exports = {
    suma,
    resta, 
    multiplicacion,
    division
};