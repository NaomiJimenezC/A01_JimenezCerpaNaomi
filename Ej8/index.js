const edadUsuario = prompt("Ingree su edad:")

if (edadUsuario >= 18){
    alert("El usuario es mayor de edad")
    if (edadUsuario >= 18 && edadUsuario <= 25) {
        alert("El usuario tiene entre 18 y 25 años");
    }

} else if (edadUsuario < 18){
    alert("El usuario es menor de edad")
} 