const edadUsuario = prompt("Ingrese su edad")
const nacionalidad = prompt("Ingrese su nacionalidad")

if (isFinite(edadUsuario)){
    if(edadUsuario >= 18){
        if (nacionalidad.toLowerCase() === "española" ){
            alert("Puedes votar")
        }
    } else {
        alert("No puedes votar")
    }
} else {
    alert("Ingrese un número.")
}