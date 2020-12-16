do {
    
    let numero = parseInt(prompt("Ingrese un numero : "));
    var r = confirm("Quiere seguir agregando numeros? ");

    document.write(numero + " - ");


    if(isNaN(numero)){
        alert("El ultimo valor ingresado no es un numero");
    }

} while (r == true);