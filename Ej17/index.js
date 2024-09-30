let mayoriasDeEdad = 0
for (let i=1; i <=5; i++){
    let edadUsuario = parseInt(prompt("Ingrese su edad"))
    if( !isNaN( edadUsuario) && edadUsuario >= 18){
        mayoriasDeEdad++
    } 
}
alert(`${mayoriasDeEdad}`)