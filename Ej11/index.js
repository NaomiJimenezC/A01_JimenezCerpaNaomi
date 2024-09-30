let numero = prompt("Ingrese un número: ")

while(isFinite(numero) !== true){
    numero = prompt("Ingrese un número por favor")
}

while(numero >= 0){
    numero = prompt("Ingrese un número negativo para salir: ") 
}