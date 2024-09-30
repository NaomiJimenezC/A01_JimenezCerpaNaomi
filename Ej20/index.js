//palíndromo

function validarNumero(numero){
    return isNaN(parseInt(numero))
}



function esPalindromo(palabra = ""){
    let palabraMinus = palabra.toLowerCase()
    const palabraInvertida = palabraMinus.split('').reverse().join('')
    return palabraMinus === palabraInvertida
}

const palabraPalindroma = prompt("Ingrese una palabra para ver si es palíndroma:")

if(validarNumero(palabraPalindroma)){
    if(esPalindromo(palabraPalindroma)){
        alert(`${palabraPalindroma} es palíndroma`)
    } else {
        alert(`${palabraPalindroma} no es palíndroma`)
    }
}