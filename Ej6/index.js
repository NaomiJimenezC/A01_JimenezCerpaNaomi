/*
Escribe un script que pida al usuario un número y utilice el operador 
ternario para determinar si el número es positivo, negativo o cero. Muestra el resultado en un alert().
*/


const number = prompt()
if (isFinite(number)){
    //number > 0 ? number < 0 ? number === 0 :alert(`El ${number} es positivo`):alert(`El ${number} es negativo) 
    number > 0 ? alert("positivo"):
    number < 0 ? alert("negativo"): alert("es un cero")
} else {
    alert("Ingrese un número")
}