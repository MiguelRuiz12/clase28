//todo: hacer el front de la calculadora
const process = require('process')
const restar = require('./restar')
const { argv } = process;

function calculadora(comando, a , b) {
    switch (comando) {
        case "sumar":

            break;
        case "restar":
            return restar
;
        case "multiplicar":

            break;
        case "dividir":

            break;

        default:
            return "comando no valido"
                ;
    }
}
console.log(calculadora(argv[2], +argv[3], +argv[4]));