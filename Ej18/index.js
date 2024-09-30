function validarNumero(numero){
    return isNaN(parseInt(numero))
}

const numeroIngresado = prompt("Ingrese un número: ")
if (!validarNumero(numeroIngresado)){
    let sumaTotal = 0
    for(numero in numeroIngresado){
        sumaTotal += parseInt(numeroIngresado[numero])
    }

    alert(`La suma de los números que componen al ${numeroIngresado} es de ${sumaTotal}`)
} else {
    alert("Ingrese un número válido la próxima vez")
}