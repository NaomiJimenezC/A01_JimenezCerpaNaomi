let numeroIngresado = prompt("Ingrese un número entero");
const numeroEntero = parseInt(numeroIngresado);

if (isNaN(numeroEntero)){
    alert("Ingrese un número entero")
} else {
    if (numeroEntero % 2 === 0){
        alert("Es un número par")
    } else {
        alert("Es un número impar")
    }
}