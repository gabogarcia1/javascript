for (let i = parseInt(prompt("Ingrese un numero menor a 50 : ")); i >= 0; i = i - 1) {
    if (i > 50) {
        alert("Ingreso un numero mayor a 50");
        break;
    }
    else if (i < 0) {
        alert("Ingreso un numero Menor a cero");
        break;
    }
    else if (isNaN(i)) {
        alert("Ingreso un caracter no numerico");
        break;
        //esto creo que nunca va a pasar
        
    }
    else {
        let j = 1;
        while (j <= i) {
            document.write(`${i}`);
            j++;
        }
        document.write("<br>");
    }
}
