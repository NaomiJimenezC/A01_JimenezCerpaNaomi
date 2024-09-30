
let contrasenaIngresada = prompt("Ingrese la contraseña.")
const contraseniaCorrecta = "1234"
do {
    if (contrasenaIngresada != contraseniaCorrecta){
        prompt("Ingrese de nuevo la contraseña")
    }

} while( contrasenaIngresada != contraseniaCorrecta)

alert("Contraseña correcta")