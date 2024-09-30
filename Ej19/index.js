//factorial de un número

function validarNumero(numero){
    return isNaN(parseInt(numero))
}


function calcularFactorial(numero){
    let factorial = 1
    for(let i = 2; i<= numero; i++){ //i 
        factorial *= i
    }
    return factorial
}


const numeroFactoriano = prompt("Ingrese un número: ")

if(!validarNumero(numeroFactoriano)){
    const factorianoCalculado = calcularFactorial(parseInt(numeroFactoriano))
    alert(factorianoCalculado)
} else {
    alert("Ingrese un número válido")
}
